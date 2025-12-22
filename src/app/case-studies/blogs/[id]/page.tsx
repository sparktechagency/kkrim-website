"use client";

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Bookmark, Calendar, ChevronDown, Clock, Share2, User } from 'lucide-react';
import { useState } from 'react';

export default function BlogArticleDetail() {
  const [showMobileTOC, setShowMobileTOC] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handleRequestConsultation = () => {
    window.location.href = '/contact';
  };

  // Table of Contents items
  const tocItems = [
    { id: 1, title: 'Introduction', active: true },
    { id: 2, title: 'Key Vulnerabilities' },
    { id: 3, title: 'Common Attack Vectors' },
    { id: 4, title: 'Impact Analysis' },
    { id: 5, title: 'Mitigation Strategies' },
    { id: 6, title: 'Conclusion' }
  ];

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'OWASP Top 10 2024: What Changed and Why It Matters',
          text: 'A comprehensive guide to the latest OWASP Top 10 vulnerabilities and security strategies',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing cancelled', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Back to Blog</span>
            </button>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 sm:hidden">
              <button
                onClick={handleShare}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Bookmark article"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
            <Badge variant="outline" className="border-red-500 text-red-500 text-xs sm:text-sm">
              VULNERABILITIES
            </Badge>
            <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Dec 1, 2024</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            OWASP Top 10 2024: What Changed and Why It Matters
          </h1>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mb-4 sm:mb-6">
            A comprehensive guide to the latest OWASP Top 10 vulnerabilities and actionable security strategies for modern applications.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Alex Martinez</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Mobile Table of Contents Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileTOC(!showMobileTOC)}
              className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">Table of Contents</span>
              <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${showMobileTOC ? 'rotate-180' : ''}`} />
            </button>

            {showMobileTOC && (
              <div className="mt-3 bg-white border border-gray-200 rounded-lg p-4">
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`block text-sm py-1.5 transition-colors ${item.active
                        ? 'text-red-600 font-semibold'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                      onClick={() => setShowMobileTOC(false)}
                    >
                      {item.id}. {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Desktop Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-6 space-y-4">
              <Card className="border-gray-200">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 sm:mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block text-sm py-1.5 transition-colors ${item.active
                          ? 'text-red-600 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                      >
                        {item.id}. {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Desktop Actions */}
              <Card className="border-gray-200">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">Share this article</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px]"
                      onClick={handleShare}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px]"
                    >
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
            {/* Introduction */}
            <section id="introduction" className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                In the ever-evolving landscape of cybersecurity, staying ahead of emerging threats is crucial for organizations of all sizes. This
                comprehensive guide explores the latest developments in vulnerabilities and provides actionable strategies for security teams.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 my-4 sm:my-6 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">Key Takeaway</h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Modern applications face numerous security challenges. Understanding these vulnerabilities is the first step toward building
                  resilient systems. In this article, we examine the most critical security issues affecting today&apos;s applications.
                </p>
              </div>

              <div className="bg-gray-100 border-l-4 border-gray-400 p-4 sm:p-6 my-4 sm:my-6 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed italic text-sm sm:text-base">
                  &ldquo;Security is not a product, but a process. It&apos;s not just about tools, it&apos;s about people, processes, and
                  technology working together to create a resilient security posture.&rdquo;
                </p>
              </div>
            </section>

            {/* Common Attack Vectors */}
            <section className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Common Attack Vectors</h2>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  "SQL injection and database manipulation attacks",
                  "Cross-site scripting (XSS) vulnerabilities in web applications",
                  "Insecure API endpoints and authentication management flaws",
                  "Insecure direct object references exposing sensitive data",
                  "Security misconfigurations in cloud environments",
                  "Broken access control and authorization flaws"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 text-gray-700 text-sm sm:text-base">
                    <span className="text-red-500 mt-1 text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Impact Analysis */}
            <section id="impact-analysis" className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Impact Analysis</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                The consequences of security vulnerabilities can be severe, ranging from data breaches to complete system compromise.
                Understanding these risks helps organizations prioritize their security efforts effectively and allocate resources appropriately.
              </p>

              {/* Real-World Statistics Card */}
              <Card className="bg-gray-900 text-white border-0 mt-4 sm:mt-6">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center">Real-World Statistics (2024)</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">$4.45M</div>
                      <div className="text-xs sm:text-sm text-gray-400">Average cost of a data breach</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">277 days</div>
                      <div className="text-xs sm:text-sm text-gray-400">Avg time to identify and contain</div>
                    </div>
                    <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-1 sm:mb-2">83%</div>
                      <div className="text-xs sm:text-sm text-gray-400">Multiple data breaches experienced</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Mitigation Strategies */}
            <section id="mitigation-strategies" className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Mitigation Strategies</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                Implementing effective security controls requires a multi-layered approach. Here are proven strategies to strengthen your
                organization&apos;s security posture against common threats.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Essential Security Practices</h3>
                  <ul className="space-y-2 ml-4">
                    {[
                      "Implement defense in depth with multiple security layers",
                      "Conduct regular security assessments and penetration testing",
                      "Maintain up-to-date security policies and patches",
                      "Enforce strong authentication and access controls",
                      "Implement comprehensive logging and monitoring",
                      "Provide ongoing security awareness training",
                      "Perform regular code reviews and security audits",
                      "Implement proper input validation and output encoding"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 text-sm sm:text-base">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section id="conclusion" className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-4">
                Security is an ongoing journey, not a destination. By staying informed about emerging threats and implementing robust security
                practices, organizations can significantly reduce their risk exposure. Regular assessments, continuous monitoring, and a security-first
                culture are essential components of any comprehensive security strategy.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                If you need professional security assessment services, our team of certified experts is here to help. Contact us today to
                discuss how we can strengthen your security posture and protect your digital assets.
              </p>
            </section>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["OWASP", "Security", "Vulnerabilities", "Web Security", "Penetration Testing", "Cybersecurity"].map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs sm:text-sm">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-red-600 text-white border-0">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Need Professional Security Testing?</h3>
                  <p className="text-red-50 text-sm sm:text-base mb-4 sm:mb-6">
                    Get expert penetration testing and security assessment services tailored to your organization&apos;s needs.
                  </p>
                  <div className="max-w-md mx-auto">
                    <Input
                      placeholder="Enter your email"
                      className="bg-white text-gray-900 border-0 mb-3 text-sm sm:text-base"
                    />
                    <Button
                      className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 sm:py-4 text-sm sm:text-base"
                      onClick={handleRequestConsultation}
                    >
                      Request a Free Security Consultation
                    </Button>
                  </div>
                  <p className="text-red-200 text-xs mt-3">
                    No spam, unsubscribe anytime
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    title: "API Security Best Practices for 2024",
                    desc: "Essential strategies to secure your APIs against modern threats and vulnerabilities.",
                    category: "GUIDES",
                    readTime: "10 min read"
                  },
                  {
                    title: "Zero-Day Vulnerabilities: Detection and Response",
                    desc: "How to detect, respond to, and mitigate zero-day vulnerabilities in your organization.",
                    category: "VULNERABILITIES",
                    readTime: "9 min read"
                  }
                ].map((article, index) => (
                  <Card key={index} className="border-gray-200 hover:border-red-300 transition-colors cursor-pointer">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-red-500 border-red-500 text-xs">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base line-clamp-2">
                        {article.desc}
                      </p>
                      <Button variant="link" className="text-red-600 hover:text-red-700 p-0 mt-2 text-sm sm:text-base">
                        Read Article →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="border-gray-200 mt-6 sm:mt-8">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Alex Martinez</h3>
                    <p className="text-sm text-gray-600 mb-2">Lead Security Engineer at Sudo Secure</p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      With over 8 years of experience in penetration testing and security research, Alex specializes in web application
                      security and vulnerability assessment. He holds OSCP, CEH, and CISSP certifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Mobile Actions */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-semibold text-sm">Enjoyed this article?</p>
              <p className="text-gray-600 text-xs">Share with your network</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-300"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                className="bg-red-600 hover:bg-red-700"
                onClick={handleRequestConsultation}
              >
                Get Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}