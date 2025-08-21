"use client";
import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        {/* Brand */}
        <div className="footerBrand">
          <h2 className="logo">NextJs</h2>
          <p>
            Empowering businesses with modern web solutions.  
            Let's grow together 🚀
          </p>
        </div>

        {/* Quick Links */}
        <div className="footerLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footerLinks">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">SEO Optimization</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Brand Strategy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footerNewsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="newsletterForm">
            <input type="email" placeholder="Your Email" required />
            <button type="submit" className="primaryBtn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerBottom">
        <p>© {new Date().getFullYear()} YourBrand. All Rights Reserved.</p>
        <div className="socialIcons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}
