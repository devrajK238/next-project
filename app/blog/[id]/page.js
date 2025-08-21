"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import "@/styles/BlogSection.css";
import "@/styles/Button.css";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const images = [
    "https://picsum.photos/id/1015/1200/600",
    "https://picsum.photos/id/1016/1200/600",
    "https://picsum.photos/id/1018/1200/600",
    "https://picsum.photos/id/1020/1200/600",
    "https://picsum.photos/id/1024/1200/600",
    "https://picsum.photos/id/1025/1200/600",
  ];

  useEffect(() => {
    if (!id) return;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const blogWithImage = {
          ...data,
          heroImage: images[data.id % images.length],
          contentImage: `https://picsum.photos/id/${100 + Number(id)}/900/500`,
        };
        setBlog(blogWithImage);
      })
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  if (!blog) return <p className="loading">Loading...</p>;

  return (
    <>
      {/* 🌟 Hero Section */}
      <section
        className="blogHero fadeIn"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${blog.heroImage}) center/cover no-repeat`,
        }}
      >
        <div className="blogHeroOverlay">
          <h1 className="blogHeroTitle">{blog.title}</h1>
          <p className="blogHeroSubtitle">
            ✍️ Blog #{blog.id} · Written by User {blog.userId}
          </p>
        </div>
      </section>

      {/* 📝 Blog Content */}
      <section className="blogSection fadeIn">
        <div className="container blogDetail">
          <h2 className="heading">{blog.title}</h2>

          {/* Featured Content Image */}
          <div className="imageWrapper">
            <img
              src={blog.contentImage}
              alt={blog.title}
              className="blogContentImage"
            />
          </div>

          <p className="blogBody">
            {blog.body} {blog.body} {blog.body}
          </p>

          <Link href="/blog" className="btn backBtn">
            ← Back to Blogs
          </Link>
        </div>
      </section>
    </>
  );
}
