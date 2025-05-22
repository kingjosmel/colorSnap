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
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}

      <header className="py-16 text-center text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <h1 className="text-5xl font-extrabold tracking-tight animate-fade-in">
          🎨 ColorSnap
        </h1>
        <p className="max-w-2xl mx-auto mt-3 text-xl">
          Instantly extract vibrant color palettes and Tailwind CSS classes from
          any image
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl p-6 mx-auto">
        {/* Drag-and-Drop Section */}
        <section className="p-8 mb-8 transition-all bg-white border border-gray-300 border-dashed shadow-xl rounded-xl hover:border-indigo-400">
          <div {...getRootProps()} className="text-center cursor-pointer">
            <input {...getInputProps()} />
            <p className="text-lg text-gray-700">
              {isLoading
                ? "Processing image..."
                : "Drag & drop an image, or click to upload (PNG, JPG)"}
            </p>
            <p className="mt-1 text-sm text-gray-400">Max file size: 5MB</p>
            {isLoading && (
              <div className="flex justify-center mt-4">
                <svg
                  className="w-8 h-8 text-indigo-500 animate-spin"
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
          <div className="p-4 mb-6 text-center text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {/* Image Preview (Optional) */}
        {imageSrc && showPreview && (
          <section className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={imageSrc}
                alt="Uploaded preview"
                className="max-w-full rounded-lg shadow-md max-h-80"
              />
              <button
                onClick={() => setShowPreview(false)}
                className="absolute px-2 py-1 text-xs text-white bg-gray-800 rounded-full top-2 right-2 hover:bg-gray-900"
              >
                Hide Preview
              </button>
            </div>
          </section>
        )}

        {/* Color Swatches */}
        {colors.length > 0 && (
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {colors.map((color, index) => (
              <ColorSwatch key={index} color={color} index={index} />
            ))}
          </section>
        )}
      </main>

      {/* Footer */}
      <hr className="my-4 border-gray-300"></hr>
      {/* Footer */}
      <hr className="my-4 border-gray-300"></hr>
      <footer className="py-6 text-center text-gray-500  md:flex md:justify-around bg-gray-50">
        <div className="mb-4 text-3xl">
          Built by <span className="font-semibold">Melvin Joseph</span> —{" "}
          <a
            href="https://github.com/kingjosmel/colorSnap"
            className="text-indigo-500 hover:underline"
          >
            GitHub
          </a>{" "}
          —{" "}
          <a
            href="https://x.com/kingvyn"
            className="text-indigo-500 hover:underline"
          >
            Twitter
          </a>
        </div>
        <div className="flex justify-center">
          <a
            href="https://www.producthunt.com/posts/colorsnap-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-colorsnap-2"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=968578&theme=light&t=1747869914668"
              alt="colorSnap - Turn images into Tailwind CSS color palettes instantly. | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
