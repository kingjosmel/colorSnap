import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 group">
              <span className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                🎨 ColorSnap
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Extract vibrant color palettes and Tailwind CSS classes from any image.
              Fast, free, and privacy-focused.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with ❤️ for developers and designers</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  📝 Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  ℹ️ About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  📧 Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  ❓ FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal & Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-indigo-300 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@colorsnap.online"
                  className="text-gray-300 hover:text-indigo-300 transition-colors text-sm"
                >
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} ColorSnap. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="mailto:hello@colorsnap.online"
                className="text-gray-400 hover:text-indigo-300 transition-colors"
                aria-label="Email us"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <div className="flex items-center text-gray-400 text-xs">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}