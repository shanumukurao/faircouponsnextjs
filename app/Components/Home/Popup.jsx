import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [currentStore, setCurrentStore] = useState(0);
  const [showTimer, setShowTimer] = useState(false);

  const storeOffers = [
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      offer: "Upto 70% OFF",
      description: "On electronics, fashion & more!",
      couponCode: "AMAZON50",
      color: "from-orange-400 to-orange-600",
      textColor: "text-orange-600"
    },
    {
      name: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flipkart_logo.png",
      offer: "Upto 60% OFF",
      description: "Exclusive deals on mobiles & appliances!",
      couponCode: "FLIPKART30",
      color: "from-blue-400 to-blue-600",
      textColor: "text-blue-600"
    },
    {
      name: "Myntra",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Myntra_Logo.png",
      offer: "Flat 50% OFF",
      description: "On top fashion brands!",
      couponCode: "MYNTRA25",
      color: "from-red-400 to-pink-600",
      textColor: "text-pink-600"
    },
    {
      name: "Ajio",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ajio_logo.png",
      offer: "Upto 60% OFF",
      description: "Trendy fashion starting at ₹499!",
      couponCode: "AJIO40",
      color: "from-purple-400 to-purple-600",
      textColor: "text-purple-600"
    },
    {
      name: "Croma",
      logo: "https://via.placeholder.com/100x40/DC2626/FFFFFF?text=CROMA",
      offer: "Upto 35% OFF",
      description: "On electronics & appliances!",
      couponCode: "CROMA20",
      color: "from-red-500 to-red-700",
      textColor: "text-red-600"
    }
  ];

  useEffect(() => {
    let timeoutId;

    const showNextPopup = () => {
      setCurrentStore((prev) => (prev + 1) % storeOffers.length);
      setIsOpen(true);
      setAnimateOut(false);
      setShowTimer(false);
    };

    // Show first popup after 3 seconds
    timeoutId = setTimeout(() => {
      showNextPopup();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setIsOpen(false);
      setShowTimer(true);
      
      // Show next popup after 5 seconds when closed
      setTimeout(() => {
        setCurrentStore((prev) => (prev + 1) % storeOffers.length);
        setIsOpen(true);
        setAnimateOut(false);
        setShowTimer(false);
      }, 10000);
    }, 500);
  };

  const copyCouponCode = () => {
    navigator.clipboard.writeText(storeOffers[currentStore].couponCode);
    // You can add a toast notification here
    alert(`Coupon code ${storeOffers[currentStore].couponCode} copied!`);
  };

  const store = storeOffers[currentStore];

  return (
    <>
      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <div
            className={`
              bg-white rounded-xl shadow-2xl border border-gray-200 w-80
              transform transition-all duration-500 ease-out
              ${animateOut ? "translate-y-full opacity-0 scale-95" : "translate-y-0 opacity-100 scale-100"}
              hover:shadow-xl hover:scale-105 transition-all duration-300
            `}
          >
            {/* Header with Store Logo and Close Button */}
            <div className={`bg-gradient-to-r ${store.color} rounded-t-xl p-4 relative`}>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white font-bold text-sm transition-colors"
              >
                ×
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <img
                    src={store.logo}
                    alt={`${store.name} Logo`}
                    className="w-8 h-8 object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <h2 className="text-white font-bold text-lg">{store.name}</h2>
                  <p className="text-white/90 text-sm">Special Offer!</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Offer Details */}
              <div className="text-center mb-4">
                <div className={`text-2xl font-bold ${store.textColor} mb-1`}>
                  {store.offer}
                </div>
                <p className="text-gray-600 text-sm">
                  {store.description}
                </p>
              </div>

              {/* Coupon Code */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-500 mb-1">Use Code:</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-mono font-bold text-gray-800">
                      {store.couponCode}
                    </span>
                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                      Active
                    </span>
                  </div>
                  <button
                    onClick={copyCouponCode}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Shop Now on {store.name}
              </button>

              {/* Footer */}
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <span>Limited time offer</span>
                <span>🔥 {currentStore + 1}/{storeOffers.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;