// app/components/BlogSection.js
import Link from "next/link";
import "@/styles/BlogSection.css";
import Image from "next/image";
import "@/styles/Button.css";

export default async function BlogSection() {
  // Example images
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1025/600/400",
  ];

  let blogs = [];
  let error = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 120 }, // SEO + refresh every 2 minutes
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status}`);
    }

    const data = await res.json();
    blogs = data.slice(0, 6).map((blog, index) => ({
      ...blog,
      image: images[index % images.length],
    }));
  } catch (err) {
    console.error("Blog fetch error:", err);
    error = "Unable to load blogs at the moment. Please try again later.";
  }

  return (
    <section className="blogSection">
      <div className="container">
        <h2 className="heading">Latest Blogs</h2>

        {error ? (
          <p className="errorMessage">{error}</p>
        ) : (
          <div className="blogGrid">
            {blogs.map((blog) => (
              <div key={blog.id} className="card">
                <div className="heading">
                  
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className="cardImage"
                    width={400}
                    height={400}
                  />
                  <h3>{blog.title}</h3>
                  <p>{blog.body.slice(0, 80)}...</p>
                </div>
                <Link href={`/blog/${blog.id}`} className="btn">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Show More Button */}
        {!error && (
          <div className="btnWrapper">
            <Link href="/blog" className="btn">
              Show More
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
