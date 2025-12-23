import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Database, Eye, Lock, Shield, UserCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "1. Information We Collect",
      content: (
        <>
          <p className="text-gray-700 mb-4">We collect several types of information from and about users of our service:</p>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Personal Information:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Usage Information:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Browser type, device information, and IP address</li>
                <li>Pages visited and features used</li>
                <li>Time and date of visits</li>
                <li>Referring website addresses</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="text-gray-700 mb-4">We use the collected information for various purposes:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>To provide, maintain, and improve our services</li>
            <li>To process transactions and send related information</li>
            <li>To send administrative information and updates</li>
            <li>To respond to your comments and questions</li>
            <li>To monitor and analyze usage patterns and trends</li>
            <li>To detect, prevent, and address technical issues</li>
            <li>To send marketing communications (with your consent)</li>
            <li>To comply with legal obligations</li>
          </ul>
        </>
      )
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "3. Information Sharing and Disclosure",
      content: (
        <>
          <p className="text-gray-700 mb-4">We may share your information in the following situations:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>With Your Consent:</strong> When you have given us explicit permission</li>
          </ul>
          <p className="text-gray-700 mt-4">We do not sell your personal information to third parties.</p>
        </>
      )
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "4. Data Security",
      content: (
        <p className="text-gray-700">
          We implement appropriate technical and organizational measures to protect your personal
          information against unauthorized access, alteration, disclosure, or destruction. These
          measures include encryption, secure servers, firewalls, and regular security assessments.
          However, no method of transmission over the internet is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      )
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "5. Your Privacy Rights",
      content: (
        <>
          <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request transfer of your data</li>
            <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
            <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </>
      )
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "6. Cookies and Tracking Technologies",
      content: (
        <>
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to track activity on our service and
            store certain information. Types of cookies we use:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Essential Cookies:</strong> Required for the service to function properly</li>
            <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our service</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
            <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant ads</li>
          </ul>
          <p className="text-gray-700 mt-4">
            You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
          </p>
        </>
      )
    }
  ];

  return (
    <div className=" py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 23, 2025</p>
        </div>

        <Alert className="mb-6 0">
          <AlertDescription className="text-gray-700">
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our service.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index} className="">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="t">{section.icon}</div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {section.content}
              </CardContent>
            </Card>
          ))}

          <Card className="">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 " />
                <span>7. Data Retention</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We retain your personal information only for as long as necessary to fulfill the
                purposes outlined in this Privacy Policy, unless a longer retention period is
                required or permitted by law. When we no longer need your information, we will
                securely delete or anonymize it.
              </p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>8. Children&apos;s Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our service is not intended for children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you are a parent or guardian
                and believe your child has provided us with personal information, please contact us
                so we can delete such information.
              </p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>9. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your information may be transferred to and maintained on computers located outside of
                your country where data protection laws may differ. We take appropriate measures to
                ensure your data is treated securely and in accordance with this Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>10. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              <p className="text-gray-700">
                You are advised to review this Privacy Policy periodically for any changes. Changes
                are effective when posted on this page.
              </p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle>11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices,
                please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@yourcompany.com</p>
                <p><strong>Phone:</strong> +880 123-456-7890</p>
                <p><strong>Address:</strong> Gazipur, Dhaka Division, Bangladesh</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}