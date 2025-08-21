"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "@/styles/BlogSection.css";
import "@/styles/Button.css";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  const images = [
    "https://picsum.photos/id/1015/1200/500",
    "https://picsum.photos/id/1016/1200/500",
    "https://picsum.photos/id/1018/1200/500",
    "https://picsum.photos/id/1020/1200/500",
    "https://picsum.photos/id/1024/1200/500",
    "https://picsum.photos/id/1025/1200/500",
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const blogsWithImages = data.slice(0, 12).map((blog, index) => ({
          ...blog,
          image: images[index % images.length],
        }));
        setBlogs(blogsWithImages);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <main>
      {/* 🌟 Beautiful Hero Section */}
      <section className="blogHero">
        <div className="blogHeroOverlay">
          <h1 className="blogHeroTitle">Welcome to Our Blog</h1>
          <p className="blogHeroSubtitle">
            Discover insights, tips, and stories to inspire your journey 🚀
          </p>
          <Link href="#allBlogs" className="btn heroBtn">
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section id="allBlogs" className="blogSection">
        <div className="container">
          <h2 className="heading">All Blogs</h2>
          <div className="blogGrid">
            {blogs.map((blog) => (
              <div key={blog.id} className="card">
                <div className="cardImageWrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="cardImage"
                  />
                </div>
                <div className="cardContent">
                  <h3>{blog.title}</h3>
                  <p>{blog.body.slice(0, 100)}...</p>
                  <Link href={`/blog/${blog.id}`} className="btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
