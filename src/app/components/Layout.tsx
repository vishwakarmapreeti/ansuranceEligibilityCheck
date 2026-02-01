"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import "./layout.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layoutWrapper">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mainContent">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
