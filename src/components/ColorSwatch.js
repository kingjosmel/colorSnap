import { useState } from "react";

export default function ColorSwatch({ color, index }) {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center animate-fade-in"
      role="region"
      aria-label={`Color swatch ${index + 1}`}
    >
      <div
        className="w-16 h-16 rounded-full border border-gray-200"
        style={{ backgroundColor: color.hex }}
        aria-label={`Color ${color.hex}`}
      ></div>
      <p className="mt-4 font-mono text-sm text-gray-900">
        <span className="font-bold">HEX:</span> {color.hex}
      </p>
      <p className="font-mono text-sm text-gray-900">
        <span className="font-bold">Tailwind:</span> {color.tailwindClass}
      </p>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => copyToClipboard(color.hex, "hex")}
          className="text-indigo-500 hover:text-indigo-700 text-sm font-medium transition-colors"
          aria-label={`Copy hex code ${color.hex}`}
        >
          {copied === "hex" ? "Copied!" : "Copy Hex"}
        </button>
        <button
          onClick={() => copyToClipboard(color.tailwindClass, "tailwind")}
          className="text-indigo-500 hover:text-indigo-700 text-sm font-medium transition-colors"
          aria-label={`Copy Tailwind class ${color.tailwindClass}`}
        >
          {copied === "tailwind" ? "Copied!" : "Copy Tailwind"}
        </button>
      </div>
    </div>
  );
}
