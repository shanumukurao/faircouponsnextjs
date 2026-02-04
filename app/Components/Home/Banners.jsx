import React from "react";
import { FaBolt, FaTag } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const Banners = ({ name }) => {
  const faqItems = [
    {
      question: `Where can I find the latest ${name} coupons?`,
      answer: `Visit our Cashback page regularly. We update ${name} coupons daily to ensure you get the best deals.`,
    },
    {
      question: `How do I redeem ${name} coupons?`,
      answer: `Click on any ${name} offer and you will be redirected to the store. The coupon applies automatically during checkout.`,
    },
    {
      question: `Are ${name} coupons applicable for all products?`,
      answer: `Some offers have specific terms. Always verify exclusions in the coupon details before applying.`,
    },
    {
      question: `How often are new ${name} coupons released?`,
      answer: `${name} releases new coupons weekly, especially during seasonal sales and special events.`,
    },
  ];

  const deals = [
    {
      name: "Trending Electronics",
      desc: "Mobiles, Laptops & Accessories",
      price: "₹29,999",
      oldPrice: "₹49,999",
      discount: "40%",
      icon: <FaBolt className="text-3xl md:text-4xl lg:text-5xl text-blue-600" />,
      color: "from-gray-100 to-blue-100",
    },
    {
      name: "Fashion Specials",
      desc: "New arrivals & top brands",
      price: "₹899",
      oldPrice: "₹1599",
      discount: "45%",
      icon: <FaTag className="text-3xl md:text-4xl lg:text-5xl text-pink-600" />,
      color: "from-gray-100 to-pink-100",
    },
  ];

  const coupons = [
    { name: "Amazon", discount: "Flat ₹200 OFF", code: "AMZ200" },
    { name: "Flipkart", discount: "10% Cashback", code: "FLIP10" },
    { name: "Myntra", discount: "Extra ₹150 OFF", code: "MYN150" },
    { name: "Ajio", discount: "₹300 OFF", code: "AJIO300" },
  ];

  return (
    <>
      {/* Smooth Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 to-gray-200 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-10 space-y-8 md:space-y-10 lg:space-y-14">
        {/* HERO SECTION */}
        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl lg:ml-20 lg:mr-20 lighting">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold text-gray-900 text-center mb-3 md:mb-4">
            Discover the Best Deals on{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <p className="text-gray-600 text-center text-base sm:text-lg md:text-xl mb-6 md:mb-8">
            Explore latest offers, verified coupons, and exclusive cashback.
          </p>

          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-lg text-base md:text-lg flex items-center gap-2 transition-colors duration-300">
              Start Shopping <GiShoppingCart />
            </button>
          </div>
        </div>

        {/* DEALS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 lg:ml-20 lg:mr-20">
          {deals.map((deal, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${deal.color} p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:scale-[1.02] md:hover:scale-105 transition duration-300`}
            >
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center sm:items-start">
                <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow flex-shrink-0">
                  {deal.icon}
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold">{deal.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-3">{deal.desc}</p>

                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 mb-3">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600">{deal.price}</p>
                    <p className="line-through text-gray-500 text-sm md:text-base">{deal.oldPrice}</p>
                  </div>

                  <span className="inline-block bg-blue-600 text-white font-bold px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
                    {deal.discount} OFF
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* COUPONS SECTION */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg md:shadow-xl lg:ml-20 lg:mr-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-4 md:mb-6">
            Exclusive Coupons
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {coupons.map((c, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 shadow hover:scale-[1.02] md:hover:scale-105 transition duration-300"
              >
                <h4 className="text-lg md:text-xl font-semibold mb-2">{c.name}</h4>
                <p className="text-base md:text-lg font-bold text-blue-600 mb-3 md:mb-4">{c.discount}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="bg-blue-600 text-white px-3 py-1.5 rounded font-mono text-xs md:text-sm w-full sm:w-auto text-center">
                    {c.code}
                  </div>

                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold w-full sm:w-auto transition-colors duration-300">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg md:shadow-xl lg:ml-20 lg:mr-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 md:mb-8">
            FAQs
          </h2>

          <div className="space-y-6 md:space-y-8">
            {faqItems.map((faq, i) => (
              <div key={i} className="pb-4 md:pb-6 border-b last:border-b-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT STORE SECTION */}
        <div className="max-w-7xl mx-auto lg:ml-20 lg:mr-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-extrabold text-gray-900 mb-4 md:mb-6 text-start">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {name || "the Store"}
            </span>
          </h2>

          <div className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl md:rounded-3xl shadow-lg border border-gray-200 p-6 md:p-8 lg:p-10 overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl md:hover:shadow-2xl">
            {/* Decorative Glow Effects */}
            <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-indigo-200 rounded-full blur-2xl md:blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 md:w-52 md:h-52 bg-purple-200 rounded-full blur-2xl md:blur-3xl opacity-40 animate-pulse"></div>

            <div className="relative space-y-4 md:space-y-6 z-10">
              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                <span className="font-semibold text-indigo-600">
                  {name || "the store"}
                </span>{" "}
                is one of the most popular online destinations for shoppers looking for quality products at great
                prices. Whether you're buying{" "}
                <span className="font-medium">electronics</span>,{" "}
                <span className="font-medium">fashion</span>, home appliances, or groceries,{" "}
                <span className="font-semibold text-purple-600">
                  {name || "the store"}
                </span>{" "}
                offers unbeatable deals and cashback opportunities to make your shopping experience more rewarding.
              </p>

              <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                Stay connected with{" "}
                <span className="font-semibold text-indigo-600">MyFairCoupons</span> to never miss the latest{" "}
                <span className="font-semibold text-purple-600">
                  {name || "the store"}
                </span>{" "}
                coupons, exclusive discounts, and seasonal offers. Our team ensures that every deal you see here is{" "}
                <span className="font-semibold text-green-600">100% verified</span> and up to date — so you can shop
                confidently and{" "}
                <span className="font-bold text-indigo-600">save big every time!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banners;