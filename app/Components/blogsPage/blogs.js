import React from "react";
import Link from "next/link";

const IMG_URL = process.env.NEXT_PUBLIC_IMG_URL || "";

export default function Blogs({ blogsData }) {
  return (
    <>
      {/* TOP BLOG SECTION */}
      <section id="blogs" className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* LEFT BLOGS */}
            <div className="lg:col-span-8 space-y-10">
              {blogsData
                .filter((blog) => blog.blogStatus === "show")
                .slice(0, 2)
                .map((blog) => (
                  <div
                    key={blog._id}
                    className="bg-white rounded-2xl shadow-md p-6"
                  >
                    <p className="text-sm text-gray-500 mb-3">
                      <span className="uppercase tracking-wide">
                        Related Blog
                      </span>
                    </p>

                    <img
                      src={`${IMG_URL}${blog.blogImage}`}
                      alt="Blog Image"
                      className="w-full h-[350px] object-cover rounded-xl"
                    />

                    <h4 className="text-xl font-semibold text-center mt-4">
                      {blog.title.en}
                    </h4>

                    <p className="text-center text-gray-600 mt-2">
                      {blog.description}
                    </p>

                    <div className="flex justify-center mt-4">
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
            </div>

            {/* RIGHT BLOGS */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-md p-5">
                <h4 className="text-center text-lg font-semibold mb-4">
                  <span>Top Articles</span>
                </h4>

                {blogsData
                  .filter((blog) => blog.blogStatus === "show")
                  .slice(0, 4)
                  .map((blog, index) => (
                    <div
                      key={index}
                      className="flex gap-3 py-3 border-b last:border-b-0"
                    >
                      <img
                        src={`${IMG_URL}${blog.blogImage}`}
                        alt="Blog Image"
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div>
                        <h6 className="text-sm font-semibold">
                          {blog.title.en}
                        </h6>

                        <p className="text-xs text-gray-600 line-clamp-2">
                          {blog.description}
                        </p>

                        <Link
                          href={`/blog/${blog.slug}`}
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BLOG SECTION */}
      <section id="bottom-blogs" className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">
            Related Blogs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {blogsData
    .filter((blog) => blog.blogStatus === "show")
    .slice(0, 3)
    .map((blog) => (
      <div
        key={blog._id}
        className="group bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
      >
        {/* IMAGE */}
        <div className="overflow-hidden">
          <img
            src={`${IMG_URL}${blog.blogImage}`}
            alt={blog.title.en}
            className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h6 className="font-semibold mb-2 group-hover:text-blue-600 transition">
            {blog.title.en}
          </h6>

          <p className="text-sm text-gray-600 mb-3 line-clamp-3">
            {blog.description}
          </p>

          <Link
            href={`/blog/${blog.slug}`}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    ))}
</div>

        </div>
      </section>
    </>
  );
}
