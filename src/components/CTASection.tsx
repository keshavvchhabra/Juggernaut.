import React from 'react';
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const handleNavigation = () => {
    window.location.href = '/chat';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gray-800">Ready to Transform Your </span>
          <span className="text-cyan-500">Legal Practice?</span>
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
          Join thousands of legal professionals using JurisSmart to save time, 
          reduce costs, and deliver better results.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={handleNavigation}
            variant="outline" 
            className="border-blue-500 text-blue-500 hover:bg-blue-50 bg-white px-8 py-6 text-lg rounded-full"
          >
            Start Free Trial
          </Button>
          
          <Button 
            onClick={handleNavigation}
            className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-6 text-lg rounded-full"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
}