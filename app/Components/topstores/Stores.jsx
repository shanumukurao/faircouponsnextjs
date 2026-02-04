'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../../../public/assets/store.png"
import Image from "next/image"

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
 const route=useRouter();

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const data = [
    { id: "1", name: "Flipkart", logo: logo },
    { id: "2", name: "Amazon", logo: logo },
    { id: "3", name: "Myntra", logo: logo },
    { id: "4", name: "Ajio", logo: logo },
    { id: "5", name: "Meesho", logo: logo },
    { id: "6", name: "Snapdeal", logo: logo },
    { id: "7", name: "Tata Cliq", logo: logo },
    { id: "8", name: "Nykaa", logo: logo },
    { id: "9", name: "BigBasket", logo: logo },
    { id: "10", name: "Swiggy Instamart", logo: logo },
  ];

  const filteredStores = data.filter((store) => {
    const matchesSearch = store.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesLetter = selectedLetter
      ? store.name.startsWith(selectedLetter)
      : true;

    return matchesSearch && matchesLetter;
  });

  const handleStore = (store) => {
    const query = new URLSearchParams({
      name: store.name,
      logo: store.logo,
      rating: store.rating,
      active: store.active,
      paragraph: store.paragraph,
      discount: store.discount,
    }).toString();
    route.push(`/homestores/?${query.toString()}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Stores</h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search stores..."
          className="border px-4 py-2 rounded-lg w-full max-w-md shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* A–Z Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
         <button
          className="px-3 py-1 rounded-md text-sm bg-green-100 hover:bg-green-200"
          onClick={() => setSelectedLetter("")}
        >
          All
        </button>
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedLetter === letter
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedLetter(letter)}
          >
            {letter}
          </button>
        ))}
       
      </div>

      {/* Stores Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredStores.map((store) => (
          <div
            key={store.id}
            onClick={() => handleStore(store)}
            className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full mb-3 flex items-center justify-center">
             <Image src={logo} alt="logo"/>
            </div>
            <p className="text-lg font-semibold">{store.name}</p>
              {/* Stats */}
  <div className="flex gap-3 text-sm text-gray-600 mt-2">
    <p>Deals ({store.deals ?? 0})</p>
    <p>Coupons ({store.coupons ?? 0})</p>
    <p>Exclusive ({store.exclusive ?? 0})</p>
  </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredStores.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-gray-800">
            No stores found
          </h3>
          <p className="text-gray-500 mt-2">
            Try searching another name or removing filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Stores;