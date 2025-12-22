"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, FileCode, FileText, Globe, Image, Key, LayoutDashboard, List, Lock, RotateCcw, ShoppingCart, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ComprehensiveTesting from '../../../components/service/ComprehensiveTesting';

export default function WebAppPentestLanding() {
  const router = useRouter();

  const includedItems = [
    { text: 'OWASP Top 10 vulnerability testing' },
    { text: 'Authentication & session management' },
    { text: 'Business logic flaw identification' },
    { text: 'Payment processing security' },
    { text: 'SQL injection & XSS testing' },
    { text: 'API endpoint security review' },
    { text: 'File upload vulnerability testing' },
    { text: 'Authorization bypass attempts' }
  ];

  const scopeItems = [
    { icon: Lock, title: 'Login/Signup', desc: 'Authentication mechanisms' },
    { icon: LayoutDashboard, title: 'Dashboard', desc: 'User interface security' },
    { icon: FileCode, title: 'APIs', desc: 'Backend API testing' },
    { icon: Upload, title: 'File Uploads', desc: 'Upload validation testing' },
    { icon: ShoppingCart, title: 'Payment Flow', desc: 'Transaction security' },
    { icon: Key, title: 'Password Reset', desc: 'Recovery mechanisms' },
    { icon: AlertCircle, title: 'Error Handling', desc: 'Information disclosure' },
    { icon: FileText, title: 'Input Validation', desc: 'Data sanitization' }
  ];

  const deliverables = [
    { icon: FileText, title: 'Full PDF Report', desc: 'Comprehensive security assessment with executive summary and technical details' },
    { icon: List, title: 'Findings Severity List', desc: 'CVSS-scored vulnerabilities with clear risk ratings and prioritization' },
    { icon: Image, title: 'Screenshots & PoC', desc: 'Proof of concept demonstrations and visual evidence of vulnerabilities' },
    { icon: RotateCcw, title: 'Free Retest', desc: 'Complimentary verification testing after remediation is complete' }
  ];



  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative px-6 py-16 md:px-12 lg:px-24">


        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-8 h-8" />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Web Application<br />Penetration Testing
            </h1>

            <p className="text-gray-400 text-lg max-w-2xl mb-8">
              Deep manual security testing of web applications to identify
              OWASP Top 10 vulnerabilities, business logic flaws, and
              authentication issues.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => router.push("/request-pentest")} className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-base">
                Request a Pentest
              </Button>
              <Button variant="outline" className="border-white text-white bg-black hover:bg-gray-100 hover:text-black px-8 py-6 text-base">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-white text-black px-6 py-16 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-2">What&apos;s Included</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scope Coverage Section */}
      <div className="bg-gray-50 text-black px-6 py-16 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-2">Scope Coverage</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scopeItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="bg-white text-black px-6 py-16 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-2">Deliverables</h2>
          <div className="w-16 h-1 bg-red-600 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-red-600 transition-colors">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 mb-4" strokeWidth={1.5} />
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <ComprehensiveTesting />
    </div>
  );
}