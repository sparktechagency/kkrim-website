import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-12">
          {/* Company Info - Full width on mobile, 2 columns on sm, 1 column on lg+ */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <Image
                  src={"/icons/logo.png"}
                  height={900}
                  width={900}
                  alt='Logo'
                  className='w-full h-full rounded shadow'
                />
              </div>
              <span className="text-white text-lg lg:text-xl font-semibold">Sudo Secure</span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Professional penetration testing and security assessments for modern businesses.
            </p>

            <div className="space-y-2 lg:space-y-3">
              <a
                href="mailto:contact@sudosecure.com"
                className="flex items-center gap-2 lg:gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all lg:break-normal">contact@sudosecure.com</span>
              </a>

              <a
                href="tel:+12345678900"
                className="flex items-center gap-2 lg:gap-3 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +1 (234) 567-8900
              </a>

              <div className="flex items-start gap-2 lg:gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Services</h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a
                  href="#infrastructure"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Infrastructure Testing
                </a>
              </li>
              <li>
                <a
                  href="#web-app"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Web Application
                </a>
              </li>
              <li>
                <a
                  href="#mobile"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Mobile Security
                </a>
              </li>
              <li>
                <a
                  href="#api"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  API Testing
                </a>
              </li>
              <li>
                <a
                  href="#cloud"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Cloud Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Company</h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-base lg:text-lg mb-4 lg:mb-6">Resources</h3>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <a
                  href="#case-studies"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#documentation"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#reports"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Sample Reports
                </a>
              </li>
              <li>
                <a
                  href="#security-tips"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Security Tips
                </a>
              </li>
              <li>
                <a
                  href="#whitepapers"
                  className="text-gray-400 hover:text-white transition-colors text-sm block py-1"
                >
                  Whitepapers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-6 lg:mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Legal Links - Stack on mobile, row on md+ */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm py-1"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm py-1"
            >
              Terms of Service
            </a>
            <a
              href="#imprint"
              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm py-1"
            >
              Imprint
            </a>
            <a
              href="#cookies"
              className="text-gray-400 hover:text-white transition-colors text-xs lg:text-sm py-1"
            >
              Cookie Policy
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 mb-4 lg:mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-xs lg:text-sm">
            © {new Date().getFullYear()} Sudo Secure. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Protecting businesses through comprehensive security assessments.
          </p>
        </div>

        {/* Mobile Optimizations */}
        <div className="lg:hidden mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-4">
              Need immediate security assistance?
            </p>
            <a
              href="tel:+12345678900"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Emergency Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}