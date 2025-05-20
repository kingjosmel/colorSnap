import chroma from "chroma-js";

export function matchTailwindColor(extractedColor, tailwindColors) {
  let closestClass = "";
  let minDistance = Infinity;

  Object.entries(tailwindColors).forEach(([className, hex]) => {
    const distance = chroma.distance(extractedColor, hex, "lab");
    if (distance < minDistance) {
      minDistance = distance;
      closestClass = className;
    }
  });

  return closestClass;
}

export function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}
