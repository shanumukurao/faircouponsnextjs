'use client';

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1230] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* BRAND */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                alt="FairCoupons Logo"
                width={56}
                height={56}
                priority
              />
              {/* <h2 className="text-xl font-semibold text-white">
                <span className="text-red-600">Fair</span>
                <span className="text-yellow-500">Coupons</span>
              </h2> */}
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              FairCoupons keeps 500k+ promo codes verified across 200k stores.
              Helping marketers launch compliant, conversion-ready campaigns.
            </p>

            {/* STATS */}
            <div className="flex gap-8 pt-3">
              {[
                { value: "30k+", label: "Partners" },
                { value: "500k+", label: "Codes" },
                { value: "19%", label: "Avg lift" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-white font-semibold">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: "fab fa-twitter", label: "Twitter" },
                { icon: "fab fa-facebook", label: "Facebook" },
                { icon: "fab fa-instagram", label: "Instagram" },
                { icon: "fab fa-linkedin", label: "LinkedIn" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <i className={`${item.icon} text-white`} />
                </a>
              ))}
            </div>
          </div>

          {/* SHOPPERS */}
          <div>
            <h3 className="text-white font-semibold mb-4">FOR SHOPPERS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400">Today's coupons</Link></li>
              <li><Link href="/categories" className="hover:text-blue-400">Categories</Link></li>
              <li><Link href="/submit-coupon" className="hover:text-blue-400">Submit coupon</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-400">Blog & insights</Link></li>
            </ul>
          </div>

          {/* PARTNERS */}
          <div>
            <h3 className="text-white font-semibold mb-4">FOR PARTNERS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/partners" className="hover:text-blue-400">Partner with us</Link></li>
              <li><Link href="/performance" className="hover:text-blue-400">Performance suite</Link></li>
              <li><Link href="/agency" className="hover:text-blue-400">Agency solutions</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Request briefing</Link></li>
            </ul>
          </div>

          {/* FESTIVALS */}
          <div>
            <h3 className="text-white font-semibold mb-4">FESTIVALS</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/festivals/holi" className="hover:text-blue-400">Holi</Link></li>
              <li><Link href="/festivals/sankranti" className="hover:text-blue-400">Sankranti</Link></li>
              <li><Link href="/festivals/new-year" className="hover:text-blue-400">New Year</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="space-y-5">
            <span className="inline-block text-xs bg-white/10 text-white px-4 py-1 rounded-full">
              STAY IN THE LOOP
            </span>

            <h3 className="text-white font-semibold text-lg">
              Subscribe our newsletter of existing discounts
            </h3>

            <p className="text-sm text-gray-400">
              Get verified coupons, drops & performance insights.
            </p>

            <div className="flex items-center overflow-hidden rounded-xl border border-white/20 bg-white/10">
              <input
                aria-label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                className="w-full px-4 py-2 bg-transparent text-gray-200 outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center">
          <div className="flex justify-center flex-wrap gap-6 text-sm text-gray-400 mb-3">
            <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
            <Link href="/terms" className="hover:text-blue-400">Terms</Link>
            <Link href="/accessibility" className="hover:text-blue-400">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-blue-400">Sitemap</Link>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} FairCoupons. Built for better conversions.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
