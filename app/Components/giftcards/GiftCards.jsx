import React from 'react'

const GiftCards = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4">
        Gift Cards & eGifts
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        The perfect gift for every occasion. Instant delivery, endless possibilities.
      </p>
    </div>

    {/* Search and Filter Bar */}
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search for brands, restaurants, or stores..."
          className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
        <svg className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <select className="px-6 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white">
        <option>All Categories</option>
        <option>Retail & Fashion</option>
        <option>Restaurants & Food</option>
        <option>Electronics & Tech</option>
        <option>Entertainment</option>
        <option>Travel & Experiences</option>
      </select>
    </div>

    {/* Gift Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
      {/* Amazon Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">AZ</span>
          </div>
          <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full font-medium">
            Bestseller
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Amazon</h3>
        <p className="text-gray-600 text-sm mb-4">Everything from A to Z with instant delivery</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$25</span>
            <span className="text-gray-500 text-sm ml-1">- $2,000</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Apple Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm"></span>
          </div>
          <span className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
            Tech
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Apple</h3>
        <p className="text-gray-600 text-sm mb-4">Apps, games, music, iCloud, and more</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$10</span>
            <span className="text-gray-500 text-sm ml-1">- $500</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Starbucks Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">SB</span>
          </div>
          <span className="bg-amber-50 text-amber-600 text-xs px-3 py-1 rounded-full font-medium">
            Food & Drink
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Starbucks</h3>
        <p className="text-gray-600 text-sm mb-4">Handcrafted beverages and food</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$5</span>
            <span className="text-gray-500 text-sm ml-1">- $200</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Walmart Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">WM</span>
          </div>
          <span className="bg-purple-50 text-purple-600 text-xs px-3 py-1 rounded-full font-medium">
            Everyday
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Walmart</h3>
        <p className="text-gray-600 text-sm mb-4">Save money. Live better.</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$10</span>
            <span className="text-gray-500 text-sm ml-1">- $1,000</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Target Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">TG</span>
          </div>
          <span className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
            Family
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Target</h3>
        <p className="text-gray-600 text-sm mb-4">Expect more. Pay less.</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$10</span>
            <span className="text-gray-500 text-sm ml-1">- $500</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Netflix Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">NF</span>
          </div>
          <span className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">
            Entertainment
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Netflix</h3>
        <p className="text-gray-600 text-sm mb-4">Movies, TV shows, and more</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$30</span>
            <span className="text-gray-500 text-sm ml-1">- $100</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Best Buy Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">BB</span>
          </div>
          <span className="bg-yellow-50 text-yellow-600 text-xs px-3 py-1 rounded-full font-medium">
            Electronics
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Buy</h3>
        <p className="text-gray-600 text-sm mb-4">Tech solutions & electronics</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant Email</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">No Expiry</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$25</span>
            <span className="text-gray-500 text-sm ml-1">- $500</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>

      {/* Uber Eats Gift Card */}
      <div className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-sm">UE</span>
          </div>
          <span className="bg-green-50 text-green-600 text-xs px-3 py-1 rounded-full font-medium">
            Delivery
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Uber Eats</h3>
        <p className="text-gray-600 text-sm mb-4">Food delivery from local restaurants</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Delivery</span>
            <span className="text-green-600 font-medium">Instant</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Validity</span>
            <span className="text-gray-900 font-medium">1 Year</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">$15</span>
            <span className="text-gray-500 text-sm ml-1">- $200</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Delivery</h3>
          <p className="text-gray-600">Digital delivery via email or SMS within minutes</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payments</h3>
          <p className="text-gray-600">100% secure transactions with encryption</p>
        </div>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect for Gifting</h3>
          <p className="text-gray-600">Add personal messages for any occasion</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default GiftCards