"use client";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is ColorSnap?",
        answer: "ColorSnap is a free online tool that extracts dominant colors from uploaded images and provides them in developer-friendly formats like hex codes and Tailwind CSS classes. Perfect for designers and developers who need to quickly get color codes from mockups, photos, or inspiration images."
      },
      {
        question: "Is ColorSnap really free?",
        answer: "Yes! ColorSnap is completely free to use with no hidden costs, subscription fees, or usage limits. You can extract colors from as many images as you need without any restrictions."
      },
      {
        question: "Do I need to create an account?",
        answer: "No account required! You can start using ColorSnap immediately without any sign-up process. Just visit the site and start uploading images."
      }
    ]
  },
  {
    category: "How It Works",
    questions: [
      {
        question: "How does color extraction work?",
        answer: "ColorSnap uses advanced algorithms to analyze your uploaded image and identify the 5 most dominant colors. The tool processes images entirely in your browser using client-side JavaScript, ensuring your images never leave your device."
      },
      {
        question: "What image formats are supported?",
        answer: "ColorSnap supports PNG, JPG, and JPEG image formats. The maximum file size is 5MB, which is sufficient for most design mockups and photos."
      },
      {
        question: "How accurate are the extracted colors?",
        answer: "ColorSnap uses industry-standard color analysis techniques to extract the most visually dominant colors from your images. The colors are mathematically calculated based on pixel frequency and visual prominence."
      }
    ]
  },
  {
    category: "Privacy & Security",
    questions: [
      {
        question: "Are my images stored on your servers?",
        answer: "No! Your images are processed entirely in your browser using client-side JavaScript. Images are never uploaded to our servers or stored anywhere. This ensures complete privacy and security of your files."
      },
      {
        question: "Is it safe to upload confidential designs?",
        answer: "Absolutely. Since all processing happens locally in your browser, your confidential designs never leave your device. You can safely use ColorSnap for client work, proprietary designs, or any sensitive materials."
      },
      {
        question: "Do you track or store the colors I extract?",
        answer: "No, we don't store or track the specific colors you extract. We only collect anonymous usage analytics to improve the service, but no personal data or extracted colors are saved."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        question: "What are Tailwind CSS classes?",
        answer: "Tailwind CSS is a popular utility-first CSS framework. ColorSnap automatically matches your extracted colors to the closest Tailwind color classes (like 'blue-500' or 'green-300'), making it easy to implement colors in Tailwind-based projects."
      },
      {
        question: "Can I get RGB values instead of hex codes?",
        answer: "Currently, ColorSnap provides hex codes and Tailwind classes. You can easily convert hex codes to RGB using online converters, or we may add RGB output in future updates."
      },
      {
        question: "Why do I only get 5 colors?",
        answer: "Five colors provide a good balance between variety and usability. This number gives you the most dominant colors without overwhelming you with too many similar shades. Most design projects work best with 3-5 primary colors."
      }
    ]
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        question: "The colors don't match what I see in the image",
        answer: "Color perception can vary due to monitor calibration, lighting conditions, and image compression. ColorSnap extracts mathematically dominant colors, which may differ slightly from what your eye perceives as most prominent."
      },
      {
        question: "Upload isn't working",
        answer: "Make sure your image is under 5MB and in PNG or JPG format. Try refreshing the page and clearing your browser cache. If problems persist, try a different browser or contact support."
      },
      {
        question: "I'm getting an error message",
        answer: "Most errors occur due to unsupported file types or oversized images. Ensure your file is PNG/JPG and under 5MB. If you continue experiencing issues, please contact us with details about your browser and the specific error."
      }
    ]
  },
  {
    category: "Usage Tips",
    questions: [
      {
        question: "What types of images work best?",
        answer: "High-quality images with distinct colors work best. Avoid overly compressed, blurry, or low-contrast images. Screenshots of websites, design mockups, and well-lit photographs typically give the best results."
      },
      {
        question: "How can I get more specific colors?",
        answer: "Try cropping your image to focus on the area with colors you want to extract. This helps the algorithm identify the colors you're most interested in rather than processing the entire image."
      },
      {
        question: "Can I use ColorSnap for brand color matching?",
        answer: "Yes! ColorSnap is excellent for extracting brand colors from logos, marketing materials, or brand imagery. Upload your brand assets and get exact hex codes to maintain color consistency across your projects."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState("General");

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const categories = faqs.map(section => section.category);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about ColorSnap's color extraction tool, privacy practices, and how to get the best results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Category Navigation */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="flex-1">
            {faqs.map((section) => (
              <div
                key={section.category}
                className={`${activeCategory === section.category ? "block" : "hidden"}`}
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h2>
                  <div className="space-y-4">
                    {section.questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-b-0">
                        <button
                          onClick={() => toggleItem(section.category, index)}
                          className="w-full py-4 px-2 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              openItems[`${section.category}-${index}`] ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openItems[`${section.category}-${index}`] && (
                          <div className="px-2 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Try ColorSnap Now
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/how-to-extract-color-codes-from-any-image" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📘</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How-to Guide</h3>
            <p className="text-gray-600 text-sm">Complete guide to extracting colors from images</p>
          </Link>
          <Link href="/blog/free-online-color-tools-developers" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">🛠️</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Tools</h3>
            <p className="text-gray-600 text-sm">Top color tools for developers and designers</p>
          </Link>
          <Link href="/about" className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">About ColorSnap</h3>
            <p className="text-gray-600 text-sm">Learn more about our mission and features</p>
          </Link>
        </div>
      </div>
    </div>
  );
}