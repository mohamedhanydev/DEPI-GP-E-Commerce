import React, { useState, useEffect } from "react";

// --- Mock Data Store (Same as BlogPage, but now we use it for lookup) ---
const mockBlogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    summary:
      "A brief introduction to the most essential React Hooks: useState and useEffect.",
    author: "Alice Johnson",
    date: "2025-11-01",
    content: `
      <p>React Hooks fundamentally changed how we write React components. They allow you to use state and other React features without writing a class.</p>
      <h2>The useState Hook</h2>
      <p>The <code>useState</code> hook is arguably the most important one. It lets you add state variables to functional components. It returns a pair of values: the current state and a function that updates it.</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      <h2>The useEffect Hook</h2>
      <p>The <code>useEffect</code> hook lets you perform side effects in functional components. This includes data fetching, subscriptions, or manually changing the DOM.</p>
      <p>By using a dependency array (the second argument), you control when the effect runs.</p>
      <pre><code>useEffect(() => { 
        // Code to run on mount and update 
      }, [dependency1, dependency2]);</code></pre>
      <p>Mastering these two hooks is key to modern React development.</p>
    `,
    imageUrl: "https://via.placeholder.com/1200x500?text=React+Hooks+Featured",
  },
  {
    id: 2,
    title: "Advanced CSS Techniques for Modern Web Design",
    summary:
      "Exploring Flexbox, Grid, and utility-first frameworks like Tailwind CSS.",
    author: "Bob Smith",
    date: "2025-10-25",
    content: `<p>... Detailed content for CSS techniques post goes here ...</p>`,
    imageUrl: "https://via.placeholder.com/1200x500?text=CSS+Design+Featured",
  },
  // ... other posts
];

// Main Blog Post Component
// In a real application, postId would come from React Router's URL params (e.g., props.match.params.postId)
const BlogPostPage = ({ postId = 1 }) => {
  // Default to post ID 1 for demonstration
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSinglePost = async () => {
      setLoading(true);
      setError(null);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // --- REAL API CALL WOULD GO HERE ---
        // const response = await fetch(`/api/blogposts/${postId}`);
        // if (!response.ok) throw new Error('Failed to fetch post');
        // const data = await response.json();
        // -----------------------------------

        // Using mock data lookup
        const foundPost = mockBlogPosts.find((p) => p.id === postId);

        if (!foundPost) {
          throw new Error("Blog post not found.");
        }

        setPost(foundPost);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSinglePost();
  }, [postId]); // Rerun the effect whenever the postId prop changes

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger" role="alert">
          **{error || "Post data is missing."}**
        </div>
        {/* In a real app, you'd link back to the blog list */}
        <a href="/blog" className="btn btn-secondary mt-3">
          Go back to all posts
        </a>
      </div>
    );
  }

  // Renders the content safely using dangerouslySetInnerHTML
  // NOTE: This is only safe if you trust the source of the HTML content (your own API/CMS).
  // For user-generated content, you must use a sanitization library.
  const renderContent = () => {
    return { __html: post.content };
  };

  return (
    <article className="container my-5">
      {/* Featured Image */}
      <div className="text-center mb-5">
        <img
          src={post.imageUrl}
          className="img-fluid rounded shadow"
          alt={post.title}
          style={{ maxHeight: "500px", objectFit: "cover", width: "100%" }}
        />
      </div>

      {/* Header */}
      <header className="row justify-content-center">
        <div className="col-lg-10">
          <h1 className="display-3 fw-bold mb-3">{post.title}</h1>
          <p className="lead text-muted border-bottom pb-3 mb-4">
            By **{post.author}** | Published on{" "}
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </header>

      {/* Content */}
      <section className="row justify-content-center">
        <div className="col-lg-10 blog-content">
          {/* WARNING: Using dangerouslySetInnerHTML is required here to render raw HTML content 
            from your blog's data source (like a CMS), but be extremely careful with it.
          */}
          <div dangerouslySetInnerHTML={renderContent()} />
        </div>
      </section>

      {/* Footer / Back Link */}
      <footer className="row justify-content-center mt-5 pt-4 border-top">
        <div className="col-lg-10">
          <a href="/blog" className="btn btn-outline-primary">
            &larr; Back to all posts
          </a>
        </div>
      </footer>
    </article>
  );
};

export default BlogPostPage;
