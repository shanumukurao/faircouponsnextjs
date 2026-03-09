"use client";
import React from "react";
import Link from "next/link";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL || "";

export default function BlogDetails({ blog, blogs }) {
  if (!blog) return <p className="text-center py-10">Blog not found.</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT SECTION */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <img
              src={`${IMG_URL}${blog.blogImage}`}
              alt="Blog cover"
              className="w-full h-[400px] object-cover rounded-xl mb-6"
            />

            <h1 className="text-3xl font-bold mb-4">
              {blog.title.en}
            </h1>

            <ul className="flex gap-6 text-sm text-gray-500 mb-4">
              <li>By {blog.author}</li>
            </ul>

            <p className="text-gray-700 mb-6">
              {blog.description}
            </p>

            {/* BLOG CONTENT */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-4 space-y-6">
          {/* MORE POSTS */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h4 className="text-xl font-semibold mb-4">More Posts</h4>

            {blogs
              ?.filter((b) => b._id !== blog._id && b.blogStatus === "show")
              .slice(0, 4)
              .map((item) => (
                <Link
                  key={item._id}
                  href={`/blog/${item.slug}`}
                  className="flex gap-3 mb-4 group"
                >
                  <img
                    src={`${IMG_URL}${item.blogImage}`}
                    alt={item.title.en}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h5 className="text-sm font-medium group-hover:text-blue-600">
                      {item.title.en}
                    </h5>
                    <p className="text-xs text-gray-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}

            <Link
              href="/blog"
              className="inline-block mt-3 text-sm font-semibold text-blue-600 hover:underline"
            >
              See All
            </Link>
          </div>

          {/* POPULAR TAGS */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h5 className="text-xl font-semibold mb-4">Popular Tags</h5>

            <ul className="flex flex-wrap gap-2">
              {[
                "Coupons",
                "Flash Sale",
                "Exclusive",
                "Best Offer",
                "Trending",
                "Discount",
                "Hot Deal",
              ].map((tag, index) => (
                <li
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-blue-100 cursor-pointer"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <Link
              href=""
              className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
