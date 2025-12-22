"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

// Define types for form data
interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  privacyAccepted: boolean;
}

// Define types for form errors
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacyAccepted?: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    privacyAccepted: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone validation regex (supports international formats)
  const phoneRegex = /^[\+]?[0-9\s\-\(\)\.]{10,20}$/;

  // Validate form function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    } else if (formData.fullName.trim().length > 100) {
      newErrors.fullName = 'Full name cannot exceed 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message cannot exceed 1000 characters';
    }

    // Privacy policy acceptance validation
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'You must accept the privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess(false);

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorElement = document.querySelector('[data-error="true"]');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send the data to your backend API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to submit form');
      // }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Success - reset form and show success message
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyAccepted: false
      });
      setSubmitSuccess(true);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

      // In a real app, you might want to redirect or show a thank you page
      // router.push('/thank-you');

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to submit form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input change
  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }

    // Clear general submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <button className="border border-red-600 text-red-600 px-4 sm:px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors mb-4 sm:mb-6 text-xs sm:text-sm font-medium">
            CONTACT
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Let&apos;s Talk Security
          </h1>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl">
            Get in touch with our security experts. We&apos;re here to help protect your organization.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 leading-tight">
              Send Us a Message
            </h2>

            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-green-800 text-sm sm:text-base">Message Sent Successfully!</p>
                    <p className="text-xs sm:text-sm text-green-600">
                      Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitError && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800 text-sm sm:text-base">{submitError}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
              {/* Full Name Field */}
              <div data-error={!!errors.fullName}>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full ${errors.fullName ? 'border-red-500 focus:ring-red-500' : ''}`}
                  required
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2">Company Name</label>
                <Input
                  type="text"
                  placeholder="Acme Corporation"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full"
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Email Field */}
                <div data-error={!!errors.email}>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div data-error={!!errors.phone}>
                  <label className="block text-sm font-medium mb-1.5 sm:mb-2">Phone</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div data-error={!!errors.message}>
                <label className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <Textarea
                  placeholder="Tell us about your security needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full min-h-32 ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
                  required
                  disabled={isSubmitting}
                />
                <div className="flex justify-between items-center mt-1.5">
                  {errors.message && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      {errors.message}
                    </p>
                  )}
                  <span className={`text-xs ${formData.message.length > 1000 ? 'text-red-600' : 'text-gray-500'}`}>
                    {formData.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Privacy Policy Checkbox */}
              <div data-error={!!errors.privacyAccepted} className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => handleInputChange('privacyAccepted', checked === true)}
                  disabled={isSubmitting}
                  className={`mt-0.5 ${errors.privacyAccepted ? 'border-red-500' : ''}`}
                />
                <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600 cursor-pointer select-none">
                  I want a free consultation call <br />
                  I have read the <a href="/privacy-policy" className="text-red-600 hover:underline">privacy policy</a> *
                </label>
              </div>
              {errors.privacyAccepted && (
                <p className="text-xs sm:text-sm text-red-600 flex items-center gap-1 ml-8 sm:ml-9">
                  <AlertCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  {errors.privacyAccepted}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-xs sm:text-sm lg:text-base">Sending...</span>
                  </>
                ) : (
                  <>
                    <span className="text-xs sm:text-sm lg:text-base">Send Message</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Map Placeholder */}
            <div className="bg-black rounded-lg h-40 sm:h-48 lg:h-56 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50"></div>
              <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-red-600 relative z-10" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white z-10">
                <p className="font-semibold text-sm sm:text-base">Our Office</p>
                <p className="text-xs sm:text-sm text-gray-400">Berlin, Germany</p>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                Contact Information
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Address</p>
                    <p className="text-xs sm:text-sm text-gray-600">Unter den Linden 77</p>
                    <p className="text-xs sm:text-sm text-gray-600">10117 Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Email</p>
                    <p className="text-xs sm:text-sm text-gray-600 break-all">contact@sudosecure.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Phone</p>
                    <p className="text-xs sm:text-sm text-gray-600">+49 (30) 123 56789</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base mb-1">Support Hours</p>
                    <p className="text-xs sm:text-sm text-gray-600">Mon - Fri 9:00 AM - 6:00 PM CET</p>
                    <p className="text-xs sm:text-sm text-gray-600">Sat - Sun Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                Quick Contact
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                    <p className="font-semibold text-sm sm:text-base">Email Us</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 break-all">support@sudosecure.com</p>
                </div>

                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                    <p className="font-semibold text-sm sm:text-base">Call Us</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">+49 030 1234 56789</p>
                </div>

                <div className="p-3 sm:p-4 bg-red-600 text-white rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <p className="font-semibold text-sm sm:text-base">Emergency Hotline</p>
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold">+49 (30) 999 888 777</p>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">
                    Available 24/7 for urgent matters
                  </p>
                </div>

                <div className="p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                    <p className="font-semibold text-sm sm:text-base">Live Chat</p>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Chat with our team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-black text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">How quickly can you start?</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Our team can typically initiate engagements within 1-2 weeks of engagement depending on scope and availability.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">What&apos;s your response time?</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We respond to all enquiries within 24 hours on business days. Emergency support is available 24/7.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Do you sign NDAs?</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Yes, we&apos;re happy to sign mutual NDAs before discussing your scope and availability.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">What industries do you serve?</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                We work with clients across all industries including finance, healthcare, SaaS, e-commerce, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}