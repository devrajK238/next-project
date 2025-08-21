import BlogSection from "@/components/BlogSection";
import Hero from "@/components/Hero";
import FacultySlider from "@/components/FacultySlider";
export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="aboutSection fadeIn">
        <div className="container aboutContent">
          <div className="aboutText">
            <h2 className="heading">Who We Are</h2>
            <p>
              We are a creative team passionate about technology, design, and
              innovation. Our goal is to craft impactful digital products that
              empower businesses and communities. ✨
            </p>
            <p>
              With years of combined expertise, we focus on delivering scalable,
              modern, and user-friendly solutions.
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
      <BlogSection />
      <FacultySlider />
    </>
  );
}
