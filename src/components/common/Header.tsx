import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ChevronRight, Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [language, setLanguage] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Function to handle dropdown item clicks without page reload
  const handleDropdownClick = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  console.log(handleLanguageChange)

  const services = [
    { name: 'Infrastructure Penetration Testing', path: '/services/infrastructure-testing' },
    { name: 'Web Application Penetration Testing', path: '/services/web-application-testing' },
    { name: 'Mobile App Penetration Testing', path: '/services/mobile-app-testing' },
    { name: 'API Security Testing', path: '/services/api-security-testing' },
    { name: 'Cloud & DevOps Security Testing', path: '/services/cloud-devops-testing' },
    { name: 'Network Security Audit', path: '/services/network-audit' },
    { name: 'SME / Small Business Security Packages', path: '/services/sme-packages' },
  ];

  // Navigation links for mobile menu
  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Case Studies & Blogs', path: '/case-studies' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-[#131927] select-none sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Hamburger for Mobile */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button for Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div
              onClick={() => router.push("/")}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-11 h-10 sm:w-12 sm:h-12 rounded-3xl flex items-center justify-center">
                <Image
                  src={"/icons/logo.png"}
                  height={900}
                  width={900}
                  alt='Logo'
                  className='w-full h-full rounded shadow'
                />
              </div>
              <span className="text-white sm:block hidden text-xl sm:text-2xl font-semibold">
                Sudo Secure
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none border-none cursor-pointer select-none text-white hover:text-gray-300 transition-colors text-sm xl:text-base">
                Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-4 min-w-[280px] xl:min-w-[320px] shadow-xl animate-in slide-in-from-top-2 fade-in-0"
              >
                {/* Header */}
                <div className="pb-3 mb-3 border-b border-gray-700">
                  <h3 className="text-red-500 font-bold text-base xl:text-lg">Choose Your Services</h3>
                </div>

                {/* Menu Items */}
                {services.map((service, index) => (
                  <DropdownMenuItem
                    key={index}
                    asChild
                    className="flex items-center justify-between py-2 px-3 cursor-pointer text-white hover:bg-gray-800 rounded-md transition-colors group text-sm xl:text-base"
                    onClick={() => handleDropdownClick(service.path)}
                  >
                    <div className="flex items-center gap-2">
                      <span>{service.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-white hover:text-gray-300 transition-colors text-sm xl:text-base">
              About
            </Link>

            <Link href="/case-studies" className="text-white hover:text-gray-300 transition-colors text-sm xl:text-base">
              Case Studies & Blogs
            </Link>

            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors text-sm xl:text-base">
              Careers
            </Link>

            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center focus:outline-none gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-600 rounded-lg text-white hover:bg-gray-800 transition-colors text-sm">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-gray-400 hidden sm:inline">DE</span>
                <span className="text-gray-400 hidden sm:inline">/</span>
                <span className="text-red-500 font-medium">{language}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1a1f2e] border-gray-700">
                <DropdownMenuItem
                  onClick={() => setLanguage('EN')}
                  className="text-white hover:bg-gray-800"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage('DE')}
                  className="text-white hover:bg-gray-800"
                >
                  Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Request Pentest Button */}
            <Button onClick={() => router.push("/request-pentest")} className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-lg font-medium transition-colors text-sm sm:text-base whitespace-nowrap">
              Request Pentest
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden fixed inset-0 z-40 bg-[#131927] transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          {/* Close button inside mobile menu */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white p-2 hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 pt-4 pb-8">
            {/* Mobile Services Dropdown */}
            <div className="mb-6">
              <h3 className="text-red-500 font-bold text-lg mb-4 pl-2">Services</h3>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleDropdownClick(service.path)}
                    className="flex items-center justify-between w-full py-3 px-4 text-white hover:bg-gray-800 rounded-lg transition-colors text-left"
                  >
                    <span className="text-base">{service.name}</span>
                    <ChevronRight className="w-5 h-5 opacity-60" />
                  </button>
                ))}
              </div>
            </div>

            {/* Other Navigation Links */}
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleDropdownClick(link.path)}
                  className="flex items-center justify-between w-full py-3 px-4 text-white hover:bg-gray-800 rounded-lg transition-colors text-left"
                >
                  <span className="text-base">{link.name}</span>
                  <ChevronRight className="w-5 h-5 opacity-60" />
                </button>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-white font-medium mb-4 pl-2">Language</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-6 py-3 rounded-lg transition-colors ${language === 'EN'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('DE')}
                  className={`px-6 py-3 rounded-lg transition-colors ${language === 'DE'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  Deutsch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}