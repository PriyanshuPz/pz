import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { keywords } from "../data/keywords";
import KProvider from "./components/common/KProvider";
import { Providers } from "./providers";
import LayoutWrapper from "./components/common/LayoutWrapper";
import CommandBarInvokar from "./components/common/CommandBarInvokar";

const fonts = DM_Sans({
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://priyanshu.dev";

export const metadata: Metadata = {
  title: {
    default: "Priyanshu Verma | Indie Builder & Developer",
    template: "%s | Priyanshu Verma",
  },
  description: "A passionate Software Developer from India.",
  openGraph: {
    title: "Priyanshu Verma",
    description: "A passionate Software Developer from India.",
    url: BASE_URL,
    siteName: "Priyanshu Verma",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Priyanshu Verma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PriyanshuPz",
    title: "Priyanshu Verma",
    description: "A passionate Software Developer from India.",
    images: `${BASE_URL}/og-image.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: keywords,

  authors: [
    {
      name: "Priyanshu Verma",
      url: BASE_URL,
    },
  ],
  creator: "Priyanshu Verma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fonts.className} antialiased`}>
        <KProvider>
          <Providers>
            <LayoutWrapper>{children}</LayoutWrapper>
          </Providers>
          <CommandBarInvokar />
        </KProvider>
      </body>
    </html>
  );
}
