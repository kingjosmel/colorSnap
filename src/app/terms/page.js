export const metadata = {
  title: "Terms of Service - ColorSnap",
  description: "Terms of service and acceptable use policy for ColorSnap.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using ColorSnap, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above,
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700">
                ColorSnap is a free web-based tool that extracts color palettes from uploaded images
                and provides corresponding Tailwind CSS class names. The service processes images
                locally in your browser without storing them on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-700 mb-4">You agree to use ColorSnap only for lawful purposes and in a way that does not infringe the rights of others. Prohibited uses include:</p>
              <ul className="text-gray-700 space-y-2">
                <li>Uploading copyrighted images without permission</li>
                <li>Uploading inappropriate, offensive, or illegal content</li>
                <li>Attempting to compromise the security or integrity of the service</li>
                <li>Using automated systems to overwhelm the service</li>
                <li>Reverse engineering or attempting to extract source code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Image Rights and Responsibilities</h2>
              <p className="text-gray-700">
                You are responsible for ensuring you have the right to upload and process any images
                you use with ColorSnap. We do not store your images, but you should only upload images
                you own or have permission to use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700">
                We strive to maintain high availability but cannot guarantee uninterrupted service.
                ColorSnap is provided "as is" without warranties of any kind.
                We reserve the right to modify or discontinue the service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers</h2>
              <ul className="text-gray-700 space-y-2">
                <li>Color extraction results are approximations and may not be perfectly accurate</li>
                <li>Tailwind CSS class matching is based on closest color distance calculations</li>
                <li>We are not responsible for how you use the extracted color information</li>
                <li>The service is provided for informational purposes only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700">
                ColorSnap and its creators shall not be liable for any direct, indirect, incidental,
                special, consequential, or punitive damages resulting from your use of the service,
                even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-700">
                The ColorSnap service, including its design, functionality, and code, is protected
                by intellectual property laws. You may use the service for its intended purpose
                but may not copy, reproduce, or create derivative works.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                We reserve the right to terminate or restrict access to our service for any user
                who violates these terms or engages in harmful behavior.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We may update these Terms of Service from time to time. Changes will be posted
                on this page with an updated date. Your continued use of the service after
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have questions about these Terms of Service, please contact us at:
                <a href="mailto:hello@colorsnap.online" className="text-indigo-600 hover:text-indigo-700">
                  hello@colorsnap.online
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}