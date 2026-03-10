'use client'

// pages/index.js (or components/HomePage.js)
import { act, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import coupon from "../../../public/assets/4.png";
import DealsCoupon from "./DealsCoupons";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "../Css/Home.module.css";
import FaqSection from "../../Components/Home/FaqSection"
import TrendingCategories from "../../Components/Home/TrendingCategories"
import FeaturedDeals from "../../Components/Home/FeaturedDeals"


export default function Home() {
  
  useEffect(() => {
    // Copy code buttons functionality
    const copyButtons = document.querySelectorAll("button");
    copyButtons.forEach((button) => {
      if (button.textContent.includes("Copy Code")) {
        button.addEventListener("click", function () {
          const codeElement =
            this.closest(".bg-gray-50").querySelector(".font-mono");
          const code = codeElement.textContent;

          // Create a temporary textarea to copy from
          const textarea = document.createElement("textarea");
          textarea.value = code;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);

          // Visual feedback
          const originalText = this.textContent;
          this.textContent = "Copied!";
          this.classList.remove("bg-sky-500");
          this.classList.add("bg-green-500");

          setTimeout(() => {
            this.textContent = originalText;
            this.classList.remove("bg-green-500");
            this.classList.add("bg-sky-500");
          }, 2000);
        });
      }
    });

    // Add floating animation to cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".deal-card, .category-card").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(card);
    });
  }, []);

 

  const [selectedCategory, setSelectedCategory] = useState("Fashion");

  const router=useRouter();

  const handleStore = (store) => {
    const params=new URLSearchParams({
      name:store.name,
      logo:store.logo,
      rewards:store.rewards,
      rating:store.rating
    })
    router.push(`/homestores/${encodeURIComponent(store.name)}?${params.toString()}`);
  };

  const handleBanners = () => {
    router.push("/banners");
  };
  const [showPopup, setShowPopup] = useState(false);

  const handleCashback = (item) => {
  const params = new URLSearchParams({
    heading: item.heading,
    logo: item.logo,
    cashback: item.cashback,
    name: item.name,
  });

  router.push(`/cashback/${encodeURIComponent(item.name)}?${params.toString()}`);
};


  const [popup, setPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [copied, setCopied] = useState(false);

  const handlePopup = (couponCode) => {
    setSelectedCoupon(couponCode);
    setPopup(true);
    setCopied(true);
   navigator.clipboard.writeText(couponCode);
  };

  // Toggle when clicking coupon text (optional)
  const handleHidden = () => {
    setHidden(!hidden);
  };

  const BannerOffers=()=>{
    router.push('/banners');
  }

  const [code,setCode]=useState(null);
  const handleCode=(coupon)=>{
    navigator.clipboard.writeText(coupon.code)
    setCode(coupon.id);
  }

  const Offers=[
        { id:1,store: "Amazon", code: "AMZ15", offer: "15% off Fashion" },
        { id:2,store: "Flipkart", code: "FLIP10", offer: "Extra 10% off Electronics" },
        { id:3,store: "Myntra", code: "STYLE20", offer: "Flat 20% off Clothing" },
        { id:4,store: "Ajio", code: "AJIO25", offer: "25% off on Shoes" },
        { id:5,store: "Nykaa", code: "BEAUTY30", offer: "30% off Beauty Products" },
  ]

  const [dealsItem,setDealsItem]=useState(null);
  
  const handleDeals=(item)=>{
    setShowPopup(true);
    setDealsItem(item);
  }
  console.log(dealsItem,"deals item here");

  const handleCopied = (code) => {
  navigator.clipboard.writeText(code);
  setOffers(!offers);
  
};

const[offers,setOffers]=useState(null);


const collection = [
  {
    id: 1,
    update: "Updated Today",
    title: "Trending Winter Offers",
    paragraph:
      "Discover top-performing winter deals curated from thousands of partner stores. Optimized daily for fresh, high-intent shopper engagement.",
  },
  {
    id: 2,
    update: "Updated 2 hours ago",
    title: "New User Exclusives",
    paragraph:
      "Handpicked offers for first-time shoppers. Boost acquisition with codes proven to drive higher conversion rates.",
  },
  {
    id: 3,
    update: "Updated Recently",
    title: "Holiday Campaign Boosters",
    paragraph:
      "Seasonal promotions backed by real-time performance signals. Ideal for festive sales, flash drops, and brand events.",
  },
  {
    id: 4,
    update: "Updated Today",
    title: "High-Volume Store Picks",
    paragraph:
      "A collection of best-selling offers from top-tier merchants. Built for teams focused on scale and repeat conversions.",
  },
];


  return (
    <>
      <Helmet>
        <title>Harbor — Deals, Reimagined</title>
        <meta
          name="description"
          content="Discover verified coupons, cashback offers, and exclusive deals from 30,000+ stores."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div
        className="min-h-screen bg-gray-50 text-gray-800"
        style={{
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }} 
      >
        <main>

 {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-sky-600 via-purple-600 to-fuchsia-500 py-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-ping"></div>
            </div>

            {/* MAIN CONTENT */}
            <div className="container mx-auto px-6 relative z-10">
              <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* LEFT SIDE */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Trusted by 2M+ smart shoppers
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                    Unlock{" "}
                    <span className="text-yellow-300">Exclusive Deals</span>{" "}
                    <br />& Save{" "}
                    <span className="text-pink-300">More Every Day</span>
                  </h1>

                  <p className="text-lg text-gray-100 mb-8 max-w-xl mx-auto lg:mx-0">
                    Find verified coupons, cashback offers, and trending
                    discounts from over{" "}
                    <span className="font-semibold text-white">
                      30,000+ stores
                    </span>
                    . Shop smarter, save faster!
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button onClick={()=>router.push('/deals')} className="bg-white text-sky-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold flex items-center justify-center shadow-md transition-all hover:scale-105">
                      <i className="fas fa-fire mr-2 text-lg text-yellow-500"></i>
                      Explore Top Deals
                    </button>
                   <a 
  href="https://www.youtube.com/watch?v=5oH9Nr3bKfw" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-transparent border border-white/70 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center hover:bg-white/10 transition-all"
>
  <i className="fas fa-play-circle mr-2"></i>
  Watch Demo
</a>

                  </div>

                  {/* STATS */}
                  <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-8 text-white/90">
                    <div>
                      <p className="text-3xl font-bold text-white">500K+</p>
                      <p className="text-sm">Active Coupons</p>
                    </div>
                    <div className="h-12 w-px bg-white/40"></div>
                    <div>
                      <p className="text-3xl font-bold text-white">30K+</p>
                      <p className="text-sm">Partner Stores</p>
                    </div>
                    <div className="h-12 w-px bg-white/40"></div>
                    <div>
                      <p className="text-3xl font-bold text-white">2M+</p>
                      <p className="text-sm">Happy Shoppers</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE CARD */}
                <div className="lg:w-1/2 relative">
                  {/* Main Coupon Card */}
                  <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto transform hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
                          <i className="fas fa-gift text-white text-2xl"></i>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            Limited Time Offer
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Extra 20% off on Electronics
                          </p>
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs rounded-full font-semibold">
                        HOT
                      </span>
                    </div>

                    <div className="bg-gray-100 rounded-xl p-5 mb-5 flex justify-between items-center">
                      <div>
                        <p className="text-gray-500 text-sm">Use code</p>
                        <p className="font-mono text-xl font-bold text-gray-800">
                          SAVE20
                        </p>
                      </div>
                      <button  onClick={() => handleCopied("SAVE20")} className="bg-sky-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-sky-600 transition-all">
                        {offers ? "Copied" : "Copy"}
                      </button>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm">
                      <i className="far fa-clock mr-1"></i> Expires in
                      <span className="font-semibold ml-1">1 day</span>
                      <span className="mx-2">•</span>
                      <i className="far fa-check-circle mr-1 text-green-500"></i>{" "}
                      Verified just now
                    </div>
                  </div>

                  {/* Floating Mini Cards */}
                  <div className="absolute -top-8 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-3 animate-bounce">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-wallet text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Cashback</p>
                      <p className="text-xs text-gray-500">Up to 10% back</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center space-x-3 animate-float">
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-sky-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-truck-fast text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Free Shipping</p>
                      <p className="text-xs text-gray-500">On all orders</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ADDITIONAL FEATURED COUPONS SECTION */}
   <div className="relative w-full overflow-hidden py-16">
  <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10 drop-shadow-lg">
    🔥 Featured Coupons & Hot Offers
  </h2>

  <div className="relative w-full overflow-hidden">
    {/* Auto-scroll container */}
    <div className="flex gap-8 animate-scroll px-6">
    { Offers.map((coupon) => (
        <div
          key={coupon.id}
          className="bg-white/95 backdrop-blur-md border border-gray-200 min-w-[260px] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex-shrink-0 relative overflow-hidden"
        >
          {/* Decorative gradient blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-transparent opacity-40"></div>

          {/* Store name & offer */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{coupon.store}</h3>
            <p className="text-gray-500 mb-4 text-sm">{coupon.offer}</p>

            {/* Coupon code box */}
            <div className="flex justify-between items-center bg-gray-100 border border-dashed border-gray-300 px-4 py-2 rounded-xl shadow-inner">
              <span className="font-mono font-semibold text-gray-900">{coupon.code}</span>
              <button
              onClick={()=>handleCode(coupon.code)}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm"
              >
                {code ? "copied!" : "Copy Code"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Scroll Animation */}
  <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      display: flex;
      width: max-content;
      animation: scroll 25s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused; /* pause on hover */
    }
  `}</style>
</div>


              {/* TRUST BADGES */}
              <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <i className="fas fa-lock text-yellow-300"></i> Secure
                  Payments
                </div>

                <div className="flex items-center gap-2">
                  <i className="fas fa-headset text-pink-300"></i> 24/7 Support
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-award text-blue-300"></i> Verified
                  Sellers
                </div>
              </div>
            </div>
          </section>

  <section className="container relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-6 px-4 sm:py-8 sm:px-6 lg:py-10 lg:px-8 rounded-2xl shadow-2xl my-4 max-w-7xl mx-auto border border-white/10">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-pink-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-2 left-2 w-16 h-16 bg-yellow-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-2 right-2 w-20 h-20 bg-blue-300/20 rounded-full blur-xl"></div>

      {/* Snowfall effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="relative">
        {/* Main flex container - horizontal on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
          
          {/* Left side - Brand icon + year */}
          <div className="flex lg:flex-col items-center gap-3 lg:gap-2 lg:pr-4 lg:border-r border-white/20">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-2xl rotate-12 flex items-center justify-center shadow-xl">
              <span className="text-2xl lg:text-3xl font-black text-white transform -rotate-12">🎊</span>
            </div>
            <div className="text-center">
              <span className="text-white/60 text-xs font-medium">WELCOME</span>
              <div className="text-white font-bold text-sm lg:text-base">2026</div>
            </div>
          </div>

          {/* Center - Main content (compact) */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-2 border border-white/30">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-semibold tracking-wider">FLASH SALE · 24H LEFT</span>
            </div>

            <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
              NEW YEAR,
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent text-3xl sm:text-4xl lg:text-5xl">
                NEW PRICES
              </span>
            </h2>

            <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
              <span className="text-4xl sm:text-5xl font-black text-white">70%</span>
              <span className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wider">off<br />sitewide</span>
            </div>
          </div>

          {/* Right side - CTA + badge */}
          <div className="flex flex-row lg:flex-col items-center gap-3 lg:gap-2 lg:pl-4 lg:border-l border-white/20">
            <button className="bg-gradient-to-r from-yellow-300 to-orange-400 hover:from-yellow-400 hover:to-orange-500 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transform hover:scale-105 transition-all duration-300 shadow-lg whitespace-nowrap">
              🚀 SHOP NOW
            </button>
            <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
              <span className="text-white text-xs font-mono">use code</span>
              <span className="text-yellow-300 font-mono font-bold text-sm ml-1">NY2026</span>
            </div>
          </div>
        </div>

        {/* Bottom strip - compact features grid */}
        <div className="mt-5 pt-3 border-t border-white/20 grid grid-cols-3 gap-2 text-center text-xs text-white/80">
          <div className="flex items-center justify-center gap-1">
            <span className="text-green-400 text-base">✓</span>
            <span className="hidden sm:inline">Free shipping</span>
            <span className="sm:hidden">Free ship</span>
          </div>
          <div className="flex items-center justify-center gap-1 border-x border-white/20">
            <span className="text-blue-400 text-base">↺</span>
            <span className="hidden sm:inline">30-day returns</span>
            <span className="sm:hidden">Returns</span>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-purple-400 text-base">⭐</span>
            <span className="hidden sm:inline">Price match</span>
            <span className="sm:hidden">Lowest</span>
          </div>
        </div>

        {/* Tiny "limited stock" indicator */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
          🔥 only few left
        </div>
      </div>
    </section>

{/* collections */}
     <section className="container max-w-7xl mx-auto w-full py-16 bg-gray-50">
  <div className="px-6 slideFromBottom">

    {/* Main Heading */}
    <h1 className="fadeUp text-2xl w-full text-blue-700 mb-8 bg-blue-100 inline-block px-5 py-2 rounded-lg shadow-sm">
      Curated Collections
    </h1>

    {/* Sub Text */}
    <div className="fadeUp max-w-3xl mb-14 mx-auto text-center flex flex-col items-center">
      <h2 className="font-serif text-2xl font-semibold text-gray-900 leading-snug">
        Deliver campaigns that feel bespoke, not recycled.
      </h2>
      <p className="text-gray-600 mt-3 text-lg leading-relaxed">
        Pair your brand goals with collections that refresh daily and are backed
        by trust signals shoppers can see.
      </p>
    </div>

    {/* 2-Column Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT SIDE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 fadeUp">
        {collection.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm bg-blue-100 inline-block px-3 py-1 rounded-md font-medium text-blue-700 mb-3">
              {item.update}
            </span>

            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {item.paragraph}
            </p>

            <a
              href="#"
              className="mt-4 inline-flex items-center text-blue-600 font-medium group"
            >
              Explore
              <FaLongArrowAltRight className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div className="fadeUp flex flex-col gap-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-1">
            Why teams choose FairCoupons
          </h2>
          <p className="text-gray-600">
            Powerful features trusted by global brands.
          </p>
        </div>

        <div className="space-y-5">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900">
              Multi-layer validation
            </h3>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              Human QA, automated tests, and partner approvals keep codes reliable.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900">
              Context-aware targeting
            </h3>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              Segment by channel, region, or lifecycle stage with one click.
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900">
              Compliance guardrails
            </h3>
            <p className="text-sm text-gray-700 mt-1 leading-relaxed">
              Policy checks and expiration sweeps happen all day, every day.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <p className="text-gray-700 text-sm">
          Fail-safe mode removes broken codes instantly.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold hover:underline text-lg"
        >
          See how stores perform →
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  {`
    @keyframes fladeUp {
             from {
              transform:translateY(100px);
              opacity:0;
            }
            to{
             transform:translateY(0);
             opacity:1;
            }
          }
            .fladeUp{
                animation: fladeUp 1s ease-out forwards;
            }
            }
    `}
</style>

          {/* banners */}
      <section
  onClick={BannerOffers}
  className="container
    max-w-7xl
    mx-4 sm:mx-6 md:mx-8 lg:mx-auto
    my-6 sm:my-8 md:my-10
    rounded-2xl lg:rounded-3xl
    bg-white text-gray-900
    py-8 sm:py-10 md:py-12
    px-4 sm:px-6 md:px-8
    shadow-lg hover:shadow-2xl
    transition-all duration-300
    cursor-pointer
    hover:-translate-y-1
  "
>
  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">

    {/* LEFT CONTENT */}
    <div className="flex-1 text-center lg:text-left w-full">

      {/* Badge */}
      <div className="inline-block bg-blue-600 text-white font-semibold px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm mb-4 shadow-sm">
        Today's Best Deals
      </div>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
        Discover <span className="text-blue-600">Top Offers</span> & Save More!
      </h1>

      {/* Subheading */}
      <p className="text-sm sm:text-base md:text-lg opacity-90 mb-5 sm:mb-6">
        Explore exclusive deals curated just for you. Updated every hour!
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {[
          { label: "Stores", value: "120+" },
          { label: "Deals", value: "450+" },
          { label: "Coupons", value: "300+" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm opacity-70 font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          BannerOffers();
        }}
        className="bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg sm:rounded-xl text-base sm:text-lg shadow hover:bg-blue-700 transition w-full sm:w-auto"
      >
        Browse Offers
      </button>
    </div>

    {/* RIGHT OFFER CARD */}
    <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl lg:rounded-3xl w-full max-w-xs sm:max-w-sm shadow mt-6 lg:mt-0">
      <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-3 text-center">
        50% OFF
      </div>

      <p className="text-sm sm:text-md text-gray-700 font-medium text-center mb-4">
        Use Coupon:
        <span className="bg-blue-600 text-white px-2 sm:px-3 py-1 ml-2 rounded text-sm sm:text-base">
          SAVE2025
        </span>
      </p>

      <p className="text-xs sm:text-sm text-gray-600 text-center italic">
        Offers refreshed daily. Grab them before they expire!
      </p>
    </div>
  </div>

  {/* PROMO MARQUEE */}
  <div className="mt-8 sm:mt-10 bg-blue-600 py-2 sm:py-3 overflow-hidden rounded-lg sm:rounded-xl shadow">
    <div className="animate-marquee whitespace-nowrap">
      <span className="text-white font-medium tracking-wide text-sm sm:text-base mx-4">
        ⭐ Best Prices of the Season • ⚡ Exclusive Member Discounts • 🎁 New Deals Every Day • 🔥 Shop Smart & Save More!
      </span>
      <span className="text-white font-medium tracking-wide text-sm sm:text-base mx-4">
        ⭐ Best Prices of the Season • ⚡ Exclusive Member Discounts • 🎁 New Deals Every Day • 🔥 Shop Smart & Save More!
      </span>
    </div>
  </div>
</section>

<TrendingCategories/>

<FeaturedDeals/>


          {/* Popular Stores */}
          <section className="w-full bg-gradient-to-br from-violet-50 via-pink-50 to-yellow-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-10 md:mb-14">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold md:font-extrabold text-gray-900 tracking-tight flex items-center gap-2 sm:gap-3 mb-4 sm:mb-0">
                💎 Popular Stores
            </h2>
            <button
                onClick={() => router.push("/stores")}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-full font-medium sm:font-semibold hover:scale-105 transform transition duration-300 shadow-md md:shadow-lg hover:shadow-indigo-200 text-sm sm:text-base"
            >
                View All →
            </button>
        </div>

        {/* Store Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 items-stretch">
            {/* Featured Main Store */}
            <div
                onClick={() =>
                    handleStore({
                        name: "Amazon",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                        rewards: "Upto 6.5%",
                        rating: "4.8",
                    })
                }
                className="lg:col-span-1 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl p-6 sm:p-8 md:p-10 text-center flex flex-col justify-center items-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    className="w-28 sm:w-32 md:w-36 lg:w-40 h-12 sm:h-14 md:h-16 lg:h-20 object-contain mb-4 sm:mb-5 md:mb-6"
                />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Amazon
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">⭐ 4.8 Rating</p>
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm md:shadow-md">
                    Upto 6.5% Rewards
                </span>
            </div>

            {/* Other Stores */}
            <div className="lg:col-span-2 xl:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 md:gap-4">
                {[
                    {
                        name: "Flipkart",
                        logo: "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png",
                        rewards: "Upto 7%",
                        rating: "4.6",
                    },
                    {
                        name: "AJIO",
                        logo: "https://logores.yrucd.com/wp-content/uploads/2022/07/Ajio_logo_PNG5.png!a",
                        rewards: "Upto 12.8%",
                        rating: "4.7",
                    },
                    {
                        name: "Myntra",
                        logo: "data:image/webp;base64,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",
                        rewards: "Upto 6.7%",
                        rating: "4.5",
                    },
                    {
                        name: "Dell",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
                        rewards: "Flat 4.5%",
                        rating: "4.4",
                    },
                    {
                        name: "Klook",
                        logo: "data:image/webp;base64,UklGRpwRAABXRUJQVlA4IJARAAAwVwCdASrYAYMAPp1IoEolpKOhqHNrGLATiWZu3V6HoD+h7KbEHeP8D+1f8/966uf0/+t/pz+uc7sbz1f+Iv7n909sP+y9Tn6U/5fuCfq3+xfvp9DvmF/c31Zv9H+63vN/u3qQf0Tqi/Qp/k3n0+0Z+5Hplao/85/zPe+/fckO0K7OZb2ADvYJn32gxFnl/Aa+tNAmLT1/lb5R3HB0NpRGVh1xn6isOlix9EF4sfRBeLH0QWZrf9+4wa7HtcN2mzfD1FiEu2rjpm0Sxmh6GkkrvbGhBs5J7XJwa+Sk9Fm1m2ytjReCU9rOWmXi8xP+EzX8el/dd2KQiB25ECCEytF/ZYM5QmMLomCq3Bg9K/8jlxorDToDNgBsdaAs0Uz3B5L9wzm6lVeqFjYpvohd0hwh/aGuuMR2BigEhpybzfdmkNpxJO/WGNUpMah9Wo0WCRH4TZYGypO3j1thBzf/BtAZo0hXIjIn3Zo7Ubq6Afa8TDCoIg1DIIhN4APpwsdFE8DBAxaB8IB4VbiUQAFucID22N4NtD8GyXIZLAXkpW+2XGAqhM436snZz2J62gNWtRRCzfWUgIe1KUfqDnYwbwI//tgZt/ohPfUq5KlRo+bhddqoglgaCdOkQH3mzeGKYAgIKjkum39Dqg0qYQ6WmNlVBwJMlnhwHtNuPPcCKqrXXIM5EU86pKNUK/Tnc4aTDfIxjL6JvD92bcCjQkDMc+MCCgWMqu+Y9DSBALQVmITIuGIGd3InRZHMUBa72eh4Pc64wZOSRAyB7dl3tUkx1eEmIrOyKJqC7k1f38KGKVLqGsneqi1RGdTlvxJe8cR9e7Jg1ZemcPVRjtN4dg2QgINVG6wInDLJTrqoZnHdiyiyCx/QiLfkQGT9U5MgfATLu3ymn04LDPlk8+BMxGblvBjNCC0MyYGbNuvshQNS7IUDUtAAAP75sUVa9cpywN4/gn2SDPw13fCBdR41KdQRIs+y8jHPfqQwhL7TfWPuTEOG7LMJGB2Ewr7lQVnfnwjOKeC71Ec1oYHKRnqE0XQkFJ+XH6uMPyYHQ4l66AVHE7loOqvlZiTWc11tP+Q9fu/rQl1JehE3ZLea+gG/gB8zVmEHMTRwPJv0x9UxRE3DIVNo21Q458PNKl8dIWZ/ePIpUVtef/bPd7ZRPYVr3o8oAAAABPhCOjrzU4BcC8qtdiCP5UsxNKMDWIteYKQ7esEkwdDBMs2k8e1sktlF3gwwxPZeCGYpPE16hqHBGtzf6ilvwNOVv96aHGOkQBwqUav4KxzoRBhUFCNmrDg5eM4M8AmvXSvmbrunnVdCOh5v8YROHewPm/fox3sPMxp5T8BtHsw0sq4qkOVSdsL0vgBQU6DKDbA4MEmxyljutXEeqh+RA0JyPDxrDhEP/+79hDafEiLQ0Rzmp1zMRn5me5w+1+pSurvM9tW59Z8KXM0i+aH9Yotl9ToMVe+kGGCjNyTxUAJ8Hx6CfadgN1J6y7zOVYT9Z3BxHsbDCEGcAew0MkPwGJ8gGGw5k/okZlUzzlC48oYCoL43bHMMFGYciiR0IQUREDy3IbIqST5PIUwt20rbf6VbFK754TkllfjIL3gPT5AAA2U5+xDGgkEWk3e6Nm6JQCBtG2Dqcf26K0bpyY/txtrNSPH28b2Z2UEAD3h5Xr0C9ACWnGN8qeA9t+qW2dnbURjGrxgRJICnEvsSWuZIGISzsWxin1rARCph9JTR8AzHGGBq7OVa9yKpEkFGS8io27Ao/vJsz5PxMtMCeShFy2vkjQK1FDJgn5ZZxqmYrD0G8OcModIk3dZR6gQy0++u9em00GKJIpE4GKkLMubZRIc139WesteZwCIpkfGbkApIDnDLQ+RyDrlWpTMuaMAhLyJImJeUucpUysoe75nTc17bE7Lp2PKbdUbrtthbaNNMYSMxGq53OoefiOiOSe4yHZXjVWybOfDxbayC4RmdgkSvCDCRa7HjJrVJnZ9VlJo+QIMtji5aYqsKlOoYhlcVps5hoELRkxh4mMHdwQ9WN2e9/e7B4dFuP5MdSE/iSfxaUAaEBxvrRpL0QF+teCAjLGW4itcqhlOX7bF6WzFoCcFo9zYmqUa0zW5xi/DdF6Yhl2rKqPaTQdNYkUTvqCQaE37ZfZU9qYY+qSqnglcgA0R1PfYqmZBSUVWpDBBeBlFAQNkpnjIQYCKbtp4pjVI1NYHdP1j/SxWp0Y9ipj5tsDnpQXkQ+9SbOdH5gsskDmFgff+OcK/X50RMivTJwuTBVS9Y2mqeAC1NwmzAdPL1P25wPntxOgh1f2V6wnapYPuTUnw9XXvbyYYKIpewVP3jm6pxjEu6lCJ5+Knd5RLWCsLviGD/GHDLKclr9OEtirhHRWPbm8KRPdEmoJmTVspxw417wUFyGYZrHgkx/zMhPhOpOaBbreFrMAoIILfGA0pavkCGg9zusXaSamu4s6SuPIDebct3EWePup/dYdoPVjS5ZgWuzCovqDw80U0K1QmHAPN/ebLW8Xj3Rexyaxclfi052Xj8L0lgngcdRfQZvvVGfHGxQ78fxouYpbxXDDuTGFfu3ZCvnkrZquKf8aQ6K1hR9IFj5bf80VcddqLlNOgocsVv0FryJGEfiXTIe6c83l5WYIMe3AVqzEMOIji8CDwarMr7GbcBlx98Xn3EfbtHyYKx/b9DtS5bPbgPIEwo3zYUUh7GLywcKUHQvi16H7a0FAXN+y3V5engVq7U35aUgIGiZxuBut39Q+YHPrHgvtemGW3YbUJBpWkjUUpLyB/3y9Tjfvlpe2iz3wsr4JmChAIl+acE0g6eUoG8y68jxwydWv2y8TZa7IvjwcsS4ltdkK0hR4tCj2jckt+y8pqKvKvNVvHzT8XubFfh2KO/eP68+eW7KXn3exU0z+HTk9dWHW4321w6Z9ZImfCifBbmcvr9DK7ro5a16GGg1toJZNFqHK6axHwcC4OGSLPBiF4cqRBdI2okudpG+BaZ1e+so89u6YLJJn5OmBKLA2iCPCG9vuPufIXN6DGASJjIqGLwnCjBbeniAEebmGp5R5HvrfITcnemkWIu1W95W93g6ImYFil/S6ezsctJB54Gj6ZdkxKuncjXUVnfEjfMfZCxMqzyR41jOvXOpGYQZB9EuwWPJ03h0sqkgVoVJa4NhAa/EB0bxqlaUmTaQTfqV7jM/s/6ffzWO93f/dHVKJoAU06UjOo/ujGzIMILI8dn13iCVRycxcYYH9ClPchLsjxsQxEwRQjNh2+BjXnnD57P280yJHu/nFqrvzns/aT41xBrp6WLGxqD880I8M+qKq+CA7NFZfAX/PUqGIisgKaJ1b6Xm/2hm3YTdt7+VhPUpIx0cIOqM7tVj6Wtrc42YwtulCuK41qhZlm+3zBMRMDU1TPqWt2UtdsABg526mNVnlzwlz41dAx7O79gl7eb6c3IBn+IaRGx6cHPQFvmMRRiKO5CHiqtoyPMDtXKtTX7h+e9RDMX07wQISEk1lnm2ijszB/hwpzvPRwHfrEVA7oCY6UMQcGBfnLoLp9alQIgivLRPLLAFOC5FpB3M3lmQF7CmxkLQjOUCJy2nIR6Gfb4GwvmkRQ8lgmFsoq1QO4mwaWHQTtweM7U0c7h/JgZc0SazxrEzFYFyrDzbXe4Iimbw0ov1ND1tFe/kYaWq54B/lBuvuDoJZu3O/VoolnG/kUmkeHlmdMcLXCM+j3WZbpqJ4fV9qsBEbaukK/zvaz/IfDvgpnUFgnkRs4V9Gr4mtfnwK1SnzDJ41ImpnqTwPwZpLeNBhYkbHipoSNxnETLDiz83wS2IrYJfauPIpqR+Q+wCwST8+7TFnxGzFCElfrNUVpDHmnj0hrS5FpEAUrsJ7uR9CTpyA0wbFa9L4KXqZ4zg8tJnGvR/LWJvvcTwT/HbLpb+eiJD1xZwpnocp9mm19jlcavcOlr8Q/KzWDCp2+v2g1mkwwfLvPksF2By6dPkh+eOMkEB4+OyVXTdT+HNl20cWT9+wJxNu/YcO/DxGM9UNqlkko8EhaVWg96Yv+j0NytmQbEYwkeY0lT0jidTkXRXi5vT7W2M60mIAlZe1iDphiYxMCF+kwL0DxcamF2NL1WHAUyLrzPAbkqV3x4C6OZX/tJOlwn6iztGcDimbGfpDgNOKj56zaODSTv/qYu4ewcHcaxmWHvE6rlnhqBZD5DzWEtyVzGkRGUKF+7SDcSmdHvLJysRfeSZXIUjyFXcMQygaeaxpte+yprtQfJs/G+WmMbcjkAVRvpdtXxbjNeb6Vtx3d+DBxhbGo7iY3n4HrOY7iD2C9wkQT64Ax9nR/UiFQedHvfbvwj94ptrh2sCv2tCOGQ0xySfHv9d9UDqxbz4cs4ItAZcOCB5neQhEbJr0OgpOG74HTDana2JrjLEioVQkg77rADNz1EiI5+GbUX9zybC+Gqwh94s+N2NSeQjrVoWDNN5jAHV29TLmKzMrxiskngryz/5JTBOC+7ZV0/L5+sGKUr3s3WOyC1uT3TzN/I4FB+TglgcThULFBmqfyF1ddkl9TRNXh36fw3uiWhBz/th/LRunY8CRgYQ/gsNr+IfeZFlhgpl0gRGqa7ug6DF+b02GtdgAZuEvAEVm7fre20OGcoL7yxjZhtY2PKh/IuMpFU2wObOpFHsOG5I9wKezBtw9h499VPT+y/S5n5sDObf/z+Xj4pCpb4/VX/31lG3GgvORs9ZHsXWCrQk6HZPVmGeJHJ+ifxKRuwz8a6Qd4gA1oCuV2PHGCHNjEnYSsJ+1QmWM11Sx8U0YmzdjEKXAnizviYiIYBIFhCp4JuVDxv4EgwpgKEDt0PN53xzAYCaXo1L4r6E2oO+BErYH+6TYrMnAIyjfoqYiQO4HyWU2PjYYzq0+a1bAremrWETzjbgjSA7Ip7KeZKjRD/IpDG79viNXiexskHwedi+b+7F8dHxGNc1PDD2b4Dvw49ld1RvSg34uWEvWgFf7bm5yYpSUGauwgo8emdKtckXx6NOKpEtjbD5pwC+h3Ji0lvrB1ULK+FTEx5w6D31/wuMnCErzIVl3By8WYwudfSHb7ynovZdJN+ah5UY5yIp9lHxqP6g9sRNn+3b0ju39LDK6G0q+lBXdZM/HcWMDIchfCs/z3RwF/aUD9X2Q96vaAmLYOFAgVV/j0fqDq2c0yDPJxPU8Q4g2tcSAD3c8lKgj8VR+OGXTG8AdWC6+RAXzC+fAE+nCYkAJNPSIM2QKBb+zxoWlTpAx6kjlUIXT45C2Yj3crmWK7O6nWfFF4ksLl7//e9rJhjJNMrqnOnZ8WQxQQEJuKvLphTRF5tR4xMvoMCDh2FS+XNXfwJC1yYaPgeujUgP+uYsmM9AU9ABCR5S0XrHXFlkD+FaGRSZ/b23tVCcsthqDQ5d0V8P7Rum+be9C4Ybs9IThIWwNi0H1qwH3pLOGtfQFCE/3hXhJZR2gcsQBr0ohVY1QU4ZD/Z3tyY8tsYmplzyabj+H+Zv8ZoPojo6tZz9zKnXJthxi8ncELcJ5t5va6BN1J9Ql7te+MULsSFhtFeSHJI3GQEyQl8UTLEXDdQySAf4O7dKNLjwdX7VUwvsrS8KZnHItAi/94UE7wc0+qNWhbGdStNRZtRTWE6bOypNiZd+0zKsQ55g9gbbRR3lgmEF3rS/yFQiHaHrENc3ziLbot5O9X7fpj8Uuny5/nmNLN2jbnR9CDckOMwKXMHKBjS58OW0eVOju4Hy39sHp+RrzucL7MNjdC3yy02uLcFTk7yTCu2RIGr+i2Ay7eY/f1WZupv4RUjG3oZX3+Nv99iU8uvqEaeXk4/bBSbigc8hOgxz9Zu2K0jHA/ctosLbl1jwHOnUiOJvU7mDajBlPT+TwWm2eujkAWijVFbnbICzaasLIecPEM9fGyZgTm5dMVzlT7qmd9JU4/4wMBX6LAYGGLscPntmdSW2+4P8eTBDWAzpbLKt19M1h+z76VcueElWhUzNLEErcaOf0+MKdAAAAAAAAAAAA==",
                        rewards: "Upto 3.5%",
                        rating: "4.3",
                    },
                    {
                        name: "Jupiter",
                        logo: "data:image/webp;base64,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",
                        rewards: "Upto 5.6%",
                        rating: "4.6",
                    },
                    {
                        name: "Samsung",
                        logo: "data:image/webp;base64,UklGRnYLAABXRUJQVlA4IGoLAACQRACdASo1AQ4BPp1Oo0ylpCOiI7VYuLATiWVu/HyZVOjKoYzKw/pPOfuT+m4Pozfbn5N9W/rv8wDn4eYb9svSs9UvoAf53qfvQ76ZXIO+vPbH/nP7N/Y8rCEa7I/2PsA7Sd4nuEIA+sb1Ju7X+v5rzxXfpH/F9gj+T/2X9aPeP/t/Kp9acAb9vPYw/Z0UV3/1ZDi0LiywvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcF7gvcFUlYy8a1Ys7Y1zIpKOWs3vGPoswfb0RnSTXK0/H/tx0+ooO5mOzKINqjfcz0KWHAF9j9w+ErqhB5oHyFKHTe+b5i/Ed7vZ79pmlxfOZzT+eg04HVYHq4ZzhGF3LDhGgmfMa674quWADHnaw1r/qY9IZw4qkIHwGcN4tq5cdiZ0Z5lr4z/cx3/T/sFqJi3KSre7FyXHjww+lPa/uZoYP1yjmRLUw4XTZv0wrMvS3pq6gqlD2TSYZ9Vd0eWc4+qRMp45ps3W8AtaQAkHc5IQLLsgSpbYlEHMWpVm93TUuth8IF2orCGu9lzUf+tnYDUvI+mU4q/PCgNh2uPzwfCfUQ6Yn3bOYJTwCVz83h3mPnCHB9T2PYGVTa9Rzv7hwiHjpTuBkYcdW6iWgJWmtnadsi/PuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXuC9wXtAAAD+/zDAAAAAAAAAp+oBu9CO9sA3tdTEX3UrwiBiSTCstMyUA4aTdvBQmE7Al7QbMQOc69TM4vGOIhUXOBLZnRgQWMKai/m6NDUzNPMJFylbCpRTaKKkqgUlDBvB0ROVp62wZKI57oGz/LCPrQ1qgwOWy0KWaqXKu/VK/Jrtnn9LVJz5qiB8VJqB1m7aRYwqIf93aatN+84r2HI8s62TENMH78IiIv49z7qzcmKbenaMAqxhTu8mgVqkr7ZJAjsJgvBmjnDfmV/RfxLRS2NOiQBHb0zOVYU2jCNPdm1nrfqA2WjFpeY5/8P2kngPEu5eRg+x8oEb4dMJ2zOWp1D1ARN4xiy3dWeX2N/6ih17IX1+q1bTkhog9HEM8NTG4lwcHDQdFk+tGDB8B817/wYgSdGNpzZqxp/Kkg+yo3orj0n94i738aEbAcbuzXbhmpWfIG+eCfDVuNboe79cHuif46At8cM/uCbfnThEAUKsmAMW6Vj86HEBAn0QDMe2NRlXtLdJDw+1zSoXyBc4Vi7RFs+rJ7yOJdVoCMw7DqJBNzivlIYTcr3ACGWprKpWc6JAkTggXtwbWafXN7M01uz+fhFbP5t7KF2ZkjQEYT0DvfzoN8clR3IP7YtEl4Lq2B5CJv/5evw9T493pSpLV56ueTpBlv/tFGDmcQK8tV0G1bV35fQbmTtXa4FGnq+tdxq4p3BYuzNytQokprNksDPSAOdvFi9292/b8HsDNrzu2+mdgyEgLyMes0OcpgGfWpnMWeSKUIsWeWU3cKkuMOOx/e8V+m9wG2DMCHEHAlTew+ekOARhGX6j1Rur/6rq4HxxjZvDM2U4MBePx1jUtn8PuSJK/Z6dSqKtwB/SN+3abysQPjG/f4/p/spGX+bpflkuuS8Q8MFdBldZCVw6NhL6/vZnrk3VfWZAX9f97X1PQ+mer7+lWZr6qjDR3KTYe8u0a67U/1HuDZpEx13Xqcrc8NSiOo3kQB+5//7NMmmCmedxHyAZmO4LJaGBkXTbjjLuysqebwTLywBgSNinPz+48jiChOiryG3L5PP127EYCdUamSX2hv6tYUyS0BsKzdydzOya1hwFnW65doup618uWUwTac9ZpWczGvyZ/Akt9JaQTpiY2lpTfuRvo9rFGJNAajg7PBVPxoNqg3vmRQMgUAA+9r8GVHnx1RZgNmrsM1NB/qRe5Q0YbGHjB/7Afi7jWEKUUIkhYqLocem8AJjbtBjHkeY8FOKtqxi7wyFkIAsd5l0k4anaSYt+jCmbkzAx3aexXRdV/G0MYVHfUFpmhMEsLGylGGD1I/0C6MdbJ6EAlSJxj95LXdFfNueChA0RXDl1EUs2bZMoYqDkWpaEckG/LJGI3mSIrGRrnzEHjCUmLdXOtz7NLtYkVn/kOj4h5mAw/TsDwyhnYl5Gy7rDRyGH1dRDbYENR8Yf0ghOZzpfi4xRaRh32i9YWyB6aKSWL9+2/7gFd9Am2wrLC9T8a4XWACnK6hOEF6gDUp3pYl4irgqUaDp1VhYBeiMP2xk6WCwlX5UL1K9BCpsRY4pUae98iXojwQp8zq3DG4Yp+lh0ERx7F5itYSXsx3jFgh8lvSmsHb22kPIVb8M/HkKRsNkF0qi4MgyuDexxCFMkpTizjOL6fiFRiXScWlf3WrHy4D58ESy34r3/vcDAigeZLfTEkUMy4HH1roXUt/Ovo0KdMjd7EMW+Gah2zwGkan3JTb2RDcTKLqVQvgIlHgBbEbH2rAvzj8naXU0cEOAJW067KnXSQ7agnXgrFnZ1r4FU8S23xvOC2Bv2oNq8LqH/XE+/Iy0VBCHmcmrtuqxASVnQxoOMLO8uOUcZXCbebkl8khwlSyIl5I3OEvv46wtGs8XTChs43qFU1MsTC4/hqcBAwKsQKVsPHA6lRQpZqvWykaiLm5x6iqOBM0SoU1eYLfbY2OHJnF+sgAf2HjP+YWK9vf2B2Jnz5gxDW8XlS0qk7MIL61v9gdEpBU4W5TSF4nqQUcYEFy7svHWVwJovZJJ06x7XUAQegfGRD4XHFZyV2B+ciao6KC4JC8AX2E59cxKrUafXudlVRb2Aw/eXu04Qktqkwj7tDbEF4Wj/AMxPB/D+20No70vK/zwPI1nrq5K/yYDqCtrSE7sPGsBfuIunFZvEKxfs1zqjZODfuxRLvViCK5MEsjwc2RywmK9O9RL84jFn7wujqC4DgzHge2GGPouerw+3SiZxrKvA0w1LCXu/Crp3nR+Vigid90SYrCfsOAhT9MRGWyG9LzIFR2bwvApZP8oTekLwflztWjTwOoKtZPylDHxNDtWohE4AQVcsaR9iSrkQy49kC9victe6mo76bq04byzZyArR/cb70QO5D9Nm+gj0v2v27sba2e2RfYio8vrIPC9qz3G+6onHXQqWbrDrmnK6EMboUrHoUERSIYWi26KhN/4pYS3aMclEVuAoGeiC7QJbV4wkYiWIldq3lrnETLj3MKMrZOFzFCLLK7YWeJhk/3+142S5yCnsd8GL51wu974QR3qTID8iJf9+yP+w6UdS2uUntEVc+NQAUfvT/zQUUvuNPYUN1jzTmiLjNEV8TM2B1rvdnGJ/M5rwR7LT0MvnQ4eozubyqeZWgSQ/Wt7xkMhKjBaKYcd3N15asOmjhWXtfFKLO2LoJ/GCrUySFm754qzEsTYIWD3Eb2ixMtI08FFofWQIJunP3iVYuvM1zC66tVSwUhPQ6fvCBaMR7L+XRVRflF+eJEAq0sO/asyYr/2crxVcKIRgn2mXMPjTJ+l0syXo5E5m9PIcRTY449VanW/jo1xuYTnDHc+CED9k4lIi/ZH3NLGGz1LGMK7zlGg2irFSWVN/tthrIqk9eYmscXXGHfXNPZnI2BZHsYSoK9cHhSK5Wm2/vWwa4PbbXPYkBbmCIjfHwKUL1x9RUWR1QYVelDjj5waN4PDqwWlfo4OVeCNuVsZw7l8FqO7MeWl3FjgydHUq/WQ6ZZBRlYxCVTBpJsR46EGJQEBfhGVIthD4qyaeR45iS0PfUIsOlwHf9wPgGOgxlUIngpKOBnXZ4gmQhxhkPVB7P2MvOE4wEAf6hOn9QNEoZR64qF3CYKAAKZ3ymzX71EUE8aN4676Qn+8ttgxZgAAA8jAwYwAAAAAAAAA=",
                        rewards: "Upto 2.5%",
                        rating: "4.5",
                    },
                    {
                        name: "Croma",
                        logo: "https://tse4.mm.bing.net/th/id/OIP.P-wvsszNzy1HkOK6Bn24NAHaBp?w=349&h=78&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
                        rewards: "Upto 3%",
                        rating: "4.2",
                    },
                ].map((store, index) => (
                    <div
                        key={index}
                        onClick={() => handleStore(store)}
                        className="bg-white rounded-xl sm:rounded-2xl shadow-sm md:shadow-md hover:shadow-lg p-4 sm:p-5 md:p-4 text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-transparent hover:border-indigo-100"
                    >
                        <div className="bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex justify-center items-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                            <img
                                src={store.logo}
                                alt={store.name}
                                className="w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 object-contain"
                            />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
                            {store.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">
                            ⭐ {store.rating} Rating
                        </p>
                        <span className="bg-gradient-to-r from-green-400 to-teal-500 text-white text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                            {store.rewards}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>

          {/* cashback */}
<section className="w-full bg-linear-to-br from-blue-700 via-purple-600-50 to-blue-600 py-8 md:py-12 lg:py-16">
    {/* Main Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold md:font-extrabold text-white drop-shadow-md tracking-tight md:tracking-wide">
                💫 Exclusive Web Hosting Deals
            </h2>
            <p className="text-gray-200 mt-3 md:mt-4 text-base sm:text-lg md:text-lg">
                Unlock premium cashback offers from trusted hosting partners worldwide.
            </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-5">
            {[
                {
                    name: "DELL Technologies",
                    heading: "Dell India",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
                    cashback: "Flat 4.8% Cashback",
                    glow: "shadow-blue-500/50",
                },
                {
                    name: "Malaysia Airlines",
                    heading: "Malaysia Airlines",
                    logo: "data:image/webp;base64,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",
                    cashback: "Flat 1.4% Cashback",
                    glow: "shadow-indigo-500/50",
                },
                {
                    name: "PNG Jewellers",
                    heading: "PNG Jewellers",
                    logo: "",
                    cashback: "Flat 3.2% Cashback",
                    glow: "shadow-yellow-500/50",
                },
                {
                    name: "Hostinger",
                    heading: "Hostinger India",
                    logo: "data:image/webp;base64,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",
                    cashback: "Flat 5.5% Cashback",
                    glow: "shadow-pink-500/50",
                },
            ].map((item, index) => (
                <div
                    key={index}
                    className={`bg-white cursor-pointer rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 ${item.glow}`}
                    onClick={() => handleCashback(item)}
                >
                    <div className="flex items-center justify-center h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40">
                        <img
                            src={item.logo}
                            alt={item.name}
                            className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain max-w-full"
                        />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-1 drop-shadow-sm line-clamp-1">
                        {item.heading}
                    </h3>
                    <p className="text-black mb-2 md:mb-3 text-sm sm:text-base line-clamp-1">
                        {item.name}
                    </p>
                    <p className="text-red-600 font-medium text-base sm:text-lg">
                        {item.cashback}
                    </p>
                </div>
            ))}
        </div>
    </div>
</section>

          {/* subscribe */}
<section className="relative w-full bg-gradient-to-br from-[#ffffff] via-[#f5f7fa] to-[#e6ebff] py-16 md:py-24 overflow-hidden">
    {/* Main Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Content Card with Rounded Corners */}
        <div className="relative rounded-3xl shadow-xl overflow-hidden">
            {/* Floating Background Glow Elements */}
            <div className="absolute -top-20 -left-24 w-80 h-80 bg-blue-300/40 blur-[120px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-300/40 blur-[150px] rounded-full animate-pulse"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 p-6 md:p-16">
                {/* Right Side: Image / Illustration */}
                <div className="lg:w-1/2 flex justify-center relative">
                    <div className="relative bg-white border border-gray-100 rounded-3xl p-10 shadow-2xl backdrop-blur-lg hover:scale-105 transition-transform duration-500">
                        <Image
                            src={coupon}
                            alt="Exclusive Deals"
                            className="w-96 h-96 object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.2)]"
                        />
                        {/* Floating Offer Badge */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold px-5 py-2 rounded-full text-sm shadow-lg rotate-12">
                            🔥 Save 70%
                        </div>
                    </div>
                </div>

                {/* Left Side: Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-snug mb-6 text-gray-900">
                        Unlock{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
                            Smarter Savings
                        </span>{" "}
                        with Every Purchase!
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Discover verified coupons, exclusive cashback rewards, and
                        daily discounts from 30,000+ trusted brands. Join millions of
                        smart shoppers saving big every day.
                    </p>

                    {/* Email Input + Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
                        />
                        <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-indigo-400/40 transition whitespace-nowrap">
                            Get Started
                        </button>
                    </div>

                    {/* Trust Line */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                            alt="Verified"
                            className="w-6 h-6"
                        />
                        <p className="text-sm text-gray-500">
                            Trusted by 2M+ happy users • 100% secure and private
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

          {/* questions */}
            <FaqSection/>

        </main>
      </div>

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
  );
}
