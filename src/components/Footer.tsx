import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">JUGGERNAUT.</h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              AI-powered legal assistance for professionals and individuals.
            </p>
          </div>
          
          {/* Features Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Features</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">AI Legal Chatbot</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Document Uploader</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Draft Generator</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Legal Notice Creator</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Flowchart Generator</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Legal Checker</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-base">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <p className="text-gray-500 text-base mb-4 sm:mb-0">
            © 2025 JurisSmart. All rights reserved.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-50 rounded-full"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-50 rounded-full"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:bg-gray-50 rounded-full"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}