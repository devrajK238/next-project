"use client"; // needed because we use useState
import Link from "next/link";
import { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">NextJs</div>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
