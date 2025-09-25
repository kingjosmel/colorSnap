import { useState } from "react";

export default function ColorSwatch({ color, index }) {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 transition-all duration-200 hover:shadow-md border border-gray-200 hover:border-indigo-300">
      {/* Color Circle */}
      <div className="flex flex-col items-center">
        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-lg border-2 border-white mb-4 transition-transform hover:scale-105"
          style={{ backgroundColor: color.hex }}
          aria-label={`Color ${color.hex}`}
        ></div>

        {/* Color Info */}
        <div className="text-center mb-4 space-y-1">
          <div className="font-mono text-sm font-semibold text-gray-900">
            {color.hex}
          </div>
          <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            {color.tailwindClass}
          </div>
        </div>

        {/* Copy Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <button
            onClick={() => copyToClipboard(color.hex, "hex")}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
              copied === "hex"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100"
            }`}
            aria-label={`Copy hex code ${color.hex}`}
          >
            {copied === "hex" ? (
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </div>
            ) : (
              "Copy Hex"
            )}
          </button>

          <button
            onClick={() => copyToClipboard(color.tailwindClass, "tailwind")}
            className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
              copied === "tailwind"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100"
            }`}
            aria-label={`Copy Tailwind class ${color.tailwindClass}`}
          >
            {copied === "tailwind" ? (
              <div className="flex items-center justify-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </div>
            ) : (
              "Copy Class"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
