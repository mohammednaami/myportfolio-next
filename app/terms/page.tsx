import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-[1200px] w-full px-4 md:px-8 mx-auto pt-3 lg:pt-7">
      <div className="prose prose-lg dark:prose-invert space-y-6">
        <h2 className="mb-4 text-3xl font-bold">Terms and Conditions</h2>
        <p className="text-gray-600">Last updated: March 2025</p>

        <div className="space-y-4">
          <p className="text-lg font-semibold">1. <b>Introduction</b></p>
          <p>
            Welcome to <b>Mohammed Naami’s Portfolio</b> (“Website”, “Service”, “we”, “our”, “us”).
          </p>
          <p>
            These Terms and Conditions ("Terms") govern your use of this Website 
            located at <b>monaami.com</b> and any services or content provided through it.
          </p>
          <p>
            By accessing or using this Website, you agree to comply with these Terms. 
            If you do not agree with any part of these Terms, please do not use the Website.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">2. <b>Intellectual Property</b></p>
          <p>
            All content on this Website, including but not limited to text, graphics, images, 
            logos, and code, is the property of <b>Mohammed Naami</b> and is protected by 
            copyright and intellectual property laws.
          </p>
          <p>
            You may not copy, modify, distribute, or reproduce any part of this Website 
            without prior written consent.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">3. <b>User Responsibilities</b></p>
          <p>
            By using this Website, you agree to:
          </p>
          <ul className="list-disc pl-6">
            <li>Use the Website only for lawful purposes.</li>
            <li>Not attempt to disrupt or compromise the security of the Website.</li>
            <li>Respect the intellectual property rights of the Website owner.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">4. <b>Limitations of Liability</b></p>
          <p>
            The Website is provided on an "as-is" basis. While we strive for accuracy, 
            we do not guarantee that the content is error-free or up-to-date.
          </p>
          <p>
            We are not liable for any damages resulting from the use of this Website, 
            including data loss, service interruptions, or inaccuracies in information.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">5. <b>External Links</b></p>
          <p>
            This Website may contain links to external websites that are not under our control. 
            We are not responsible for the content, policies, or practices of any third-party websites.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">6. <b>Changes to These Terms</b></p>
          <p>
            We reserve the right to update these Terms at any time. Changes will be effective 
            immediately upon posting. We encourage users to review this page periodically.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">7. <b>Contact Information</b></p>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <Link href="mailto:info@monaami.com" className="text-primary hover:underline">
              info@monaami.com
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
