"use client";
import "@/styles/Contact.css";
import "@/styles/Button.css";


export default function Contact() {
  return (
    <main>
      {/* 🌟 Hero Section */}
      <section
        className="contactHero fadeIn"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
                       url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f) center/cover no-repeat`,
        }}
      >
        <div className="contactHeroOverlay">
          <h1 className="contactHeroTitle">Get in Touch</h1>
          <p className="contactHeroSubtitle">
            We&apos;d love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* 📍 Contact Info */}
      <section className="contactInfo fadeIn">
        <div className="container contactGrid">
          <div className="infoCard">
            <h3>📍 Address</h3>
            <p>123 Business Street, New Delhi, India</p>
          </div>
          <div className="infoCard">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="infoCard">
            <h3>📧 Email</h3>
            <p>hello@yourcompany.com</p>
          </div>
        </div>
      </section>

      {/* 📝 Contact Form */}
      <section className="contactFormSection fadeIn">
        <div className="container formWrapper">
          <h2 className="heading center">Send Us a Message</h2>
          <form className="contactForm">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn">Send Message</button>
            
          </form>
        </div>
      </section>

      {/* 🗺️ Google Map */}
      <section className="mapSection fadeIn">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.9333808284753!2d77.21672121492197!3d28.644800982414585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0f64d9d6fb%3A0x7a2b5b2bfa46e35c!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1689517234567"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
