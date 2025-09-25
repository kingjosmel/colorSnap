export const metadata = {
  title: "About Us - ColorSnap",
  description: "Learn about ColorSnap, the color palette extraction tool for developers and designers.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About ColorSnap</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              ColorSnap is a free tool designed for developers and designers who need to quickly extract color palettes from images.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why We Built ColorSnap</h2>
            <p className="text-gray-700 mb-6">
              As developers, we often find ourselves needing to extract colors from screenshots, UI mockups, or design references.
              The process of manually picking colors and finding their Tailwind CSS equivalents was time-consuming and frustrating.
              ColorSnap solves this problem by automating the entire workflow.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who It Helps</h2>
            <ul className="text-gray-700 mb-6">
              <li><strong>Web Developers:</strong> Quickly extract colors and get Tailwind CSS class names for rapid prototyping</li>
              <li><strong>UI/UX Designers:</strong> Analyze color schemes from existing designs or inspiration images</li>
              <li><strong>Digital Artists:</strong> Understand color palettes from reference images</li>
              <li><strong>Students:</strong> Learn about color theory and palette extraction</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-700 mb-6">
              ColorSnap uses advanced color analysis algorithms to:
            </p>
            <ol className="text-gray-700 mb-6">
              <li>Extract the 5 most dominant colors from your uploaded image</li>
              <li>Match each color to the closest Tailwind CSS color using LAB color space calculations</li>
              <li>Present clean, copyable hex codes and Tailwind class names</li>
            </ol>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 mb-6">
              ColorSnap is completely free to use. We don't store your images, require signups, or collect personal data.
              Our goal is to provide a simple, fast, and reliable tool that makes developers' and designers' lives easier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Details</h2>
            <p className="text-gray-700">
              Built with Next.js, Tailwind CSS, and powered by ColorThief and Chroma.js libraries for accurate color extraction and analysis.
              Hosted on Vercel for fast, global performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}