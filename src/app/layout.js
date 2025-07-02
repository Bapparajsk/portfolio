import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { Providers } from "@/app/Providers";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { Cursor } from "@/components/cursor";
import { Nav } from "@/components/navbar/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bapparaj Sk",
  description:
    "Welcome to my portfolio! Powered by Next.js, Three.js, and Tailwind CSS, this site blends creativity with technology. Explore immersive experiences crafted with Three.js, navigate seamlessly with Next.js, and enjoy sleek design with Tailwind CSS. Dive into my projects and discover the fusion of artistry and innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "font-inter font-poppins cursor-none")}>
        <Providers>
          <Cursor />
          <Nav />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
