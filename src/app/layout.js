import "./globals.css";

export const metadata = {
  title: "ColorSnap: Image to Tailwind Palette",
  description:
    "Extract dominant colors from images and get hex codes and Tailwind CSS classes.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
