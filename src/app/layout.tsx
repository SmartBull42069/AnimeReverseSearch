import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="ziJvr7B-3LcTkKMKBU4aYBpJ6E59rGy56igetwRf6QE"/>
      </Head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-VTS7QWPNQP" />
      <Analytics />
    </html>
  );
}
export const metadata = {
  generator: "Next.js",
  applicationName: "Cleithral",
  referrer: "origin-when-cross-origin",
  
  keywords: [
    "anime name finder",
    "anime picture recognition",
    "identify anime from picture",
    "anime search by image",
    "anime identification tool",
    "anime image search",
    "find anime by screenshot",
    "anime name search",
    "anime recognition",
    "anime photo search",
  ],
  authors: "Rayn",
  creator: "Rayn",
  publisher: "Rayn",
  title: "Cleithral",
  description:
    "Discover the name of any anime from a picture with our advanced image recognition tool. Quickly and accurately identify your favorite anime characters and scenes with ease. Try it now!",
};