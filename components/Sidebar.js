'use client';

import React, { useState } from 'react';

export default function Sidebar({ services, activeId }) {
  const [searchQuery, setSearchQuery] = useState('search ..');

  const filteredServices = services.map(service => {
    const filteredEndpoints = service.endpoints.filter(ep =>
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...service, endpoints: filteredEndpoints };
  }).filter(service => service.endpoints.length > 0);

  return (
    <div className="w-64 h-full bg-gray-50 border-r border-gray-200 overflow-y-auto fixed left-0 top-0 pb-10">
      <div className="p-4 font-bold text-xl text-[#24aa4d] border-b border-gray-200 sticky top-0 bg-gray-50 z-10">
        Bargad.ai API Docs
      </div>
      <div className="p-4 border-b border-gray-200 sticky top-[60px] bg-gray-50 z-10">
        <input
          type="text"
          placeholder="Search endpoints..."
          className="w-full px-3 py-2 text-black border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#24aa4d] focus:border-transparent"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <nav className="p-4">
        {filteredServices.map((service) => (
          <div key={service.id} className="mb-6">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {service.name}
            </h2>
            <ul className="space-y-1">
              {service.endpoints.map((endpoint) => (
                <li key={endpoint.id}>
                  <a
                    href={`#${endpoint.id}`}
                    className={`block px-2 py-1.5 text-sm rounded transition-colors ${activeId === endpoint.id
                      ? 'bg-indigo-50 text-indigo-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {endpoint.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
