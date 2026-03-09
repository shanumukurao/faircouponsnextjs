'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { MdPeopleAlt } from "react-icons/md";


const FeaturedDeals = () => {
    const [popup, setPopup] = useState(false);
      const [selectedCoupon, setSelectedCoupon] = useState(null);
      const [hidden, setHidden] = useState(true);
      const [copied, setCopied] = useState(false);
      const router = useRouter();
    const handleHidden = () => {
    setHidden(!hidden);
  };
  const handlePopup = (couponCode) => {
    setSelectedCoupon(couponCode);
    setPopup(true);
    setCopied(true);
   navigator.clipboard.writeText(couponCode);
  };
  return (
    <>
     <section className="py-16 bg-gray-50">
               <div className="container mx-auto px-4">
                 <div className="flex justify-between items-center mb-10">
                   <div>
                     <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                       Today's Featured Deals
                     </h2>
                     <p className="text-gray-600">
                       Handpicked offers with the highest savings
                     </p>
                   </div>
                   <button onClick={()=>router.push("/dealsview")} className="hidden md:flex items-center text-sky-600 hover:text-sky-700 font-medium cursor-pointer ">
                     View all deals
                     <i className="fas fa-arrow-right ml-2"></i>
                   </button>
                 </div>
   
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {/* Deal Card 1 */}
                   <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                     <div className="p-5">
                       <div className="flex justify-between items-start mb-4">
                         <div className="flex items-center space-x-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                             <i className="fas fa-store text-white"></i>
                           </div>
                           <div>
                             <h3 className="font-bold text-gray-900">TechWorld</h3>
                             <p className="text-sm text-gray-500">
                               Electronics Store
                             </p>
                           </div>
                         </div>
                         <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-bold">
                           40% OFF
                         </span>
                       </div>
   
                       <h4 className="font-semibold text-gray-900 text-lg mb-2">
                         Extra 40% off select laptops & tablets
                       </h4>
                       <p className="text-gray-600 text-sm mb-4">
                         Limited time offer on premium brands
                       </p>
   
                       <div className="bg-gray-50 rounded-xl p-4 mb-4">
                         <div className="flex justify-between items-center">
                           <div>
                             <p className="text-gray-500 text-sm">Use code</p>
                             <p
                               className="font-mono font-bold text-lg cursor-pointer"
                               onClick={handleHidden}
                             >
                               {hidden ? "XXXXXX" : "Flip2130"}
                             </p>
                           </div>
                           <button
                             onClick={() => handlePopup("Flip2130")}
                             className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                           >
                             Show Code
                           </button>
                         </div>
                       </div>
   
                       <div className="flex items-center justify-between text-sm text-gray-500">
                         <div className="flex items-center">
                           <MdPeopleAlt />
                           <span>Total View</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-clock mr-1"></i>
                           <span>Last Used</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-check-circle mr-1 text-green-500"></i>
                           <span>Verified</span>
                         </div>
                       </div>
                     </div>
                   </div>
   
                   {/* Deal Card 2 */}
                   <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                     <div className="p-5">
                       <div className="flex justify-between items-start mb-4">
                         <div className="flex items-center space-x-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                             <i className="fas fa-shopping-bag text-white"></i>
                           </div>
                           <div>
                             <h3 className="font-bold text-gray-900">
                               FashionHub
                             </h3>
                             <p className="text-sm text-gray-500">
                               Clothing Store
                             </p>
                           </div>
                         </div>
                         <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                           FREE SHIP
                         </span>
                       </div>
                       <h4 className="font-semibold text-gray-900 text-lg mb-2">
                         Free shipping on all orders $50+
                       </h4>
                       <p className="text-gray-600 text-sm mb-4">
                         No code needed. Applies automatically.
                       </p>
   
                       <div className="bg-gray-50 rounded-xl p-4 mb-4">
                         <div className="flex justify-between items-center">
                           <div>
                             <p className="text-gray-500 text-sm">Use code</p>
                             <p
                               className="font-mono font-bold text-lg cursor-pointer"
                               onClick={handleHidden}
                             >
                               {hidden ? "XXXXXX" : "World123"}
                             </p>
                           </div>
                           <button
                             onClick={() => handlePopup("World123")}
                             className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                           >
                             Show Code
                           </button>
                         </div>
                       </div>
   
                       <div className="flex items-center justify-between text-sm text-gray-500">
                         <div className="flex items-center">
                           <MdPeopleAlt />
                           <span>Total View</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-clock mr-1"></i>
                           <span>Last Used</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-check-circle mr-1 text-green-500"></i>
                           <span>Verified</span>
                         </div>
                       </div>
                     </div>
                   </div>
   
                   {/* Deal Card 3 */}
                   <div className="deal-card bg-white rounded-2xl overflow-hidden shadow-card border border-gray-200">
                     <div className="p-5">
                       <div className="flex justify-between items-start mb-4">
                         <div className="flex items-center space-x-3">
                           <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                             <i className="fas fa-utensils text-white"></i>
                           </div>
                           <div>
                             <h3 className="font-bold text-gray-900">
                               FoodieDelight
                             </h3>
                             <p className="text-sm text-gray-500">Restaurant</p>
                           </div>
                         </div>
                         <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                           25% OFF
                         </span>
                       </div>
                       <h4 className="font-semibold text-gray-900 text-lg mb-2">
                         25% off your first order + free delivery
                       </h4>
                       <p className="text-gray-600 text-sm mb-4">
                         New customers only. Min. order $25.
                       </p>
   
                       <div className="bg-gray-50 rounded-xl p-4 mb-4">
                         <div className="flex justify-between items-center">
                           <div>
                             <p className="text-gray-500 text-sm">Use code</p>
                             <p
                               className="font-mono font-bold text-lg cursor-pointer"
                               onClick={handleHidden}
                             >
                               {hidden ? "XXXXXX" : "Amaz120"}
                             </p>
                           </div>
                           <button
                             onClick={() => handlePopup("Amaz120")}
                             className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors pulse-soft"
                           >
                             Show Code
                           </button>
                         </div>
                       </div>
   
                      <div className="flex items-center justify-between text-sm text-gray-500">
                         <div className="flex items-center">
                           <MdPeopleAlt />
                           <span>Total View</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-clock mr-1"></i>
                           <span>Last Used</span>
                         </div>
                         <div className="flex items-center">
                           <i className="far fa-check-circle mr-1 text-green-500"></i>
                           <span>Verified</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
   
                 <div className="text-center mt-10 md:hidden">
                   <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-medium transition-colors">
                     View all deals
                   </button>
                 </div>
               </div>
             </section>

 {popup && selectedCoupon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl w-[90%] max-w-lg p-8 animate-fadeIn">
            <button
              onClick={() => setPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-2xl font-bold"
            >
              ×
            </button>
        {selectedCoupon && (
<div className="bg-green-100 text-green-800 border border-green-300 px-3 py-1.5 rounded-lg text-center mb-4 font-medium animate-pulse shadow-sm text-sm">
          ✅ Coupon code copied successfully!
        </div>
        )}
            

            <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl border border-blue-200 shadow-inner mb-6">
              <span className="text-xl font-extrabold text-blue-700 tracking-wider">
                {selectedCoupon}
              </span>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
         <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition-all duration-300 transform hover:scale-[1.02]">
          🛍️ Open Store
        </button>

                   <div className="mt-6 flex flex-col md:flex-row justify-between gap-4">
          
          {/* Feedback Section */}
          <div className="flex-1 bg-white/70 rounded-lg shadow-inner border border-gray-200 py-3 px-3 text-center">
            <h3 className="text-gray-800 font-semibold mb-2 text-sm">Did this code work?</h3>
            <div className="flex justify-center gap-2">
              <button className="bg-green-100 text-green-700 px-4 py-1.5 rounded-lg hover:bg-green-200 font-medium text-sm transition-all duration-300 shadow-sm">
                👍 Worked
              </button>
              <button className="bg-red-100 text-red-700 px-4 py-1.5 rounded-lg hover:bg-red-200 font-medium text-sm transition-all duration-300 shadow-sm">
                👎 Didn’t
              </button>
            </div>
          </div>

          {/* Save Store Section */}
          <div className="flex-1 bg-white/70 rounded-lg shadow-inner border border-gray-200 py-3 px-3 text-center">
            <h3 className="text-gray-800 font-semibold mb-2 text-sm">Remainder</h3>
            <button className="bg-blue-100 text-blue-700 px-5 py-1.5 rounded-lg hover:bg-blue-200 font-medium text-sm transition-all duration-300 shadow-sm">
              💾 Save Store
            </button>
          </div>
        </div>
          </div>
        </div>
      )}

    </>
  


  )
}

export default FeaturedDeals