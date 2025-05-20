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
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 text-white text-center">
        <h1 className="text-5xl font-extrabold tracking-tight animate-fade-in">
          🎨 ColorSnap
        </h1>
        <p className="mt-3 text-xl max-w-2xl mx-auto">
          Instantly extract vibrant color palettes and Tailwind CSS classes from
          any image
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 flex-grow">
        {/* Drag-and-Drop Section */}
        <section className="bg-white shadow-xl rounded-xl p-8 border border-dashed border-gray-300 hover:border-indigo-400 transition-all mb-8">
          <div {...getRootProps()} className="text-center cursor-pointer">
            <input {...getInputProps()} />
            <p className="text-lg text-gray-700">
              {isLoading
                ? "Processing image..."
                : "Drag & drop an image, or click to upload (PNG, JPG)"}
            </p>
            <p className="text-sm text-gray-400 mt-1">Max file size: 5MB</p>
            {isLoading && (
              <div className="mt-4 flex justify-center">
                <svg
                  className="animate-spin h-8 w-8 text-indigo-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </section>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center mb-6">
            {error}
          </div>
        )}

        {/* Image Preview (Optional) */}
        {imageSrc && showPreview && (
          <section className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={imageSrc}
                alt="Uploaded preview"
                className="max-w-full max-h-80 rounded-lg shadow-md"
              />
              <button
                onClick={() => setShowPreview(false)}
                className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full hover:bg-gray-900"
              >
                Hide Preview
              </button>
            </div>
          </section>
        )}

        {/* Color Swatches */}
        {colors.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {colors.map((color, index) => (
              <ColorSwatch key={index} color={color} index={index} />
            ))}
          </section>
        )}
      </main>

      {/* Footer */}
      <hr className="my-4 border-gray-300"></hr>
      <footer className="py-6 bg-gray-50 text-center text-3xl text-gray-500 ">
        Built by <span className="font-semibold">Melvin Joseph</span> —{" "}
        <a
          href="https://github.com/MelvinJoseph"
          className="text-indigo-500 hover:underline"
        >
          GitHub
        </a>{" "}
      </footer>
    </div>
  );
}
