'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import React from 'react'

const AllCategories = () => {
  const categories = [
    {
      storeName: "Accessories",
      stores: "23 stores",
      Allstores: "View All 23 stores",
    },
    {
      storeName: "Books",
      stores: "01 stores",
      Allstores: "View All 01 stores",
    },
    {
      storeName: "Beauty",
      stores: "09 stores",
      Allstores: "View All 09 stores",
    },
    {
      storeName: "Electronics",
      stores: "0 stores",
      Allstores: "View All 0 stores",
    },
    {
      storeName: "Auto",
      stores: "03 stores",
      Allstores: "View All 03 stores",
    },
    {
      storeName: "Fashion",
      stores: "15 stores",
      Allstores: "View All 15 stores",
    },
    {
      storeName: "Home & Garden",
      stores: "08 stores",
      Allstores: "View All 08 stores",
    },
    {
      storeName: "Sports",
      stores: "12 stores",
      Allstores: "View All 12 stores",
    },
  ];

  const router = useRouter();

  const handleCategory = (category) => {
    router.push(`/listofcategories/${category.storeName.toLowerCase()}`);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Navigation */}
      <nav className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50"
        >
          Home
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-md">
          Categories
        </span>
      </nav>

      {/* Hero Banner */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-10 lg:mb-12">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 p-6 sm:p-8 lg:p-12 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20 transform -translate-x-16 translate-y-16"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold drop-shadow-lg">
              ALL CATEGORIES
            </h1>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 opacity-90 max-w-2xl">
              Browse through all available categories and discover amazing stores with exclusive deals
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
                <p className="text-white text-xs sm:text-sm opacity-80">Total Categories</p>
                <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">{categories.length}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2">
                <p className="text-white text-xs sm:text-sm opacity-80">Total Stores</p>
                <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                  {categories.reduce((acc, cat) => acc + parseInt(cat.stores) || 0, 0)}+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Grid Header */}
        <div className="flex items-center justify-between mb-4 sm:mb-6 px-2">
          <h2 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-semibold">
            Browse Categories
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm">
            {categories.length} categories available
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon or Image Placeholder */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center text-white text-xl sm:text-2xl lg:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {category.storeName.charAt(0)}
              </div>

              {/* Category Name */}
              <h3 className="text-gray-800 text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 line-clamp-1">
                {category.storeName}
              </h3>

              {/* Store Count Badge */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full">
                  {category.stores}
                </span>
                {parseInt(category.stores) === 0 && (
                  <span className="bg-yellow-50 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              {/* View Button */}
              <button
                onClick={() => handleCategory(category)}
                className={`w-full mt-auto px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn
                  ${parseInt(category.stores) > 0 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg active:scale-95' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                disabled={parseInt(category.stores) === 0}
                aria-label={`View ${category.storeName} stores`}
              >
                <span>{category.Allstores}</span>
                {parseInt(category.stores) > 0 && (
                  <svg 
                    className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State - if no categories */}
        {categories.length === 0 && (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-md mx-auto">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <h3 className="text-gray-800 text-lg sm:text-xl font-semibold mb-2">No Categories Found</h3>
              <p className="text-gray-500 text-sm sm:text-base">Check back later for new categories</p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 lg:mt-12 px-2">
        <div className="bg-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm">
            Can't find what you're looking for?{' '}
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
              Contact us
            </Link>{' '}
            for assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default AllCategories;