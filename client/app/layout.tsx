"use client";

import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import AppBar from "@/components/AppBar";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";
// export const metadata: Metadata = {
//   title: "Algo-art",
// };
import "flowbite/lib/esm/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Components should arrange their own layout solutions according to the requirements in a main HTML tag */}
      <body className="min-h-screen min-w-screen">
        <NavigationBar />
        {children}

        {/* 
         <AppBar/>   */}
        <Footer />
      </body>
    </html>
  );
}
