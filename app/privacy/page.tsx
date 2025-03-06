import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-[1400px] w-full px-4 md:px-8 mx-auto pt-3 lg:pt-7">
      <div className="prose prose-lg dark:prose-invert space-y-6">
        <h2 className="mb-4 text-3xl font-bold">Privacy Policy</h2>
        <p className="text-gray-600">Last updated: March 2025</p>

        <div className="space-y-4">
          <p className="text-lg font-semibold">1. <b>Introduction</b></p>
          <p>
            Welcome to <b>Mohammed Naami’s Portfolio</b> (“Website”, “we”, “our”, “us”).
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal data when you 
            access and use <b>monaami.com</b>.
          </p>
          <p>
            By using this Website, you consent to the collection and use of information in accordance with 
            this Privacy Policy.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">2. <b>What Data We Collect</b></p>
          <p>We may collect the following types of personal information:</p>
          <ul className="list-disc pl-6">
            <li>Your name and email address (if you contact us).</li>
            <li>Analytics data (e.g., your browsing activity, pages visited).</li>
            <li>Technical data (e.g., IP address, browser type, operating system).</li>
          </ul>
        </div>

        {/* 3. How We Use Your Data */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">3. <b>How We Use Your Data</b></p>
          <p>Your data is used for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>To provide, maintain, and improve the Website.</li>
            <li>To respond to your inquiries or requests.</li>
            <li>To analyze Website traffic and user behavior.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        {/* 4. Cookies and Tracking */}
        <div className="space-y-4">
          <p className="text-lg font-semibold">4. <b>Cookies and Tracking Technologies</b></p>
          <p>
            We use cookies and similar tracking technologies to analyze Website traffic and improve 
            user experience. By using our Website, you agree to the use of cookies.
          </p>
          <p>You can adjust your browser settings to refuse cookies.</p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">5. <b>Third-Party Services</b></p>
          <p>
            We may use third-party services such as Google Analytics to track and report Website traffic. 
            These third parties may collect data according to their own privacy policies.
          </p>
          <p>
            We do not share or sell your personal data to third parties for marketing purposes.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">6. <b>Data Security</b></p>
          <p>
            We take security seriously and implement reasonable measures to protect your personal data. 
            However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">7. <b>Your Rights</b></p>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Opt out of tracking or marketing emails.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">8. <b>Changes to This Privacy Policy</b></p>
          <p>
            We reserve the right to update this Privacy Policy. Any changes will be posted on this page 
            with a new “Last Updated” date.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg font-semibold">9. <b>Contact Information</b></p>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <Link href="mailto:info@monaami.com" className="text-primary hover:underline">
              info@monaami.com
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
