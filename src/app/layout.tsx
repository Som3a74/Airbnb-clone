import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hadder from "./Components/Hadder/Hadder";
import Footer from "./Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "airbnb App for travil",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hadder />
        {children}
        <Footer />
      </body>
    </html>
  );
}
