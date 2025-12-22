"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CareersPage() {
  const router = useRouter();
  const benefits = [
    {
      title: 'Cutting-Edge Work',
      description: 'Work on challenging projects with the latest tools and technologies in cybersecurity.'
    },
    {
      title: 'Continuous Learning',
      description: 'Unlimited training budget, certification support, and time for professional development.'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible hours, work-life policies, and generous vacation time for maintaining balance.'
    },
    {
      title: 'Collaborative Culture',
      description: 'Join a team of passionate security professionals who respect and learn from each other.'
    },
    {
      title: 'Competitive Benefits',
      description: 'Excellent compensation packages, health insurance, pension plans, and performance bonuses.'
    },
    {
      title: 'Make an Impact',
      description: 'Help protect organizations worldwide and contribute to making the internet more secure.'
    }
  ];

  const positions = [
    {
      _id: 1,
      title: 'Senior Penetration Tester',
      type: 'Full-time',
      location: 'Berlin / Remote',
      description: 'Join our team as a Senior Penetration Tester and help secure enterprise applications worldwide.'
    },
    {
      _id: 2,
      title: 'Cloud Security Specialist',
      type: 'Full-time',
      location: 'Remote',
      description: 'Help organizations secure their cloud infrastructure across AWS, Azure, and GCP.'
    },
    {
      _id: 3,
      title: 'Security Consultant',
      type: 'Full-time',
      location: 'Berlin',
      description: 'Work directly with clients to improve their overall security posture through assessments and consulting.'
    },
    {
      _id: 4,
      title: 'Red Team Operator',
      type: 'Full-time',
      location: 'Remote',
      description: 'Simulate advanced adversaries to test organizational defenses through full-scope red team engagements.'
    },
    {
      _id: 5,
      title: 'Junior Penetration Tester',
      type: 'Full-time',
      location: 'Berlin',
      description: 'Start your career in offensive security with comprehensive mentorship and hands-on experience.'
    },
    {
      _id: 6,
      title: 'Security Researcher',
      type: 'Full-time',
      location: 'Remote',
      description: 'Discover new vulnerabilities, develop exploits, and contribute to the security research community.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <button className="border border-red-600 text-red-600 px-4 sm:px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
            CAREERS
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Join Our Security Team
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl">
            Work with industry-leading security experts on challenging projects that make a real impact.
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Why Work With Us?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              We offer more than just a job—we provide a platform for growth, learning, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Open Positions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold text-red-600">{positions.length}</span> open positions across various security domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {positions.map((position) => (
              <div
                key={position._id}
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                    {position.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 w-fit sm:w-auto">
                    {position.type}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
                    <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Full-time</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {position.description}
                </p>

                <button
                  onClick={() => router.push(`/careers/${position._id}`)}
                  className="text-red-600 cursor-pointer font-semibold text-sm sm:text-base flex items-center gap-1.5 sm:gap-2 hover:gap-3 transition-all group w-fit"
                  aria-label={`View details for ${position.title}`}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
            Don&apos;t See a Perfect Fit?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented security professionals. Send us your resume and let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold rounded-lg w-full sm:w-auto"
            >
              Send General Application
            </Button>
            <Button
              variant="default"
              className="border-white border text-white bg-black hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold rounded-lg w-full sm:w-auto"
            >
              Schedule Informational Call
            </Button>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
            We typically respond to applications within 2-3 business days.
          </p>
        </div>
      </div>

      {/* Additional Info Section for Mobile */}
      <div className="lg:hidden bg-gray-50 py-6 sm:py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">
              Application Process
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Submit Application</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Complete the online application form</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Technical Interview</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Showcase your skills in a practical assessment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Team Interview</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Meet the team and learn about our culture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base mb-1">Offer & Onboarding</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Receive your offer and join our security team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}