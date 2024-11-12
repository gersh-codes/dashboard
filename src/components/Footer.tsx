// src/components/Footer.tsx
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Us */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600">About Us</h2>
            <p className="mt-2 text-sm">
              DermaClinic is committed to providing top-notch dermatological services to help you look and feel your best.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600">Services</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Skin Consultations</li>
              <li>Medical Treatments</li>
              <li>Cosmetic Procedures</li>
              <li>Skin Care Products</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} DermaClinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
