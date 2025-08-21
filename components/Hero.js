"use client";
import styles from "@/styles/Hero.module.css";
import "@/styles/Button.css";
import Image from "next/image";
import profilePic from "@/public/banner.png"; // replace with your image

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left: Text */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>Hi, I'm Dev Raj 👋</h1>
          <p className={styles.bio}>
            A passionate Web Developer with experience in React, Next.js, and
            modern web technologies. I love building user-friendly applications
            and solving real-world problems with code.
          </p>
          <a href="/contact" className="btn">
            Get in Touch
          </a>
        </div>

        {/* Right: Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={profilePic}
            alt="Dev Raj Profile"
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
