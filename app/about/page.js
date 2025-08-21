"use client";
import "@/styles/About.css";

export default function About() {
  return (
    <main>
      {/* 🌟 Hero Section */}
      <section
        className="aboutHero fadeIn"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
                       url("https://picsum.photos/id/1005/1600/700") center/cover no-repeat`,
        }}
      >
        <div className="aboutHeroOverlay">
          <h1 className="aboutHeroTitle">About Us</h1>
          <p className="aboutHeroSubtitle">
            Building meaningful digital experiences that inspire 🚀
          </p>
        </div>
      </section>

      {/* 📝 Who We Are */}
      <section className="aboutSection fadeIn">
        <div className="container aboutContent">
          <div className="aboutText">
            <h2 className="heading">Who We Are</h2>
            <p>
              We are a creative team passionate about technology, design, 
              and innovation. Our goal is to craft impactful digital products 
              that empower businesses and communities. ✨
            </p>
            <p>
              With years of combined expertise, we focus on delivering 
              scalable, modern, and user-friendly solutions.
            </p>
          </div>
          <div className="aboutImageWrapper">
            <img
              src="https://picsum.photos/id/1011/600/400"
              alt="Who we are"
              className="aboutImage"
            />
          </div>
        </div>
      </section>

      {/* 🎯 Mission / Vision */}
      <section className="missionSection fadeIn">
        <div className="container missionGrid">
          <div className="missionCard">
            <h3>🌍 Our Mission</h3>
            <p>
              To build world-class digital solutions that help businesses grow 
              and communities connect globally.
            </p>
          </div>
          <div className="missionCard">
            <h3>🚀 Our Vision</h3>
            <p>
              To be the most trusted partner in digital transformation by 
              empowering people with innovative technology.
            </p>
          </div>
        </div>
      </section>

      {/* 👨‍👩‍👧 Team Section */}
      <section className="teamSection fadeIn">
        <div className="container">
          <h2 className="heading center">Meet Our Team</h2>
          <div className="teamGrid">
            <div className="teamCard">
              <img src="https://picsum.photos/id/1005/200/200" alt="Team 1" />
              <h3>Dev Raj</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="teamCard">
              <img src="https://picsum.photos/id/1011/200/200" alt="Team 2" />
              <h3>Anita Sharma</h3>
              <p>UI/UX Designer</p>
            </div>
            <div className="teamCard">
              <img src="https://picsum.photos/id/1012/200/200" alt="Team 3" />
              <h3>Rahul Mehta</h3>
              <p>Backend Engineer</p>
            </div>
            <div className="teamCard">
              <img src="https://picsum.photos/id/1015/200/200" alt="Team 4" />
              <h3>Priya Singh</h3>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
