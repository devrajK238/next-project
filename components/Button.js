"use client";
import styles from "@/styles/Button.css";

/**
 * Reusable Button
 * - text: button label
 * - href: add this to make it a link (<a>)
 * - onClick: use when it's a normal <button>
 * - variant: "primary" | "secondary" | "outline"
 * - size: "sm" | "md" | "lg"
 * - fullWidth: true | false
 */
export default function Button({
  text,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
  target,   // e.g. "_blank" for new tab
  rel       // e.g. "noopener noreferrer"
}) {
  const classes = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : ""
  ].join(" ");

  // If href exists, render as a link
  if (href) {
    return (
      <a href={href} className="btn" target={target} rel={rel}>
        {text}
      </a>
    );
  }

  // Otherwise, render as a normal button
  return (
    <button type={type} onClick={onClick} className="btn">
      {text}
    </button>
  );
}
