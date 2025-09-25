"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import ColorThief from "color-thief-browser";
import chroma from "chroma-js";
import tailwindColors from "../lib/tailwindColors";
import { rgbToHex } from "../lib/utils";
import ColorSwatch from "../components/ColorSwatch";

export default function ColorSnap() {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file.type.startsWith("image/")) {
      setError("Please upload a PNG or JPG image.");
      setImageSrc(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      const img = new Image();
      img.src = imageUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error("Error loading image."));
      });

      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(img, 5);
      if (!palette || palette.length === 0) {
        throw new Error("No colors extracted. Please try another image.");
      }

      const extractedColors = palette.map(([r, g, b]) => rgbToHex(r, g, b));
      const matchedColors = extractedColors.map((color) => {
        let closestClass = "";
        let minDistance = Infinity;

        Object.entries(tailwindColors).forEach(([className, hex]) => {
          const distance = chroma.distance(color, hex, "lab");
          if (distance < minDistance) {
            minDistance = distance;
            closestClass = className;
          }
        });

        return { hex: color, tailwindClass: closestClass };
      });

      setColors(matchedColors);
      setIsLoading(false);
    } catch (err) {
      setError(err.message || "Error processing image. Please try another.");
      setImageSrc(null);
      setIsLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div className="min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 text-center text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            🎨 ColorSnap
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed">
            Instantly extract vibrant color palettes and Tailwind CSS classes from any image
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('tool').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Try Tool Now
            </button>
            <a href="/blog" className="text-white hover:text-gray-200 font-medium underline">
              Read Color Guides
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose ColorSnap?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The fastest way to extract professional color palettes from any image
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Extract colors in seconds with our advanced processing algorithm</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Private</h3>
              <p className="text-gray-600">Images processed locally in your browser - never uploaded</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer Ready</h3>
              <p className="text-gray-600">Get hex codes and Tailwind CSS classes instantly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="tool" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Extract Colors from Your Image
            </h2>
            <p className="text-xl text-gray-600">
              Upload any image and get instant color palettes with hex codes and Tailwind classes
            </p>
          </div>

          {/* Drag-and-Drop Section */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-dashed border-gray-300 hover:border-indigo-400 transition-all duration-300 mb-8">
            <div {...getRootProps()} className="p-8 sm:p-12 text-center cursor-pointer">
              <input {...getInputProps()} />
              {!isLoading ? (
                <div>
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Upload Your Image
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Drag & drop an image here, or click to browse
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      PNG, JPG supported
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Max 5MB
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      100% Private
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-indigo-600 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Processing Your Image
                  </h3>
                  <p className="text-lg text-gray-600">
                    Extracting dominant colors...
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-900 mb-1">Oops, something went wrong!</h3>
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Image Preview */}
          {imageSrc && showPreview && (
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Image Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src={imageSrc}
                  alt="Uploaded preview"
                  className="max-w-full rounded-lg shadow-md max-h-80 object-contain"
                />
              </div>
            </div>
          )}

          {/* Color Results */}
          {colors.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Your Color Palette
                </h3>
                <p className="text-gray-600">
                  Here are the 5 dominant colors extracted from your image
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {colors.map((color, index) => (
                  <ColorSwatch key={index} color={color} index={index} />
                ))}
              </div>

              {/* Usage Tips */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Quick Tips</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Click any color to copy its hex code or Tailwind class
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Use these colors directly in your CSS or design tools
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Upload another image to extract different colors
                  </div>
                  <div className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    Check our <a href="/blog" className="text-indigo-600 hover:underline">color guides</a> for more tips
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Amazing Designs?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our color guides and learn professional techniques for using colors in web design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Read Color Guides
            </a>
            <a
              href="/about"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
