"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, Shield } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CertificationsToolsSection() {
  const certifications = [
    { name: "ISO 27001", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "SOC 2 Type II", icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const compliance = [
    { name: "GDPR Compliant", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { name: "PCI DSS", icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  const tools = [
    "Burp Suite Professional",
    "Nmap",
    "Metasploit Framework",
    "Custom Manual Audits",
    "OWASP ZAP",
    "Wireshark"
  ];

  const methodologies = [
    "OWASP Testing Guide compliance",
    "PTES (Penetration Testing Execution Standard)",
    "NIST SP 800-115 Guidelines",
    "Custom threat modeling per engagement"
  ];

  const handleDownloadReport = () => {
    toast.error("when backend is ready then working this button ");

  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Certifications & Compliance Section */}
          <div>
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-600 flex-shrink-0 flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Certifications & Compliance
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  We meet the highest industry standards
                </p>
              </div>
            </div>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gray-50 border-gray-200 hover:border-gray-300 transition-colors">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                    <div className="text-red-600">{cert.icon}</div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{cert.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compliance Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
              {compliance.map((item, index) => (
                <Card key={index} className="bg-gray-50 border-gray-200 hover:border-gray-300 transition-colors">
                  <CardContent className="p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
                    <div className="text-red-600">{item.icon}</div>
                    <span className="font-medium text-gray-900 text-sm sm:text-base">{item.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Confidentiality Notice */}
            <Card className="bg-gray-50 border-gray-200 mb-6 sm:mb-8">
              <CardContent className="p-4 sm:p-6">
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  All data handled with strict confidentiality. NDAs available upon request.
                </p>
              </CardContent>
            </Card>

            {/* Download Button */}
            <Button
              variant="outline"
              className="w-full sm:w-auto border-gray-300 text-gray-900 hover:bg-gray-50 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              onClick={handleDownloadReport}
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Sample Report (PDF)
            </Button>
          </div>

          {/* Tools & Methodology Section */}
          <div>
            <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-600 flex-shrink-0 flex items-center justify-center">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Tools & Methodology
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  Industry-leading tools combined with manual testing
                </p>
              </div>
            </div>

            {/* Security Testing Tools */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">
                Security Testing Tools:
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-100 text-gray-900 hover:bg-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-normal"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Testing Methodology */}
            <Card className="bg-black text-white border-0">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Testing Methodology</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {methodologies.map((method, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-red-600 mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                      <span className="text-gray-300 text-sm sm:text-base">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}