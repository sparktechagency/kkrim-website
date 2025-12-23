import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: December 23, 2025</p>
        </div>

        <Alert className="mb-6">
          <AlertDescription>
            Please read these terms and conditions carefully before using our service.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to these terms, please do not
                use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Use License</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on our
                website for personal, non-commercial transitory viewing only.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>This is the grant of a license, not a transfer of title</li>
                <li>You may not modify or copy the materials</li>
                <li>You may not use the materials for any commercial purpose</li>
                <li>You may not attempt to reverse engineer any software</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                When you create an account with us, you must provide accurate and complete
                information. You are responsible for safeguarding your password and for all
                activities that occur under your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your use of our service is also governed by our Privacy Policy. Please review our
                Privacy Policy, which also governs the site and informs users of our data
                collection practices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Prohibited Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">You may not access or use the site for any purpose other than that for which we make the site available. Prohibited activities include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Violating laws and regulations</li>
                <li>Engaging in unauthorized framing or linking</li>
                <li>Uploading viruses or malicious code</li>
                <li>Attempting to impersonate another user</li>
                <li>Harassing or intimidating other users</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The service and its original content, features, and functionality are owned by us
                and are protected by international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                In no event shall we be liable for any damages including, without limitation,
                damages for loss of data or profit arising out of the use or inability to use the
                materials on our website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We may terminate or suspend your account and bar access to the service immediately,
                without prior notice or liability, under our sole discretion, for any reason
                whatsoever, including without limitation if you breach the Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms at any time. We will provide
                notice of any changes by posting the new Terms on this page. Your continued use of
                the service after any changes constitutes acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p className="font-semibold">Email: support@yourcompany.com</p>
                <p className="font-semibold">Phone: +880 123-456-7890</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}