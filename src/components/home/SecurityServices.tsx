"use client";
import { ArrowRight, Globe, Server, Shield, Smartphone, Target, Users } from 'lucide-react';

export default function SecurityServices() {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'Network and system security testing to identify vulnerabilities in your infrastructure.',
      tagline: 'Secure your network perimeter',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Web Application',
      description: 'Comprehensive web app security assessment covering OWASP Top 10 and beyond.',
      tagline: 'Protect your web applications',
      color: 'from-red-600 to-rose-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'iOS and Android security testing for mobile applications and APIs.',
      tagline: 'Secure mobile experiences',
      color: 'from-rose-600 to-pink-600'
    },
    {
      icon: Shield,
      title: 'API Security',
      description: 'API endpoint testing and authentication/authorization vulnerability assessment.',
      tagline: 'Harden your API infrastructure',
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Target,
      title: 'Red Teaming',
      description: 'Advanced adversarial simulation testing your detection and response capabilities.',
      tagline: 'Test real-world attack scenarios',
      color: 'from-orange-600 to-red-700'
    },
    {
      icon: Users,
      title: 'Social Engineering',
      description: 'Human factor testing including phishing campaigns and social engineering assessments.',
      tagline: 'Strengthen human defenses',
      color: 'from-red-700 to-rose-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-up">
            Comprehensive Security Testing Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-full sm:max-w-2xl mx-auto animate-slide-up px-4" style={{ animationDelay: '0.1s' }}>
            End-to-end penetration testing across all attack surfaces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 lg:hover:-translate-y-2 animate-fade-in border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    <div className="relative bg-red-600 rounded-lg sm:rounded-xl p-3 sm:p-4 w-fit group-hover:scale-105 lg:group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6 min-h-[72px] sm:min-h-[60px] lg:min-h-[60px]">
                    {service.description}
                  </p>

                  {/* Tagline */}
                  <div className="mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  {/* CTA Link */}
                  <button className="group/btn flex items-center gap-1 sm:gap-2 text-red-600 font-semibold text-sm sm:text-base hover:gap-2 sm:hover:gap-3 transition-all duration-300">
                    Learn more
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl sm:shadow-2xl w-full sm:w-auto">
            <p className="text-white text-base sm:text-lg font-medium">
              Need a custom security assessment?
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/50 text-sm sm:text-base w-full sm:w-auto">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (min-width: 640px) {
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        @media (min-width: 1024px) {
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}