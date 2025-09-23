"use client";
import React from 'react';

export default function CTASection() {
  const handleNavigation = () => {
    window.location.href = '/chat';
  };

  return (
    <section className="py-20 bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-800">Ready to Transform Your </span>
          <span className="text-cyan-500">Legal Practice?</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
          Join thousands of legal professionals using JurisSmart to save time, 
          reduce costs, and deliver better results.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={handleNavigation}
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 bg-white px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200"
          >
            Start Free Trial
          </button>
          
          <button 
            onClick={handleNavigation}
            className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-4 text-lg rounded-full font-medium transition-colors duration-200"
          >
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}