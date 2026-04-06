'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import EndpointSection from '../components/EndpointSection';
import { services } from '../data/services';

export default function Home() {
  const [activeId, setActiveId] = useState('');

  // Intersection observer to track which endpoint is currently active on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const elements = document.querySelectorAll('section[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* Sidebar hidden on very small screens, visible on md+ */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <Sidebar services={services} activeId={activeId} />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:w-full w-full">
        {/* Mobile Header */}
        <div className="md:hidden bg-[#24aa4d] text-white p-4 font-bold text-xl sticky top-0 z-20 shadow-md">
          Bargad.ai API Docs
        </div>

        <div className="max-w-[1600px] w-full">
          {/* Introduction block */}
          <section id="introduction" className="border-b border-gray-200 scroll-mt-0">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 lg:border-r border-gray-200 bg-white">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">API Documentation</h1>
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to our API reference. Here you'll find comprehensive guides and documentation to help you start working with our platform as quickly as possible.
                </p>
                <p className="text-gray-600 mb-8 mt-4 leading-relaxed">
                  The API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                </p>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">Base URL</h3>
                <code className="bg-gray-100 px-3 py-2 rounded text-base font-mono block mb-8 text-gray-800">
                  https://api.bargad.ai
                </code>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 bg-[#000000] text-white">
                <h3 className="text-sm border-b border-[#24aa4d]/40 pb-2 mb-4 font-bold text-[#42ea5a] uppercase tracking-wider">Authentication</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  Authenticate your account when using the API by including your secret API key in the authorization header.
                </p>
                <div className="bg-[#0a0a0a] p-4 rounded border border-[#24aa4d]/30 overflow-x-auto text-sm font-mono shadow-md shadow-[#24aa4d]/10">
                  <div className="text-gray-300">Authorization: Bearer <span className="text-[#42ea5a] font-bold">YOUR_API_KEY</span></div>
                </div>
              </div>
            </div>
          </section>

          {/* Render all services and their endpoints */}
          {services.map((service) => (
            <div key={service.id}>
              {service.endpoints.map((endpoint) => (
                <EndpointSection key={endpoint.id} endpoint={endpoint} />
              ))}
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
