export const metadata = {
  title: "Privacy Policy - ColorSnap",
  description: "ColorSnap's privacy policy and data handling practices.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                ColorSnap is designed with privacy in mind. We collect minimal information to provide our service:
              </p>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Images:</strong> Images you upload are processed in your browser and are not stored on our servers</li>
                <li><strong>Analytics:</strong> We use Vercel Analytics to understand general usage patterns (page views, country-level location)</li>
                <li><strong>Cookies:</strong> We may use cookies for analytics and advertising purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="text-gray-700 space-y-2">
                <li>To provide color extraction services</li>
                <li>To improve our website performance and user experience</li>
                <li>To display relevant advertisements through Google AdSense</li>
                <li>To understand general usage patterns and optimize our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Image Processing</h2>
              <p className="text-gray-700">
                All image processing happens directly in your browser using client-side JavaScript.
                Your images are never uploaded to our servers or stored anywhere.
                When you upload an image, it stays on your device and is processed locally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Google AdSense</h3>
              <p className="text-gray-700 mb-4">
                We use Google AdSense to display advertisements. Google may use cookies and web beacons
                to serve ads based on your visits to this site and other sites on the Internet.
                You can opt out of personalized advertising by visiting Google's Ad Settings.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">Vercel Analytics</h3>
              <p className="text-gray-700">
                We use Vercel Analytics to collect anonymous usage statistics.
                This helps us understand how our service is used and improve performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700">
                We use cookies to enhance your browsing experience and serve relevant advertisements.
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700">
                Since we don't store your images or personal data on our servers,
                there's minimal risk to your privacy. All processing happens in your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
                <a href="mailto:hello@colorsnap.online" className="text-indigo-600 hover:text-indigo-700">
                  hello@colorsnap.online
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time.
                Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}