'use client';

import React, { useState } from 'react';

export default function Sidebar({ services, activeId }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.map(service => {
    const filteredEndpoints = service.endpoints.filter(ep =>
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...service, endpoints: filteredEndpoints };
  }).filter(service => service.endpoints.length > 0);

  return (
    <div className="w-72 h-full bg-[#f8fcf9] border-r border-[#e0f2e5] overflow-y-auto fixed left-0 top-0 pb-10 shadow-lg shadow-[#24aa4d]/5 custom-scrollbar">
      <div className="p-6 font-extrabold text-2xl text-[#000] border-b border-[#e0f2e5] sticky top-0 bg-[#f8fcf9] z-10 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#24aa4d] to-[#42ea5a] shadow-md flex items-center justify-center text-white font-black text-xl shadow-[#24aa4d]/30">B</div>
        Bargad.ai
      </div>
      <div className="p-5 border-b border-[#e0f2e5] sticky top-[84px] bg-[#f8fcf9] z-10">
        <div className="relative">
          <svg className="w-4 h-4 absolute left-3.5 top-3.5 text-[#24aa4d]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input
            type="text"
            placeholder="Search API..."
            className="w-full pl-10 pr-4 py-2.5 text-black border border-[#d1ebd7] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#24aa4d]/40 focus:border-[#24aa4d] bg-white shadow-inner transition-all placeholder:text-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <nav className="p-6 mt-2">
        {filteredServices.map((service) => (
          <div key={service.id} className="mb-8 relative">
            <h2 className="text-[11px] font-black text-[#24aa4d] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#42ea5a] shadow-[0_0_8px_0_#42ea5a]"></span>
              {service.name}
            </h2>
            <ul className="space-y-1.5 border-l-2 border-[#e0f2e5] ml-1.5 pl-4">
              {service.endpoints.map((endpoint) => (
                <li key={endpoint.id}>
                  <a
                    href={`#${endpoint.id}`}
                    className={`block px-3 py-2 text-[13px] rounded-lg transition-all duration-300 ${activeId === endpoint.id
                      ? 'bg-gradient-to-r from-[#24aa4d] to-[#42ea5a] text-white font-bold shadow-md shadow-[#24aa4d]/30 translate-x-1'
                      : 'text-gray-600 font-medium hover:bg-[#e0f2e5] hover:text-[#24aa4d] hover:translate-x-1'
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
