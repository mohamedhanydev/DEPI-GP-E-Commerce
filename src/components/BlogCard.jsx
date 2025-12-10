import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="rounded overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <img src={image} alt={CardTitle} className="w-full h-48 object-cover" />
            <div className="p-6">
              {date && (
                <span className="mb-4 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                  {date}
                </span>
              )}
              <h3>
                <Link
                  to={`/blog/${id}`}
                  className="mb-3 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {CardTitle}
                </Link>
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                {CardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
