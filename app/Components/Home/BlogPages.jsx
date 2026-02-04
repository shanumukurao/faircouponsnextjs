import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogPages = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, date, readTime, image, excerpt, category, author } =
    location.state || {};

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      {/* Image */}
      <img
        src={image}
        className="w-full h-96 object-cover rounded-xl shadow-md"
        alt=""
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mt-6 text-gray-900">{title}</h1>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 text-gray-600 mt-3 text-sm">
        <span>📅 {date}</span>
        <span>⏱️ {readTime}</span>
        <span>🏷️ {category}</span>
        <span>✍🏼 {author}</span>
      </div>

      {/* Body Content */}
      <div className="mt-8 text-lg leading-relaxed text-gray-700">
        {excerpt}
      </div>

      {/* Tags */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {["Coupon Codes", "Shopping Tips", "Discount", "Deals", "Cashback"].map(
            (tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition"
              >
                #{tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Share Buttons */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-3">Share this article</h3>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Share on Facebook
          </button>
          <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
            Share on Twitter
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Share on WhatsApp
          </button>
        </div>
      </div>

      {/* Author Box */}
      <div className="mt-12 bg-gray-100 p-6 rounded-xl flex gap-4 items-center shadow-sm">
        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
          {author?.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{author}</h3>
          <p className="text-gray-600 text-sm">
            Passionate writer who loves helping people save money with smart
            shopping, deals, and coupon strategies.
          </p>
        </div>
      </div>

      {/* Recommended Section */}
      <div className="mt-14">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Recommended Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="p-5 bg-white shadow-md rounded-xl hover:shadow-lg transition cursor-pointer"
            >
              <h4 className="text-lg font-semibold text-gray-800">
                Related Article {i}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">
                Helpful tips and guides for smarter savings and online shopping.
              </p>
              <button className="mt-3 text-blue-600 font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Next / Previous Buttons */}
      <div className="mt-12 flex justify-between">
        <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          ← Previous Article
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Next Article →
        </button>
      </div>
    </div>
  );
};

export default BlogPages;
