'use client';

import React from "react";

const FestivalsCoupons = () => {
  const festivals = [
    { 
      festival: "Diwali Special", 
      offer: "Get up to 50% off on all products",
      color: "text-yellow-700",
      bgColor: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-amber-50",
      borderColor: "border-yellow-200",
      icon: "🪔",
      gradient: "from-yellow-500 to-orange-500",
      badge: "50% OFF"
    },
    { 
      festival: "Christmas Sale", 
      offer: "Flat 30% off on selected items",
      color: "text-red-700",
      bgColor: "bg-gradient-to-br from-red-50 via-pink-100 to-rose-50",
      borderColor: "border-red-200",
      icon: "🎄",
      gradient: "from-red-500 to-pink-600",
      badge: "30% OFF"
    },
    { 
      festival: "New Year Bonanza", 
      offer: "Buy 1 Get 1 Free on accessories",
      color: "text-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 via-cyan-100 to-sky-50",
      borderColor: "border-blue-200",
      icon: "🎆",
      gradient: "from-blue-500 to-cyan-600",
      badge: "B1G1"
    },
    { 
      festival: "Holi Festival Deal", 
      offer: "25% off on clothing and apparel",
      color: "text-purple-700",
      bgColor: "bg-gradient-to-br from-purple-50 via-fuchsia-100 to-violet-50",
      borderColor: "border-purple-200",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-600",
      badge: "25% OFF"
    },
    { 
      festival: "Eid Mubarak", 
      offer: "Special discounts on ethnic wear",
      color: "text-green-700",
      bgColor: "bg-gradient-to-br from-green-50 via-emerald-100 to-teal-50",
      borderColor: "border-green-200",
      icon: "🌙",
      gradient: "from-green-500 to-emerald-600",
      badge: "40% OFF"
    },
  ];

  return (
    <div className="relative overflow-hidden container mx-auto my-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
      {/* Background Decorative Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl shadow-lg sm:shadow-xl lg:shadow-2xl border border-white/60">
        
        {/* Header Section */}
        <div className="px-4 py-6 sm:p-6 md:p-7 lg:p-8">
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center relative">
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
            
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 bg-gradient-to-r from-orange-100 to-pink-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
              <span className="text-2xl sm:text-3xl md:text-4xl animate-pulse">🎊</span>
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Festival Offers
              </h2>
              <span className="text-2xl sm:text-3xl md:text-4xl animate-pulse">🎊</span>
            </div>
            
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
              Exclusive deals for every celebration. Limited time offers!
            </p>
            
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm rounded-full animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              LIVE OFFERS
            </div>
          </div>

          {/* Coupons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {festivals.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} ${item.borderColor} relative group p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 hover:border-opacity-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden`}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <div className={`absolute top-3 right-3 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                  {item.badge}
                </div>
                
                {/* Icon Circle */}
                <div className={`mb-4 sm:mb-5 w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-3xl sm:text-4xl shadow-lg`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className={`font-bold text-base sm:text-lg md:text-xl ${item.color} mb-2 sm:mb-3`}>
                    {item.festival}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
                    {item.offer}
                  </p>
                  
                  {/* Action Button */}
                  <button className={`w-full bg-gradient-to-r ${item.gradient} text-white font-semibold py-2 sm:py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 active:scale-95 text-sm sm:text-base`}>
                    Grab Offer
                  </button>
                </div>
                
                {/* Corner Decoration */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gray-300 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gray-300 rounded-br-xl"></div>
              </div>
            ))}
          </div>

          {/* Promo Banner */}
          <div className="relative mb-8 sm:mb-10 md:mb-12 overflow-hidden rounded-2xl sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-90"></div>
            
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-20" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='4' fill='%23ffffff' fill-opacity='0.6'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%23ffffff' fill-opacity='0.4'/%3E%3Ccircle cx='80' cy='80' r='3' fill='%23ffffff' fill-opacity='0.4'/%3E%3Ccircle cx='80' cy='20' r='2' fill='%23ffffff' fill-opacity='0.4'/%3E%3Ccircle cx='20' cy='80' r='2' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                   backgroundSize: '50px 50px'
                 }}>
            </div>
            
            <div className="relative p-6 sm:p-8 md:p-10 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce">🎁</div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    EXTRA 10% OFF
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4">
                    Use promo code for additional discount
                  </p>
                  <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                    <code className="text-white font-mono font-bold text-lg sm:text-xl md:text-2xl tracking-wider">
                      FESTIVE2024
                    </code>
                    <button className="bg-white text-orange-600 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base">
                      Copy
                    </button>
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl animate-bounce" style={{animationDelay: '0.2s'}}>🎁</div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95 text-base sm:text-lg shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span>🎯</span>
                  View All Festival Deals
                  <span>🎯</span>
                </span>
              </button>
              
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 active:scale-95 text-base sm:text-lg shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <span>📱</span>
                  Get App Exclusive Offers
                  <span>📱</span>
                </span>
              </button>
            </div>
            
            {/* Info Text */}
            <p className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm md:text-base">
              ⏰ Offers valid until December 31, 2024. 
              <span className="block sm:inline"> 🔄 New deals added weekly!</span>
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                100% Verified Offers
              </span>
              <span className="flex items-center gap-2 text-blue-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Instant Coupon Codes
              </span>
              <span className="flex items-center gap-2 text-purple-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                No Hidden Charges
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideFromRight {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .slideFromRight {
          animation: slideFromRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FestivalsCoupons;