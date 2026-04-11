import React from 'react';
import { useEffect, useState } from "react";

const MethodBadge = ({ method }) => {
  const colors = {
    GET: 'bg-blue-100 text-blue-700 border-blue-200',
    POST: 'bg-green-100 text-green-700 border-green-200',
    PUT: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    DELETE: 'bg-red-100 text-red-700 border-red-200',
  };

  const colorClass = colors[method.toUpperCase()] || 'bg-gray-100 text-gray-700 border-gray-200';

  return (
    <span className={`px-2 py-0.5 text-xs font-bold rounded border ${colorClass}`}>
      {method.toUpperCase()}
    </span>
  );
};

export default function EndpointSection({ endpoint }) {
  const [role, setRole] = useState("user");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "user");
  }, []);

  if (endpoint.adminOnly && role !== "admin") {
    return null;
  }

  return (
    <section id={endpoint.id} className="border-b border-gray-200 ">
      
      {/*  */}
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 lg:p-12 lg:border-r border-gray-200 bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-2xl font-semibold text-gray-900">{endpoint.title}</h2>
          </div>

          <div className="mb-6 flex items-center space-x-2">
            <MethodBadge method={endpoint.method} />
            <code className="text-sm bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">
              {endpoint.path}
            </code>
          </div>

          <p className="text-gray-600 mb-8">{endpoint.description}</p>

          {endpoint.parameters && endpoint.parameters.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Parameters</h3>
              <ul className="space-y-4">
                {endpoint.parameters.map((param, idx) => (
                  <li key={idx} className="flex flex-col">
                    <div className="flex items-baseline space-x-2">
                      <span className="font-mono text-sm font-semibold text-gray-800">{param.name}</span>
                      <span className="text-xs text-gray-500 italic">{param.type}</span>
                      <span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">in {param.in}</span>
                    </div>
                    <span className="text-sm text-gray-600 mt-1">{param.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {endpoint.requestBody && (
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">Request Body</h3>
              <pre className="bg-gray-50 text-gray-800 p-4 rounded border border-gray-200 text-sm font-mono overflow-auto whitespace-pre-wrap">
                {JSON.stringify(endpoint.requestBody, null, 2)}
              </pre>
            </div>
          )}
        </div>

        {/* Right Column - Code Samples & Responses */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-[#000000] text-white">
          <h3 className="text-sm border-b border-[#24aa4d]/40 pb-2 mb-5 font-bold text-[#42ea5a] uppercase tracking-wider">Example Request</h3>
          <div className="bg-[#0a0a0a] p-5 rounded-lg mb-10 overflow-x-hidden text-sm font-mono border border-[#24aa4d]/30 shadow-md shadow-[#24aa4d]/5">
            <div className="flex space-x-2 mb-2">
              <span className="text-[#42ea5a] font-bold">{endpoint.method}</span>
              <span className="text-white">{endpoint.path}</span>
            </div>
            <div className="text-gray-400">Host: api.bargad.ai</div>
            <div className="text-gray-400">Authorization: Bearer <span className="text-[#fff] font-bold">{'<token>'}</span></div>
            {endpoint.method !== 'GET' && endpoint.requestBody && (
              <pre className="mt-4 text-[#42ea5a] whitespace-pre-wrap">
                {JSON.stringify(endpoint.requestBody, null, 2)}
              </pre>
            )}
          </div>

          <h3 className="text-sm border-b border-[#24aa4d]/40 pb-2 mb-5 font-bold text-[#42ea5a] uppercase tracking-wider">Responses</h3>
          {Object.entries(endpoint.responses).map(([status, response]) => (
            <div key={status} className="mb-6">
              <div className="flex items-center mb-3">
                <span className={`text-sm font-bold mr-3 px-2 py-0.5 rounded ${status.startsWith('2') ? 'bg-[#24aa4d]/20 text-[#42ea5a]' : 'bg-red-900/40 text-red-400'}`}>
                  {status}
                </span>
                <span className="text-sm text-gray-300">{response.description}</span>
              </div>
              {response.body && (
                <pre className="bg-[#0a0a0a] p-5 rounded-lg overflow-x-auto text-sm font-mono border border-[#24aa4d]/30 text-[#42ea5a] whitespace-pre-wrap shadow-md shadow-[#24aa4d]/5">
                  {JSON.stringify(response.body, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
