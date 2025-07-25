import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Positivus",
  description:
    "The Positivus is a beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased text-lg`}>
        {children}
      </body>
    </html>
  );
}