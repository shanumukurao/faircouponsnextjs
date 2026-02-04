`use client`;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

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
  ];

  const router = useRouter();

const handleCategory = (category) => {
  router.push(`/listofcategories/${category.storeName}`);
};

  return (
    <section className="py-4 sm:py-8 lg:py-16 px-4 sm:px-6 lg:px-8 min-w-4xl">
      {/* Header */}
      <nav className="flex gap-2 text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 px-4 sm:px-0 sm:ml-8 lg:ml-32">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-blue-600 font-medium">Categories</span>
      </nav>

      {/* Hero Banner */}
      <div className="text-start mb-6 sm:mb-8 lg:mb-12 p-4 sm:p-6 mx-4 sm:mx-8 lg:mx-32 rounded-lg sm:rounded-xl bg-gradient-to-tl from-blue-950 via-blue-800 to-blue-700">
        <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold drop-shadow-md">
          ALL CATEGORIES
        </h1>
        <p className="text-blue-100 text-sm sm:text-base mt-2 opacity-90">
          Browse through all available categories
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-blue-900 text-center">
              {category.storeName}
            </h2>

            {/* Store Count */}
            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center flex-grow">
              {category.stores}
            </p>

            {/* Button */}
            <button
              onClick={() => handleCategory(category)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm sm:text-base transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
              aria-label={`View ${category.storeName} stores`}
            >
              {category.Allstores}
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Spacing for Extra Large Screens */}
      <div className="hidden 2xl:block h-8"></div>
    </section>
  );
};

export default AllCategories;

// import React from "react";

// const AllCategories = () => {
//   const categories = [
//     {
//       title: "🍔 Food & Dining",
//       items: [
//         "Food Ordering",
//         "Grocery",
//         "Drinks & Beverages",
//         "Pizza",
//         "Restaurants",
//       ],
//     },
//     {
//       title: "👗 Fashion",
//       items: [
//         "Clothing",
//         "Footwear",
//         "Bags & Accessories",
//         "Watch & Sunglasses",
//         "Travel Accessories",
//       ],
//     },
//     {
//       title: "✈️ Travel",
//       items: [
//         "Flight",
//         "Hotel",
//         "International Flight",
//         "Railway Bookings",
//         "Tours & Activities",
//         "Cabs",
//         "Holiday Packages",
//         "Car Rentals",
//       ],
//     },
//     {
//       title: "💄 Personal Care & Beauty",
//       items: [
//         "Makeup & Cosmetics",
//         "Perfumes & Deos",
//         "Eyewear",
//         "Nutrition",
//         "Medicines & Health Check-Ups",
//         "Health Devices",
//         "Sexual Wellness",
//       ],
//     },
//     {
//       title: "📱 Mobiles & Tablets",
//       items: ["Mobile & Tablet Accessories", "Mobile", "Tablet"],
//     },
//     {
//       title: "💻 Computers, Laptops & Gaming",
//       items: ["Computer Accessories", "Laptops & Desktops", "Gaming", "Software"],
//     },
//     {
//       title: "Kids,Babies & Toys:",
//       items: ["Baby Products", "Apparel & Accessories", "Toys & Games", "School Essentials"],
//     },
//     {
//       title: "TV,Audio/Video & Movies:",
//       items: ["Televisions", "Cables & Accessories", "On Demand Content", "Movies & TV Shows"],
//     },
//   ];

//   return (
//     <section className="py-16 px-6">
//       {/* Header */}
//       <div className="text-start mb-12 p-4 ml-32 mr-32 rounded-lg bg-gradient-to-tl from-blue-950 via-blue-800 to-blue-700">
//         <h1 className="text-white text-3xl drop-shadow-md mb-2">
//           ALL CATEGORIES & SUB-CATEGORIES
//         </h1>
//       </div>

//       {/* Category Cards */}
//       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto bg-white/100 rounded-lg shadow-2xl p-2">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className=" rounded-2xl p-6 text-white transition-transform duration-300"
//           >
//             <h2 className="text-2xl font-bold mb-4 border-b border-white/30 pb-2 text-blue-950">
//               {category.title}
//             </h2>
//             <ul className="space-y-2">
//               {category.items.map((item, i) => (
//                 <li
//                   key={i}
//                   className="text-black/90 transition-colors duration-200"
//                 >
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AllCategories;
