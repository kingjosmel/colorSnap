import Link from "next/link";

export const metadata = {
  title: "Blog - Color Extraction Tips & Web Design Guides | ColorSnap",
  description: "Learn how to extract color codes from images, find perfect color palettes for web design, and speed up your UI development with ColorSnap's expert guides.",
};

const blogPosts = [
  {
    slug: "how-to-extract-color-codes-from-any-image",
    title: "How to Extract Color Codes from Any Image",
    excerpt: "Learn the complete guide to extracting hex codes, RGB values, and color palettes from any photo using free online tools and techniques.",
    date: "2025-01-15",
    category: "Tools & Tips"
  },
  {
    slug: "best-color-palettes-web-designers-2025",
    title: "Best Color Palettes for Web Designers in 2025",
    excerpt: "Discover trending color combinations, modern UI schemes, and professional palette generators that will make your websites stand out.",
    date: "2025-01-14",
    category: "Design Trends"
  },
  {
    slug: "how-developers-use-colorsnap-speed-up-ui-work",
    title: "How Developers Can Use ColorSnap to Speed Up UI Work",
    excerpt: "Practical tips for developers to extract CSS colors, generate theme colors, and create design systems faster using ColorSnap.",
    date: "2025-01-13",
    category: "Development"
  },
  {
    slug: "free-online-color-tools-developers",
    title: "Best Free Online Color Tools for Developers in 2025",
    excerpt: "Complete list of free color code generators, hex color pickers, and palette tools that every developer should bookmark.",
    date: "2025-01-12",
    category: "Tools & Tips"
  },
  {
    slug: "color-psychology-web-design-guide",
    title: "Color Psychology in Web Design: Complete Guide",
    excerpt: "How colors affect user behavior, conversion rates, and brand perception. Learn to choose the right colors for your website.",
    date: "2025-01-11",
    category: "Design Theory"
  },
  {
    slug: "convert-image-colors-css-html",
    title: "Convert Image Colors to CSS and HTML: Step-by-Step Guide",
    excerpt: "Learn how to extract colors from any image and convert them to CSS variables, HTML color codes, and Tailwind classes.",
    date: "2025-01-10",
    category: "Development"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Color Design Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides on color extraction, web design palettes, and developer tools to help you create beautiful, professional websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Ready to Extract Colors from Your Images?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Try ColorSnap's free image to color code generator and get hex codes, RGB values, and Tailwind CSS classes instantly.
          </p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Try ColorSnap Tool
          </Link>
        </div>
      </div>
    </div>
  );
}