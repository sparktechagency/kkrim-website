"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Box, Cloud, Database, FileText, GitBranch, Image, List, Lock, RotateCcw, Server, Settings, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ComprehensiveTesting from '../../../components/service/ComprehensiveTesting';

export default function CloudDevOpsSecurityLanding() {
  const router = useRouter();
  const includedItems = [
    { text: 'IAM roles & permissions audit' },
    { text: 'Cloud storage security (S3, Blob, GCS)' },
    { text: 'Network security group review' },
    { text: 'CI/CD pipeline security assessment' },
    { text: 'Container & Kubernetes security' },
    { text: 'Serverless function testing' },
    { text: 'Cloud misconfiguration detection' },
    { text: 'Infrastructure as Code review' }
  ];

  const scopeItems = [
    { icon: Cloud, title: 'AWS / Azure / GCP', desc: 'Multi-cloud assessments' },
    { icon: Database, title: 'Cloud Storage', desc: 'Bucket & blob security' },
    { icon: Lock, title: 'IAM Policies', desc: 'Access control review' },
    { icon: Box, title: 'Containers', desc: 'Docker & K8s security' },
    { icon: GitBranch, title: 'CI/CD Pipelines', desc: 'DevOps security' },
    { icon: Server, title: 'Compute Instances', desc: 'EC2, VMs, Functions' },
    { icon: Shield, title: 'Network Security', desc: 'VPC, subnets, firewalls' },
    { icon: Settings, title: 'Configuration', desc: 'IaC & terraform review' }
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
      <div className="relative px-4 sm:px-6 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-6 md:mb-8">
            {/* Logo/Badge */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
              <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Cloud & DevOps<br className="hidden sm:block" />Security Testing
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              Comprehensive security assessment of AWS, Azure, and GCP
              environments including IAM, storage, networking, containers, and
              CI/CD pipelines.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button onClick={() => router.push("/request-pentest")} className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto justify-center">
                Request a Pentest
              </Button>
              <Button variant="outline" className="border-white text-white bg-black hover:bg-gray-100 hover:text-black px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base w-full sm:w-auto justify-center">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-white text-black px-4 sm:px-6 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">What&apos;s Included</h2>
          <div className="w-12 sm:w-16 h-1 bg-red-600 mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {includedItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-black rounded flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scope Coverage Section */}
      <div className="bg-gray-50 text-black px-4 sm:px-6 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Scope Coverage</h2>
          <div className="w-12 sm:w-16 h-1 bg-red-600 mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {scopeItems.map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow h-full bg-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="bg-white text-black px-4 sm:px-6 py-12 md:py-16 lg:py-20 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Deliverables</h2>
          <div className="w-12 sm:w-16 h-1 bg-red-600 mb-8 sm:mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {deliverables.map((item, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-red-600 transition-colors h-full hover:shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <item.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-3 sm:mb-4" strokeWidth={1.5} />
                  <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Comprehensive Testing Component */}
      <ComprehensiveTesting />
    </div>
  );
}