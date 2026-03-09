'use client'

import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import friday from "../../../../public/assets/13.png";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const Cashback = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [showAllRewards, setShowAllRewards] = useState(false);
  const [popup, setPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const router=useRouter();

const searchParams = useSearchParams();
const heading = searchParams.get("heading") || "";    
const logo = searchParams.get("logo") || "";
const name = searchParams.get("name") || "Store Name"; // This will be empty - see note below
const cashback = searchParams.get("cashback") || "Flat 2.5% Cashback";

  // Tabs configuration
  const tabs = [
    { id: "ALL", label: "All Offers", count: 109 },
    { id: "COUPONS", label: "Coupons", count: 16 },
    { id: "CASHBACK", label: "Cashback", count: 77 },
    { id: "DEALS", label: "Deals", count: 93 },
  ];

  // Rewards data
  const rewards = [
    {
      amount: "₹50",
      desc: "Voucher Rewards for New Sign Ups on CouponDunia & Amazon (Lucky 100 Users) On their 1st Transaction",
    },
    {
      amount: "6.5%",
      desc: "Voucher Rewards for New Sign Ups on CouponDunia & Amazon (Lucky 100 Users) On their 1st Transaction",
    },
    { amount: "5.0%", desc: "Voucher Rewards for Luxury Beauty" },
    { amount: "7.0%", desc: "Voucher Rewards for Beauty" },
  ];

  // FAQ data
  const faqItems = [
    {
      question: `Where can I find the latest ${name} coupons?`,
      answer: `To find the latest ${name} coupons, visit our Cashback page regularly. We update our offers frequently to ensure you have access to the best deals available.`
    },
    {
      question: `How do I redeem ${name} coupons on MyFairCoupons?`,
      answer: `To redeem ${name} coupons on MyFairCoupons, simply click on the desired coupon offer. You will be redirected to the ${name} website where the coupon code will be automatically applied at checkout.`
    },
    {
      question: `Are ${name} coupons valid for all products?`,
      answer: `Most ${name} coupons are valid for a wide range of products, but some may have specific terms and conditions. Always check the coupon details for any restrictions or exclusions.`
    },
    {
      question: `Can I use multiple ${name} coupons at once?`,
      answer: `Typically, only one coupon can be used per transaction on ${name}. However, you can combine coupons with ongoing sales or promotions for additional savings.`
    },
    {
      question: `How often does ${name} release new coupons?`,
      answer: `${name} frequently releases new coupons, especially during festive seasons and special sales events. Stay updated by checking our Cashback page regularly.`
    }
  ];

  // Discount codes data
  const discountCodes = [
    {
      title: "Avail Deal on RAD140 Magnus Pharmaceuticals at Just $65.00",
      description: "Grab a discount on RAD140 Magnus Pharmaceuticals with an available price of $65.00. No discount codes are necessary.",
      used: "Used 10 Times",
      price: "Just $65.00",
      type: "deal"
    },
    {
      title: "Save Up to 20% with Coupons on All Products",
      description: "Get massive discounts on all products with this exclusive coupon code",
      badges: ["Code Verified", "Used 57 Times", "Success Rate - 77%"],
      discount: "20% OFF",
      type: "coupon"
    },
    {
      title: "Save Up to 15% with Coupons on All Products",
      description: "Limited time offer for all customers",
      badges: ["Code Verified", "Used 86 Times", "Success Rate - 76%"],
      discount: "15% OFF",
      type: "coupon"
    }
  ];

  // Cashback details data
  const cashbackDetails = [
    {
      id: 1,
      heading: "Flat 30% Off Sitewide",
      offers: 'Get Upto 30% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '188 Used Today',
      deal: 'Get This Deal',
      details: "This coupon provides 30% discount on all products across the website. Minimum purchase of ₹5000 required. Valid until end of month."
    },
    {
      id: 2,
      heading: "Flat 15% Off Sitewide",
      offers: 'Get Upto 15% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '20 Used Today',
      deal: 'Show Code',
      code: "SBICODE50",
      details: "Use code SBICODE50 at checkout to get 15% off on all jewellery items. No minimum purchase required. Limited time offer."
    },
    {
      id: 3,
      heading: "Flat 80% Off Sitewide",
      offers: 'Get Upto 80% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '56 Used Today',
      deal: 'Get This Deal',
      details: "Massive 80% discount on selected premium jewellery collections. Limited stock available. Terms and conditions apply."
    },
    {
      id: 4,
      heading: "60% Off Sitewide",
      offers: 'Get Upto 60% Off Across All Jewellery Categories',
      verified: 'Verified Today',
      used: '56 Used Today',
      deal: 'Get This Deal',
      details: "Enjoy 60% discount on all diamond jewellery. Special offer for first-time customers. Valid for next 48 hours only."
    }
  ];

  // Handle coupon click
  const handleCouponClick = (item) => {
    if (item.deal.toLowerCase() === "show code") {
      setSelectedCoupon(item);
      setPopup(true);
    } else {
      // Navigate to deal or perform other action
      console.log("Deal clicked:", item);
    }
  };

  // Toggle details visibility
  const toggleDetails = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [copied,setCopied]=useState(false);
  // Copy coupon code
  const handleCopyCode = () => {
    if (selectedCoupon?.code) {
      navigator.clipboard.writeText(selectedCoupon.code);
      // You could add a toast notification here
      setCopied(true);
    }
  };

  // Display rewards based on showAll state
  const displayRewards = showAllRewards ? rewards : rewards.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span
              className="hover:text-blue-600 cursor-pointer transition-colors"
              onClick={() => navigate("/")}
            >
              Home
            </span>
            {heading && (
              <>
                <span className="text-gray-400">›</span>
                <span className="text-gray-400">{heading}</span>
              </>
            )}
            <span className="text-gray-400">›</span>
            <span className="text-gray-900 font-medium">{name}</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900">
            {name} Coupons and Offers
          </h1>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Store Info Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 border-blue-700 rounded-xl flex items-center justify-center shadow-md bg-white">
                  {logo ? (
                    <Image
                      src={logo}
                      alt="Store Logo"
                      width={40}
                       height={40}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">🏪</span>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="font-bold text-lg text-gray-900">{name}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Trusted Partner Store
                  </p>
                  <p className="text-blue-600 text-sm font-semibold mt-1">
                    {cashback || "Flat 2.5% Cashback"}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-semibold">
                    Share & Earn
                  </span>
                  <button className="text-blue-700 hover:text-blue-900 text-sm font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg">
                {cashback || "Active Cashback"}
              </button>
            </div>

            {/* Cashback Tracking */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Cashback Tracking
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">📦</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Order</p>
                      <p className="font-semibold text-gray-900">Today</p>
                    </div>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">⏱️</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Tracks In</p>
                      <p className="font-semibold text-gray-900">1 hour</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 font-bold">⚠️</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Missing Cashback</p>
                      <p className="font-semibold text-gray-900">Accepted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Voucher Rewards */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Voucher Rewards
              </h4>
              <div className="space-y-4">
                {displayRewards.map((reward, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 rounded-r-lg transition-colors"
                  >
                    <h5 className="font-bold text-gray-900 text-lg">
                      {reward.amount}
                    </h5>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {reward.desc}
                    </p>
                  </div>
                ))}
              </div>
              {rewards.length > 2 && (
                <button
                  onClick={() => setShowAllRewards(!showAllRewards)}
                  className="w-full mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center justify-center"
                >
                  {showAllRewards ? "View Less" : "View More"}
                  <BiChevronDown className={`ml-1 transform ${showAllRewards ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            {/* Promotional Banner */}
            <section className="border rounded-xl shadow-sm p-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
              <div className="text-center">
                <h1 className="font-bold text-xl mb-2 text-white">Shop with Coupons Code</h1>
                <p className="text-blue-100 text-sm mb-4">
                  Use the coupons code save your money with also a cashback offers using the faircoupons website
                </p>
                <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Know More
                </button>
              </div>
              <div className="mt-4 flex justify-center">
                <Image src={friday} alt="Friday Sale" width={40} height={40} className="rounded-lg max-w-full" />
              </div>
            </section>
          </div>

          {/* Right Content */}
          <div className="lg:w-3/4">
            {/* Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-3">
                      {name || "PNG Jewellers"} Coupons and Offers
                    </h1>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      {name || "PNG Jewellers"} is an Indian Jewellery company
                      that offers the best gold & diamond jewellery for every
                      occasion.
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 min-w-[200px] text-center">
                    <div className="text-4xl font-bold mb-2">2.2%</div>
                    <div className="text-blue-100 font-semibold">
                      Flat Cashback
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-blue-400/30">
                  <button className="text-blue-100 hover:text-white font-semibold transition-colors">
                    Cashback Rates
                  </button>
                  <button className="text-blue-100 hover:text-white font-semibold transition-colors">
                    Terms & Conditions
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-sm mb-8 p-2">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-4 font-semibold text-lg whitespace-nowrap rounded-xl mx-1 transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white shadow-md"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        activeTab === tab.id
                          ? "bg-white text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Offers Grid */}
            <div className="grid gap-4 mb-8">
              {cashbackDetails.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  {/* Main Offer */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900 mb-1">
                        {item.heading}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.offers}
                      </p>
                      
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2">
                        <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Code
                        </span>
                        <span className="border px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Verified
                        </span>
                        <span className="border px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
                          Exp. in 3 days
                        </span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCouponClick(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold text-sm transition-colors whitespace-nowrap ml-4"
                    >
                      {item.deal}
                    </button>
                  </div>

                  {/* Separator */}
                  <hr className="border-gray-200 my-3" />

                  {/* Details Toggle */}
                  <button 
                    onClick={() => toggleDetails(item.id)}
                    className="w-full text-left text-gray-700 text-sm font-medium mb-2"
                  >
                    {expandedItems[item.id] ? "Hide Details ▲" : "Show Details ▼"}
                  </button>

                  {/* Expanded Details */}
                  {expandedItems[item.id] && (
                    <div className="mt-2 text-gray-600 text-sm">
                      <ul className="space-y-1">
                        <li>• Enjoy {item.heading.toLowerCase()}.</li>
                        <li>• Offer valid only on Tuesday.</li>
                        <li>• Use the coupon code to avail the offer.</li>
                      </ul>
                    </div>
                  )}

                  {/* Success Rate */}
                  <div className="flex items-center justify-end mt-3">
                    <span className="text-blue-600 text-xs font-medium">100% Success</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Collection */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white relative overflow-hidden mb-8">
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                      Premium Jewellery Collection
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {["GOLD", "DIAMOND", "EXCLUSIVE", "LIMITED EDITION"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg text-sm"
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>
                    <p className="text-gray-300 text-lg">
                      Discover our exclusive collection with special discounts
                      and cashback offers
                    </p>
                  </div>
                  <button className="group bg-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>

              {/* Background Blurs */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-24 -translate-x-24"></div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-left">
                FAQ: Everything You Need To Know To Save BIG
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="space-y-6">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* More Discount Codes */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
                More {name} Discount Codes
              </h2>
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <div className="grid gap-6">
                  {discountCodes.map((code, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {code.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-xl">
                            {code.description}
                          </p>
                          {code.type === "deal" ? (
                            <div className="flex items-center space-x-3">
                              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                                {code.used}
                              </span>
                            </div>
                          ) : (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {code.badges.map((badge, badgeIndex) => (
                                <span key={badgeIndex} className="bg-green-100 text-green-800 text-md font-semibold px-3 py-1 rounded-full">
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end gap-4">
                          <div className="text-right">
                            {code.type === "deal" ? (
                              <span className="text-2xl font-bold text-green-600">
                                {code.price}
                              </span>
                            ) : (
                              <span className="text-2xl font-bold text-blue-600">
                                {code.discount}
                              </span>
                            )}
                          </div>
                          <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg whitespace-nowrap">
                            {code.type === "deal" ? "Show Deal" : "SHOW CODE"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-start tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            {name || 'the Store'}
          </span>
        </h2>

        <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg border border-gray-200 p-8 sm:p-10 overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
          {/* Decorative Glow Effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          <p className="relative text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 z-10">
            <span className="font-semibold text-indigo-600">{name || 'the store'}</span> is one of the most
            popular online destinations for shoppers looking for quality products at great prices.
            Whether you're buying <span className="font-medium">electronics</span>, <span className="font-medium">fashion</span>,
            home appliances, or groceries, <span className="font-semibold text-purple-600">{name || 'the store'}</span> offers
            unbeatable deals and cashback opportunities to make your shopping experience more rewarding.
          </p>

          <p className="relative text-gray-700 text-lg sm:text-xl leading-relaxed z-10">
            Stay connected with <span className="font-semibold text-indigo-600">MyFairCoupons</span> to never
            miss the latest <span className="font-semibold text-purple-600">{name || 'the store'}</span> coupons,
            exclusive discounts, and seasonal offers. Our team ensures that every deal you see here is
            <span className="font-semibold text-green-600"> 100% verified</span> and up to date — so you can shop
            confidently and <span className="font-bold text-indigo-600">save big every time!</span>
          </p>
        </div>
      </div>

      {/* Coupon Code Popup */}
 {popup && selectedCoupon && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-3 sm:px-4">
    
    {/* Modal */}
    <div className="
      relative w-full max-w-lg
      max-h-[90vh] overflow-y-auto
      bg-white/95 backdrop-blur-md
      border border-gray-200 shadow-2xl
      rounded-2xl sm:rounded-3xl
      p-4 sm:p-6 md:p-8
      animate-fadeIn
    ">

      {/* Close Button */}
      <button
        onClick={() => { setPopup(false); setSelectedCoupon(null); }}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl"
      >
        <MdClose />
      </button>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 sm:mb-6">
        🎉 Copy Your Coupon Code
      </h2>

      {/* Code Box */}
      <div className="
        flex flex-col sm:flex-row gap-3
        items-center justify-between
        bg-gradient-to-r from-blue-50 to-blue-100
        p-3 sm:p-4 rounded-xl sm:rounded-2xl
        border border-blue-200 shadow-inner mb-5
      ">
        <span className="text-base sm:text-lg md:text-xl font-extrabold text-blue-700 tracking-wider break-all text-center sm:text-left">
          {selectedCoupon.code}
        </span>

        <button
          onClick={handleCopyCode}
          className="
            w-full sm:w-auto
            bg-blue-600 hover:bg-blue-700
            text-white px-4 py-2 rounded-lg sm:rounded-xl
            font-semibold shadow-md
            flex items-center justify-center gap-2
          "
        >
          <FaCopy className="text-sm" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Open Store */}
      <button className="
        w-full mb-5
        bg-gradient-to-r from-green-500 to-emerald-600
        hover:from-green-600 hover:to-emerald-700
        text-white py-2.5 rounded-lg sm:rounded-xl
        font-semibold shadow-md
        transition transform active:scale-95
      ">
        🛍️ Open Store
      </button>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row gap-4">

        {/* Feedback */}
        <div className="flex-1 bg-white/80 rounded-xl border shadow-inner p-3 text-center">
          <h3 className="text-sm sm:text-base font-semibold mb-2">
            Did this code work?
          </h3>

          <div className="flex justify-center gap-2">
            <button className="px-4 py-1.5 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-sm font-medium">
              👍 Worked
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 text-sm font-medium">
              👎 Didn’t
            </button>
          </div>
        </div>

        {/* Save Store */}
        <div className="flex-1 bg-white/80 rounded-xl border shadow-inner p-3 text-center">
          <h3 className="text-sm sm:text-base font-semibold mb-2">
            Reminder
          </h3>
          <button className="px-5 py-1.5 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 text-sm font-medium">
            💾 Save Store
          </button>
        </div>

      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Cashback;