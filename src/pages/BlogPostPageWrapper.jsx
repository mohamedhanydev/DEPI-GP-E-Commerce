import { useParams } from "react-router-dom";
import BlogPostPage from "./BlogPost"; // Import the original component

const BlogPostPageWrapper = () => {
  // 1. Use the hook to extract the ID from the URL (matching :id in the route path)
  const { id } = useParams();

  // 2. Convert the ID (which is a string) to an integer
  const postId = parseInt(id, 10);

  // 3. Render the original component, passing the numeric ID as a prop
  return <BlogPostPage postId={postId} />;
};

export default BlogPostPageWrapper;
