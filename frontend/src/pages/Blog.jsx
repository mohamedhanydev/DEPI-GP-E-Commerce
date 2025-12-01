import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Add this import
// ... rest of the component setup
// Don't forget to import 'bootstrap/dist/css/bootstrap.min.css' in your main file (e.g., App.js or index.js)

// Mock data structure for blog posts
const mockBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    summary:
      "A brief introduction to the most essential React Hooks: useState and useEffect.",
    author: "Alice Johnson",
    date: "2025-11-01",
    imageUrl: "https://via.placeholder.com/600x400?text=React+Hooks", // Placeholder image
    slug: "/blog/getting-started-with-react-hooks", // For routing to the full post
  },
  {
    id: 2,
    title: "Advanced CSS Techniques for Modern Web Design",
    summary:
      "Exploring Flexbox, Grid, and utility-first frameworks like Tailwind CSS.",
    author: "Bob Smith",
    date: "2025-10-25",
    imageUrl: "https://via.placeholder.com/600x400?text=CSS+Design",
    slug: "/blog/advanced-css-techniques",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    summary:
      "Server-Side Rendering, Static Site Generation, and the rise of edge computing.",
    author: "Charlie Brown",
    date: "2025-10-18",
    imageUrl: "https://via.placeholder.com/600x400?text=Web+Future",
    slug: "/blog/future-of-web-dev",
  },
];

// Helper component for a single blog card
const BlogPostCard = ({ post }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={post.imageUrl} className="card-img-top" alt={post.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text flex-grow-1">{post.summary}</p>
          <Link to={`/blog/${post.id}`} className="btn btn-primary mt-3">
            Read More
          </Link>
        </div>
        <div className="card-footer text-muted small">
          By **{post.author}** on {post.date}
        </div>
      </div>
    </div>
  );
};

// Main Blog Page Component
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, replace this with an API call (e.g., using fetch)
    const fetchBlogPosts = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // --- REAL API CALL WOULD GO HERE ---
        // const response = await fetch('/api/blogposts');
        // if (!response.ok) throw new Error('Failed to fetch posts');
        // const data = await response.json();
        // setPosts(data);
        // -----------------------------------

        // Using mock data for the example
        setPosts(mockBlogPosts);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array ensures it runs only once after the initial render

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center alert alert-danger">
        Error loading posts: **{error}**
      </div>
    );
  }

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4">📚 The Official Blog</h1>
        <p className="lead">Latest articles and insights from our team.</p>
      </header>

      {posts.length === 0 ? (
        <div className="alert alert-info text-center">
          No blog posts available right now. Check back later!
        </div>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
