import Link from "next/link";

export const metadata = {
  title: "Blog - Color Extraction Tips & Web Design Guides | ColorSnap",
  description: "Learn how to extract color codes from images, find perfect color palettes for web design, and speed up your UI development with ColorSnap's expert guides.",
};

const blogPosts = [
  {
    slug: "66-days-1175-mrr-reddit-marketing",
    title: "Shipper.now Success: How to Market on Reddit & Grow on Product Hunt",
    excerpt: "Learn how to market on Reddit, grow on Product Hunt, use SEO strategy, and implement email marketing from shipper.now's journey to $1,175 MRR in 66 days. Real tactics that worked.",
    date: "2025-02-02",
    category: "Success Stories"
  },
  {
    slug: "from-idea-to-paying-users-30-days",
    title: "From Idea to Paying Users: Lessons From a Maker Who Launched in 30 Days",
    excerpt: "Danny Postma built HeadshotPro in 30 days and reached $300,000 in monthly revenue. Here's exactly how he did it, and what you can learn from his rapid launch strategy.",
    date: "2025-09-30",
    category: "Success Stories"
  },
  {
    slug: "why-small-tools-can-become-big-wins",
    title: "Why Small Tools Can Become Big Wins: Stories of Makers Who Proved It",
    excerpt: "The most successful indie makers aren't building complex platforms. They're building simple tools that solve one problem exceptionally well. Here are the real stories behind the wins.",
    date: "2025-09-29",
    category: "Success Stories"
  },
  {
    slug: "what-indie-hackers-learn-micro-saas",
    title: "What Indie Hackers Can Learn From Micro-SaaS Success Stories",
    excerpt: "Solo founders are building million-dollar micro-SaaS businesses. Here are the proven strategies and hard-won lessons from makers who've reached $45K/month, $100K/month, and beyond.",
    date: "2025-09-29",
    category: "Lessons & Insights"
  },
  {
    slug: "solo-founder-100k-year-blueprint",
    title: "The Solo Founder's Blueprint to $100K/Year: Real Stories and Proven Strategies",
    excerpt: "How Bhanu Teja reached $100K MRR at 24 and Sarah Chen built ScreenshotAPI to $120K annually. Step-by-step blueprint for solo founders to hit six figures.",
    date: "2025-09-19",
    category: "Success Stories"
  },
  {
    slug: "micro-saas-mistakes-avoid-first-year",
    title: "5 Micro-SaaS Mistakes That Kill 95% of Startups in Year One (And How to Avoid Them)",
    excerpt: "Real stories of founders who failed and succeeded. Learn from the mistakes that killed 95% of micro-SaaS startups and the strategies that led to $1M+ revenues.",
    date: "2025-08-9",
    category: "Lessons & Insights"
  },
  {
    slug: "weekend-hack-1200-month",
    title: "How a Solo Dev Turned a Weekend Hack Into $1,200/Month",
    excerpt: "The inspiring story of a developer who built a simple Chrome extension over a single weekend and grew it into $1,200/month recurring revenue. Learn the exact strategies that worked.",
    date: "2025-01-26",
    category: "Success Stories"
  },
  {
    slug: "why-color-theory-still-matters-2025",
    title: "Why Color Theory Still Matters in 2025 (And How to Hack It With Tools)",
    excerpt: "Discover why color theory remains crucial for modern web design and how to use image color extractor tools and hex code generators to apply it effectively.",
    date: "2025-01-26",
    category: "Design Theory"
  },
  {
    slug: "10-color-tools-save-designers-hours",
    title: "10 Color Tools That Will Save Designers Hours of Work",
    excerpt: "Discover the best free color tools for extracting hex codes from images, generating color palettes, and creating perfect website color schemes.",
    date: "2025-01-26",
    category: "Tools & Tips"
  },
  {
    slug: "perfect-color-scheme-website-60-seconds",
    title: "How to Find the Perfect Color Scheme for Your Website in 60 Seconds",
    excerpt: "Learn the fastest method to extract hex codes from images and create professional website color schemes using proven techniques.",
    date: "2025-01-26",
    category: "Tools & Tips"
  },
  {
    slug: "idea-to-product-simple-apps-success-stories",
    title: "From Idea to Product: Stories of Simple Apps That Got Paying Users",
    excerpt: "Discover how simple tools like image color extractors and hex code generators became profitable products with real success stories.",
    date: "2025-01-26",
    category: "Business Stories"
  },
  {
    slug: "indie-devs-simple-tools-500-month",
    title: "How Indie Devs Are Turning Simple Tools Into $500+ a Month",
    excerpt: "Learn proven strategies indie developers use to monetize simple tools like image color extractors into recurring $500+ monthly revenue streams.",
    date: "2025-01-26",
    category: "Business Strategy"
  },
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