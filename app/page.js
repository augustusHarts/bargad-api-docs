'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/layout/Sidebar';
import EndpointSection from '../components/EndpointSection';
import { services } from '../data/services';

export default function ApiDocsPage() {
  const [activeId, setActiveId] = useState('');

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
    if (!elements.length) return;

    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex w-full min-h-screen bg-white">
      <div className="md:block w-64 flex-shrink-0">
        <Sidebar services={services} activeId={activeId} />
      </div>

      <main className="flex-1 w-full">
        {/* Mobile Header */}
        <div className="md:hidden bg-[#24aa4d] text-white p-4 font-bold text-xl sticky top-0 z-20 shadow-md">
          Bargad.ai API Docs
        </div>

        <div className="max-w-[1600px] w-full">
          <section id="introduction" className="border-b border-gray-200 scroll-mt-0">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 lg:border-r border-gray-200 bg-white">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">API Documentation</h1>
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to our API reference. Here you&apos;ll find comprehensive guides and documentation to help you start working with our platform.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Base URL</h3>
                <code className="bg-gray-100 px-3 py-2 rounded text-base font-mono block mb-8 text-gray-800">
                  https://api.bargad.ai
                </code>
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 bg-[#000000] text-white">
                <h3 className="text-sm border-b border-[#24aa4d]/40 pb-2 mb-4 font-bold text-[#42ea5a] uppercase tracking-wider">Authentication</h3>
                <div className="bg-[#0a0a0a] p-4 rounded border border-[#24aa4d]/30 text-sm font-mono">
                  <div className="text-gray-300">Authorization: Bearer <span className="text-[#42ea5a] font-bold">YOUR_API_KEY</span></div>
                </div>
              </div>
            </div>
          </section>

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