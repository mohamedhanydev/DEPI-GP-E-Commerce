import React from "react";

const BlogPostContent = ({ blog }) => {
  if (!blog) {
    return (
      <div className="mx-auto max-w-[510px] text-center">
        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
          Blog Post Not Found
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          The blog post you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[45px]">
              {blog.title}
            </h1>
            <p className="text-base text-body-color dark:text-dark-6 mb-6">
              By {blog.author} on {blog.date} - {blog.category}
            </p>
            <img src={blog.image} alt={blog.title} className="w-full rounded-lg mb-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 justify-center">
        <div className="w-full px-4 lg:w-2/3">
          <div className="blog-details content-body" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
