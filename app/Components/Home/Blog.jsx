import React from 'react'
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Ways to Save Money with Coupon Codes in 2024",
      excerpt: "Discover the latest strategies and tips to maximize your savings using coupon codes across popular e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Money Saving Tips",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson",
      featured: true
    },
    {
      id: 2,
      title: "The Ultimate Guide to Cashback Offers: How It Really Works",
      excerpt: "Learn everything about cashback offers, from how they work to tips for getting the maximum benefits from your purchases.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      category: "Cashback Guide",
      date: "Dec 12, 2024",
      readTime: "7 min read",
      author: "Mike Chen"
    },
    {
      id: 3,
      title: "Festive Season Sales: Best Deals and When to Grab Them",
      excerpt: "Plan your festive shopping with our comprehensive guide to seasonal sales and the best time to use coupon codes.",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&h=300&fit=crop",
      category: "Seasonal Offers",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      author: "Priya Sharma"
    },
    {
      id: 4,
      title: "Avoid These Common Coupon Code Mistakes",
      excerpt: "Many shoppers make these simple mistakes that cost them savings. Learn how to avoid them and save more.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      category: "Shopping Tips",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      author: "David Wilson"
    },
    {
      id: 5,
      title: "Mobile App vs Website: Where to Find Better Deals?",
      excerpt: "Compare shopping experiences and exclusive offers between mobile apps and websites of popular stores.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop",
      category: "Tech & Shopping",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      author: "Emily Davis"
    },
    {
      id: 6,
      title: "How FairCoupons Verifies Every Offer for Your Safety",
      excerpt: "Behind the scenes look at our verification process ensuring you get working and legitimate coupon codes.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      category: "Trust & Safety",
      date: "Dec 3, 2024",
      readTime: "8 min read",
      author: "FairCoupons Team"
    }
  ];

  const categories = [
    { name: "All Topics", count: 28 },
    { name: "Money Saving Tips", count: 12 },
    { name: "Cashback Guide", count: 8 },
    { name: "Seasonal Offers", count: 15 },
    { name: "Shopping Tips", count: 9 },
    { name: "Tech & Shopping", count: 6 },
    { name: "Trust & Safety", count: 4 }
  ];

  const popularPosts = [
    {
      id: 1,
      title: "Black Friday vs Cyber Monday: Which is Better for You?",
      date: "Nov 28, 2024",
      reads: "2.4K"
    },
    {
      id: 2,
      title: "The Psychology Behind Limited Time Offers",
      date: "Nov 25, 2024",
      reads: "1.8K"
    },
    {
      id: 3,
      title: "How to Stack Coupons for Maximum Savings",
      date: "Nov 20, 2024",
      reads: "1.5K"
    }
  ];

  const navigate = useNavigate();

  const handleData = (post) => {
    navigate("/blogspage", {
      state: {
        title: post.title,
        date: post.date,
        readTime: post.readTime,
        image: post.image,
        excerpt: post.excerpt,
        category: post.category,
        author: post.author
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FairCoupons Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your ultimate guide to smart shopping, coupon codes, and maximizing savings
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <main className="lg:w-2/3">
            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Post</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-sm text-gray-500">{blogPosts[0].date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {blogPosts[0].author.charAt(0)}
                        </div>
                        <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                      </div>
                      <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
                    </div>
                    <button 
                      onClick={() => handleData(blogPosts[0])} 
                      className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* All Blog Posts */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Newest
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                    Popular
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <h3 
                        onClick={() => handleData(post)} 
                        className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
                      >
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {post.author.charAt(0)}
                          </div>
                          <span className="text-xs text-gray-600">{post.author}</span>
                        </div>
                        <span className="text-xs text-gray-500">{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Stay Updated with FairCoupons</h3>
              <p className="text-blue-100 mb-6 max-w-md mx-auto">
                Get the latest coupon codes, shopping tips, and exclusive deals delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-200 mt-3">
                No spam, unsubscribe at any time
              </p>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Blog Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors group"
                  >
                    <span className="text-gray-700 group-hover:text-blue-600">{category.name}</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-600">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 group cursor-pointer">
                    <div className="w-2 bg-blue-200 group-hover:bg-blue-500 transition-colors rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-xs text-blue-600">• {post.reads} reads</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Coupon Codes", "Cashback", "Shopping Tips", "Festive Sales", 
                  "Amazon Offers", "Flipkart Deals", "Money Saving", "Online Shopping",
                  "Discount Codes", "Bank Offers", "Seasonal Sales", "Shopping Guide"
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-2">Ready to Save More?</h3>
              <p className="text-orange-100 text-sm mb-4">
                Explore thousands of verified coupon codes and cashback offers
              </p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                Browse All Offers
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Blog;