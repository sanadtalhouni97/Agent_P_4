import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hogwarts School of Witchcraft and Wizardry - Digital Experience",
  description: "Experience the magic of Harry Potter's world through an immersive digital journey. Explore Hogwarts, learn spells, discover houses, and live the wizarding life.",
  keywords: "Harry Potter, Hogwarts, Magic, Wizarding World, Spells, Houses, Characters, Potions, Quidditch",
  authors: [{ name: "Hogwarts Digital Experience" }],
  openGraph: {
    title: "Hogwarts School of Witchcraft and Wizardry",
    description: "Enter the magical world of Harry Potter",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hogwarts School of Witchcraft and Wizardry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hogwarts School of Witchcraft and Wizardry",
    description: "Enter the magical world of Harry Potter",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-crimson antialiased">
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black">
          {children}
        </div>
      </body>
    </html>
  );
}
