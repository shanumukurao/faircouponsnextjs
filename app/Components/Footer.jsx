'use client';

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1230] text-gray-300 pt-16 pb-12">
      <div className="container mx-auto px-6 lg:px-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand + Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logo}
                alt="FairCoupons Logo"
                className="w-14 h-14"
              />
              <h2 className="text-xl font-semibold text-white">
                <span className="text-red-600">Fair</span>
                <span className="text-yellow-500">Coupons</span>
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              FairCoupons keeps 500k+ promo codes verified across 200k stores.
              We help marketers launch compliant, conversion-ready campaigns
              without the guesswork.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-6 text-sm">
              {[
                { value: "30k+", label: "Partners live" },
                { value: "500k+", label: "Codes verified" },
                { value: "19%", label: "Average lift" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-white font-semibold">{stat.value}</p>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: "fab fa-twitter", href: "#" },
                { icon: "fab fa-facebook", href: "#" },
                { icon: "fab fa-instagram", href: "#" },
                { icon: "fab fa-linkedin", href: "#" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  aria-label="social-link"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition"
                >
                  <i className={`${item.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* For Shoppers */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              FOR SHOPPERS
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/" className="hover:text-blue-400">Today's coupons</Link></li>
              <li><Link href="/categories" className="hover:text-blue-400">Categories</Link></li>
              <li><Link href="/submit-coupon" className="hover:text-blue-400">Submit a coupon</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-400">Blog & insights</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              FOR PARTNERS
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/partners" className="hover:text-blue-400">Partner with us</Link></li>
              <li><Link href="/performance" className="hover:text-blue-400">Performance suite</Link></li>
              <li><Link href="/agency" className="hover:text-blue-400">Agency solutions</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Request a briefing</Link></li>
            </ul>
          </div>

          {/* Festivals */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              FESTIVALS
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/festivals/holi" className="hover:text-blue-400">Holi</Link></li>
              <li><Link href="/festivals/sankranti" className="hover:text-blue-400">Sankranti</Link></li>
              <li><Link href="/festivals/new-year" className="hover:text-blue-400">New Year</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <span className="bg-white/10 text-white text-xs px-4 py-1 rounded-full mb-3 inline-block">
              STAY IN THE LOOP
            </span>

            <h3 className="text-white text-xl font-semibold mb-3 leading-snug">
              Subscribe our newsletter of existing discounts
            </h3>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Join thousands of marketers receiving curated coupon drops,
              campaign insights, and freshness alerts.
            </p>

            <div className="flex bg-white/10 rounded-xl overflow-hidden border border-white/20">
              <input
                type="email"
                placeholder="Work email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full bg-transparent text-gray-200 outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 text-center">
          <div className="flex justify-center flex-wrap gap-6 mb-4 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-blue-400">Privacy policy</Link>
            <Link href="/terms" className="hover:text-blue-400">Terms of service</Link>
            <Link href="/accessibility" className="hover:text-blue-400">Accessibility</Link>
            <Link href="/sitemap" className="hover:text-blue-400">Sitemap</Link>
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FairCoupons. Built for marketers who expect better conversions.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
