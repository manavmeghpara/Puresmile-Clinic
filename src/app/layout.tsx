import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/CSS/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smitam Clinic",
  description: 'Your smile, our specialty. Book with the best dental clinic (kids and adults) in Rajkot & Chotila.',
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Smitam Clinic",
    description: "Expert dental care for all ages. Visit our Rajkot or Chotila branch today!",
    url: "https://smitamdentalstudio.com",
    siteName: "Smitam Dental Studio",
    images: [
      {
        url: "https://smitamdentalstudio.com/logo.png",
        width: 512,
        height: 512,
        alt: "Smitam Dental Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
