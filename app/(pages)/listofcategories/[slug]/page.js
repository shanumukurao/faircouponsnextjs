'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { FaAngleRight } from "react-icons/fa";


const page = () => {
  const router = useRouter();
  const {slug} = useParams();

  const data = [
    {
      logo: "/assets/store.png",
      name: "Remini",
      coupons: "2 Coupons",
      deal: "Deal",
    },
    {
      logo: "/assets/1.png",
      name: "Canva",
      coupons: "2 Coupons",
      deal: "Deal",
    },
    {
      logo: "/assets/2.png",
      name: "Norton",
      coupons: "2 Coupons",
      deal: "Deal",
    },
    {
      logo: "/assets/4.png",
      name: "IObit",
      coupons: "2 Coupons",
      deal: "Deal",
    },
  ];

  const handleNavigate = (item) => {
  const params = new URLSearchParams({
    name: item.name,
    coupons: item.coupons,
    deal: item.deal,
    logo: item.logo,
  }).toString();

  router.push(`/categoriesstores?${params}`);
};


  return (
    <section className="p-6 max-w-5xl mx-auto">
  {/* Breadcrumb */}
  <nav className="flex flex-wrap items-center gap-2 text-gray-600 mb-6 text-sm">
    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
    <FaAngleRight />
    <span>{slug}</span>
  </nav>

  {/* Header */}
  <div className="rounded-xl p-4 bg-gradient-to-r from-blue-900 to-blue-600 mb-8 text-white shadow-md">
    <h1 className="text-xl sm:text-2xl font-semibold">{slug}</h1>
  </div>

  {/* Sort Section */}
  <div className="flex flex-wrap items-center gap-3 mb-6">
    <h1 className="font-medium">Sort by:</h1>
    <select className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
      <option>Descending</option>
      <option>Ascending</option>
    </select>
  </div>

  {/* Cards Grid */}
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {data.map((item, i) => (
      <div
        key={i}
        className="rounded-xl shadow-xl bg-white overflow-hidden transition transform hover:shadow-2xl hover:scale-105"
      >
        {/* Logo */}
        <div className="p-6 flex justify-center">
          <Image
            src={item.logo}
            alt={item.name}
            width={200}
            height={120}
            className="object-contain"
          />
        </div>

        <hr />

        {/* Coupons Ribbon */}
        <div className="relative">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-full text-sm font-medium">
            {item.coupons}
          </div>
        </div>

        {/* Store Name */}
        <div className="text-center text-lg font-medium py-4">
          {item.name}
        </div>

        {/* Bottom Button */}
        <button
          onClick={() => handleNavigate(item)}
          className="w-full bg-blue-600 text-white text-lg font-semibold py-3 rounded-b-xl hover:bg-blue-700 transition"
        >
          {item.deal}
        </button>
      </div>
    ))}
  </div>
</section>

  );
};

export default page;
