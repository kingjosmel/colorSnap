# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ColorSnap is a Next.js web application that extracts color palettes from uploaded images and provides corresponding Tailwind CSS class names. The app uses color analysis libraries to generate clean, developer-friendly color palettes.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

### Core Components

- **Main App (`src/app/page.js`)** - Single-page application with drag-and-drop image upload, color extraction using ColorThief, and color matching against Tailwind palette
- **ColorSwatch (`src/components/ColorSwatch.js`)** - Individual color display component with copy-to-clipboard functionality for hex codes and Tailwind classes
- **Layout (`src/app/layout.js`)** - Root layout with Vercel Analytics integration

### Color Processing Pipeline

1. **Image Upload** - Handles drag-and-drop with react-dropzone, validates image types and file size (5MB limit)
2. **Color Extraction** - Uses ColorThief library to extract 5 dominant colors from uploaded image
3. **Tailwind Matching** - Compares extracted colors against predefined Tailwind color palette using chroma-js color distance calculations in LAB color space
4. **Display** - Shows color swatches with hex values and closest matching Tailwind class names

### Key Libraries

- **ColorThief** (`color-thief-browser`) - Extracts dominant colors from images
- **chroma-js** - Color manipulation and distance calculations for Tailwind matching
- **react-dropzone** - File upload handling with drag-and-drop support
- **Tailwind CSS v4** - Styling framework

### Data Structure

Colors are processed as objects with:
```javascript
{
  hex: "#ffffff", // Extracted color
  tailwindClass: "slate-50" // Closest matching Tailwind class
}
```

### Utility Functions

- `rgbToHex()` - Converts RGB values to hex format
- `matchTailwindColor()` - Finds closest Tailwind color using LAB color space distance
- Complete Tailwind color palette mapping in `src/lib/tailwindColors.js`

## File Structure

```
src/
├── app/
│   ├── layout.js      # Root layout with analytics
│   ├── page.js        # Main application component
│   └── globals.css    # Global styles
├── components/
│   └── ColorSwatch.js # Color display component
└── lib/
    ├── tailwindColors.js  # Complete Tailwind color mapping
    └── utils.js           # Color utility functions
```
- remember to always use simple to read and understand code dont over complicate the code
- only wrie code for the instruction that ws given
- when adding content always make use of these seo keywords so that the site could rank high on google search Core Tool Keywords (directly about ColorSnap)

image to color code

extract colors from image

get hex code from image

image color picker online

photo to hex color converter

online color code generator

color code extractor tool

get RGB from image

image palette generator

picture to color scheme

👩‍💻 Developer Keywords

CSS color code generator

HTML hex color picker

convert image to CSS colors

get color palette for website

color code for UI design

color matching tool for developers

generate theme colors from photo

hex to rgb converter tool

design system color generator

🎨 Designer Keywords

best color palette generator

find color scheme from photo

modern UI color combinations

pastel color palette generator

gradient color code generator

brand color scheme tool

digital art color picker

web design color inspiration

📝 Blog / Content Keywords (SEO traffic boosters)

how to choose color palette for website

best free online color tools for developers

color psychology in web design

how to find the right colors for branding

tools to generate UI color schemes

trending web design colors 2025

free hex code generator online

how to extract colors from any photo

🔑 Long-Tail Keywords (easy to rank, less competition)

free tool to get hex code from image

online tool to create color scheme from photo

get all colors from logo image

convert image colors to palette for website

how to generate CSS colors from an uploaded image

find exact shade of color from image online

online tool to match colors from photos

⚡ Pro SEO Tip for You

Homepage → Use the tool keywords (“image to color code”, “photo to hex converter”).

Blog Posts → Use the long-tail and “how to” keywords.

Meta Title & Description → Make sure you use at least 1–2 high search volume keywords.

Alt Tags on Images → Add keywords like “extract hex code from image example” on screenshots.

Internal Linking → Link blog posts back to your tool page with anchor text like “image to color picker tool.”