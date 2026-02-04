'use client'

import React, { useState, useEffect, useRef } from "react";
import faircoupon from "../../public/assets/faircoupons-logo.png";
import CategoriesDropdown from "../Components/categories/Categories";
import TopStores from "./topstores/TopStores";
import {useRouter} from "next/navigation";
import Image from "next/image"
import Link from "next/link";


const Navbar = () => {
  const router = useRouter();
  
  // 🔹 State for dropdown visibility
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  // 🔹 State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 🔹 State for search focus
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // 🔹 State for screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // 🔹 State for selected currency
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  // 🔹 State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  
  // 🔹 Refs for detecting outside clicks
  const categoriesRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const searchRef = useRef(null);

  // Currency options with flags
  const currencyOptions = [
    { code: "USD", flag: "🇺🇸", name: "US Dollar" },
    { code: "EUR", flag: "🇪🇺", name: "Euro" },
    { code: "GBP", flag: "🇬🇧", name: "British Pound" },
    { code: "JPY", flag: "🇯🇵", name: "Japanese Yen" },
    { code: "AUD", flag: "🇦🇺", name: "Australian Dollar" },
    { code: "CAD", flag: "🇨🇦", name: "Canadian Dollar" },
    { code: "CHF", flag: "🇨🇭", name: "Swiss Franc" },
    { code: "CNY", flag: "🇨🇳", name: "Chinese Yuan" },
    { code: "INR", flag: "🇮🇳", name: "Indian Rupee" },
    { code: "SGD", flag: "🇸🇬", name: "Singapore Dollar" },
    { code: "NZD", flag: "🇳🇿", name: "New Zealand Dollar" },
    { code: "KRW", flag: "🇰🇷", name: "South Korean Won" },
    { code: "HKD", flag: "🇭🇰", name: "Hong Kong Dollar" },
    { code: "SEK", flag: "🇸🇪", name: "Swedish Krona" },
    { code: "NOK", flag: "🇳🇴", name: "Norwegian Krone" },
    { code: "DKK", flag: "🇩🇰", name: "Danish Krone" },
    { code: "RUB", flag: "🇷🇺", name: "Russian Ruble" },
    { code: "BRL", flag: "🇧🇷", name: "Brazilian Real" },
    { code: "MXN", flag: "🇲🇽", name: "Mexican Peso" },
    { code: "ZAR", flag: "🇿🇦", name: "South African Rand" },
    { code: "TRY", flag: "🇹🇷", name: "Turkish Lira" },
    { code: "AED", flag: "🇦🇪", name: "UAE Dirham" },
    { code: "SAR", flag: "🇸🇦", name: "Saudi Riyal" },
    { code: "THB", flag: "🇹🇭", name: "Thai Baht" },
    { code: "MYR", flag: "🇲🇾", name: "Malaysian Ringgit" },
    { code: "IDR", flag: "🇮🇩", name: "Indonesian Rupiah" },
    { code: "PHP", flag: "🇵🇭", name: "Philippine Peso" },
    { code: "PLN", flag: "🇵🇱", name: "Polish Złoty" },
    { code: "CZK", flag: "🇨🇿", name: "Czech Koruna" },
    { code: "HUF", flag: "🇭🇺", name: "Hungarian Forint" },
  ];

  // Language options
  const languageOptions = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "DE", name: "Deutsch" },
    { code: "IT", name: "Italiano" },
    { code: "PT", name: "Português" },
    { code: "RU", name: "Русский" },
    { code: "ZH", name: "中文" },
    { code: "JA", name: "日本語" },
    { code: "KO", name: "한국어" },
    { code: "AR", name: "العربية" },
    { code: "HI", name: "हिन्दी" },
    { code: "BN", name: "বাংলা" },
    { code: "UR", name: "اردو" },
    { code: "TR", name: "Türkçe" },
    { code: "NL", name: "Nederlands" },
    { code: "SV", name: "Svenska" },
    { code: "DA", name: "Dansk" },
    { code: "FI", name: "Suomi" },
    { code: "NO", name: "Norsk" },
    { code: "PL", name: "Polski" },
    { code: "CS", name: "Čeština" },
    { code: "HU", name: "Magyar" },
    { code: "RO", name: "Română" },
    { code: "EL", name: "Ελληνικά" },
    { code: "HE", name: "עברית" },
    { code: "TH", name: "ไทย" },
    { code: "VI", name: "Tiếng Việt" },
    { code: "ID", name: "Bahasa Indonesia" },
    { code: "MS", name: "Bahasa Malaysia" },
  ];

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // Close mobile menu on larger screens
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close categories dropdown if clicked outside
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsCategoriesOpen(false);
      }
      
      // Close mobile menu if clicked outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && 
          !event.target.closest('[data-mobile-menu-toggle]')) {
        setIsMobileMenuOpen(false);
      }
      
      // Handle search focus
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🔹 Toggle dropdown on button click
  const toggleDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // 🔹 Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close categories dropdown when opening mobile menu
    if (!isMobileMenuOpen) {
      setIsCategoriesOpen(false);
    }
  };

  // 🔹 Handle search focus
  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  // 🔹 Handle currency change
  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  // 🔹 Handle language change
  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  // 🔹 Determine if we should show compact view
  const isCompactView = screenWidth < 640;



const handleTopStoresClick = () => {
  // Mobile + Tablet (less than 1024px)
  if (window.innerWidth < 1024) {
    router("/stores");
    setIsMobileMenuOpen(false);
  } else {
    // Desktop behavior
    toggleDropdown();
  }
};


  return (
    <>
      {/* 🔹 Top Announcement Bar - Fully Responsive */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white py-1.5 xs:py-2 sm:py-2.5 text-xs xs:text-sm sm:text-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 flex justify-center items-center relative z-10">
          <div className="flex items-center gap-1 xs:gap-2 sm:gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="hidden xs:flex items-center gap-1 xs:gap-2 bg-white/20 px-2 xs:px-3 py-0.5 xs:py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="font-semibold text-xs xs:text-sm">LIVE DEALS</span>
            </div>
            <span className="font-medium text-xs xs:text-sm">
              Flash Sale: Extra{" "}
              <span className="font-bold text-yellow-300">15% OFF</span> with code{" "}
              <span className="font-bold bg-white/20 px-1.5 xs:px-2 py-0.5 rounded text-xs xs:text-sm">
                SAVE15
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4">
          {/* 🔸 Logo Row - Fully Responsive */}
          <div className="flex items-center justify-between py-2 xs:py-3">
            {/* Logo Section */}
            <div className="flex items-center gap-2 xs:gap-3">
              <div
                className="w-12 h-8 xs:w-14 xs:h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 lg:w-24 lg:h-16 xl:w-28 xl:h-18 2xl:w-32 2xl:h-20 flex items-center justify-center rounded-md xs:rounded-lg sm:rounded-lg md:rounded-xl lg:rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => router.push("/")}
              >
                <Image
                  src={faircoupon} 
                  alt="FairCoupons Logo" 
                  className="h-6 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 object-contain transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-black bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent tracking-tight">
                  FairCoupons
                </h1>
                <p className="text-[10px] xs:text-xs text-gray-500 -mt-0.5 xs:-mt-1">
                  Save Big, Shop Smart
                </p>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className={`flex-1 ${isCompactView ? 'max-w-md' : 'max-w-xl'} mx-2 xs:mx-3 sm:mx-4 hidden lg:block`}>
              <div 
                ref={searchRef}
                className={`relative ${isSearchFocused ? 'scale-105' : ''} transition-transform duration-200`}
              >
                <div className="absolute left-3 xs:left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="fas fa-search text-sm"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search for stores, coupons..."
                  className="w-full pl-10 xs:pl-12 pr-4 py-2.5 xs:py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 shadow-sm transition-all duration-300 text-sm xs:text-base"
                  onFocus={handleSearchFocus}
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3 xs:px-4 py-1 xs:py-1.5 rounded-xl text-white font-medium text-xs xs:text-sm transition-all hover:scale-105">
                  Search
                </button>
              </div>
            </div>

            {/* Search Bar - Mobile & Tablet */}
            <div className={`flex-1 ${isCompactView ? 'max-w-xs' : 'max-w-md'} lg:hidden mx-1 xs:mx-2 sm:mx-3`}>
              <div 
                ref={searchRef}
                className="relative"
              >
                <div className="absolute left-2 xs:left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <i className="fas fa-search text-xs xs:text-sm"></i>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-7 xs:pl-9 pr-3 py-1.5 xs:py-2 sm:py-2.5 rounded-lg xs:rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 shadow-sm transition-all duration-300 text-xs xs:text-sm"
                  onFocus={() => setIsSearchFocused(true)}
                />
                {isSearchFocused && (
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-0.5 rounded-lg text-white text-xs xs:text-sm transition-all">
                    Go
                  </button>
                )}
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center justify-end gap-1 xs:gap-2 sm:gap-3">
              {/* Language & Currency - Desktop */}
              <div className="hidden xl:flex items-center gap-2 lg:gap-3 text-xs xs:text-sm text-gray-600">
                {/* Currency Selector */}
                <div className="relative group">
                  <select 
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors text-xs xs:text-sm max-w-40 2xl:max-w-48 appearance-none pr-6 pl-8 py-1 rounded-lg hover:bg-gray-50"
                  >
                    {currencyOptions.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code} – {currency.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-money-bill-wave text-xs text-gray-500"></i>
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>

                <div className="w-px h-3 xs:h-4 bg-gray-300"></div>

                {/* Language Selector */}
                <div className="relative group">
                  <select 
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors text-xs xs:text-sm max-w-32 2xl:max-w-40 appearance-none pr-6 pl-8 py-1 rounded-lg hover:bg-gray-50"
                  >
                    {languageOptions.map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.code} – {language.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-language text-xs text-gray-500"></i>
                  </div>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Language & Currency - Tablet */}
              <div className="hidden lg:flex xl:hidden items-center gap-2 text-xs text-gray-600">
                <div className="relative">
                  <select 
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors text-xs max-w-24 appearance-none pr-5 pl-6 py-1 rounded-lg hover:bg-gray-50"
                  >
                    {currencyOptions.slice(0, 15).map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.flag} {currency.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>

                <div className="w-px h-3 bg-gray-300"></div>

                <div className="relative">
                  <select 
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none cursor-pointer hover:text-blue-600 transition-colors text-xs max-w-16 appearance-none pr-5 pl-6 py-1 rounded-lg hover:bg-gray-50"
                  >
                    {languageOptions.slice(0, 10).map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.code}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Icons & Buttons */}
              <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2">
                {/* Favorites - Desktop/Tablet */}
                <button className="hidden sm:inline-flex p-1.5 xs:p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg xs:rounded-xl transition-all duration-200 group shadow-sm hover:shadow-md">
                  <i className="far fa-heart text-sm xs:text-base group-hover:scale-110 transition-transform"></i>
                </button>
                
                {/* Notifications - Desktop/Tablet */}
                <button className="hidden sm:inline-flex p-1.5 xs:p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg xs:rounded-xl transition-all duration-200 group relative shadow-sm hover:shadow-md">
                  <i className="far fa-bell text-sm xs:text-base group-hover:scale-110 transition-transform"></i>
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 xs:w-2 h-1.5 xs:h-2 bg-red-500 rounded-full"></span>
                </button>
                
                {/* Sign In Button - Desktop/Tablet */}
                <button
                  onClick={() => router.push("/signup")}
                  className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg xs:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105 items-center gap-1 xs:gap-2 text-xs xs:text-sm"
                >
                  <i className="far fa-user text-xs xs:text-sm"></i>
                  <span className="hidden md:inline">Sign In</span>
                  <span className="md:hidden">Login</span>
                </button>
                
                {/* Mobile Icons */}
                <div className="flex sm:hidden items-center gap-1 xs:gap-2">
                  <button className="p-1.5 xs:p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">
                    <i className="far fa-heart text-sm xs:text-base"></i>
                  </button>
                  <button className="p-1.5 xs:p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200 relative">
                    <i className="far fa-bell text-sm xs:text-base"></i>
                    <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  </button>
                  <button
                    onClick={() => router.push("/signup")}
                    className="p-1.5 xs:p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    <i className="far fa-user text-sm xs:text-base"></i>
                  </button>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button 
                data-mobile-menu-toggle
                onClick={toggleMobileMenu}
                className="lg:hidden p-1.5 xs:p-2 text-gray-600 hover:bg-gray-100 rounded-lg xs:rounded-xl transition-colors shadow-sm hover:shadow-md ml-0.5 xs:ml-1"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-base xs:text-lg`}></i>
              </button>
            </div>
          </div>

          {/* 🔸 Navigation Row - Desktop */}
          <div className="hidden lg:flex items-center justify-between py-1.5 sm:py-2 border-t border-gray-100">
            <nav className="flex items-center gap-4 lg:gap-5 xl:gap-6 font-medium text-gray-700">
              {/* Home */}
              <Link
                href="/"
                className="relative group py-1.5 sm:py-2 transition-all hover:text-blue-600 text-xs lg:text-sm xl:text-base"
              >
                <div className="flex items-center gap-1.5 lg:gap-2">
                  <i className="fas fa-home text-xs lg:text-sm"></i>
                  <span>Home</span>
                </div>
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </Link>

              {/* Categories */}
              <button
                onClick={() => router.push('/categories')}
                className="flex items-center gap-1.5 lg:gap-2 py-1.5 sm:py-2 transition-all hover:text-blue-600 text-xs lg:text-sm xl:text-base"
              >
                <i className="fas fa-th-large text-xs lg:text-sm"></i>
                <span>Categories</span>
              </button>

              {/* Top Stores Dropdown */}
              <div className="relative" ref={categoriesRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1.5 lg:gap-2 py-1.5 sm:py-2 transition-all hover:text-blue-600 group text-xs lg:text-sm xl:text-base"
                >
                  <i className="fas fa-store text-xs lg:text-sm"></i>
                  <span>Top Stores</span>
                  <i
                    className={`fas fa-chevron-down text-xs transition-transform ${
                      isCategoriesOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {isCategoriesOpen && (
                  <div className={`absolute left-0 top-full mt-2 ${
                    screenWidth < 1280 ? 'w-[85vw] max-w-[800px]' : 'w-[90vw] max-w-[900px]'
                  } h-[350px] sm:h-[400px] bg-white shadow-2xl rounded-2xl transition-all duration-300 z-50 border border-blue-100 p-3 sm:p-4 overflow-y-auto`}>
                    <TopStores setIsCategoriesOpen={setIsCategoriesOpen} />
                  </div>
                )}
              </div>

              {/* Deals */}
              <Link
                href="/deals"
                className="flex items-center gap-1.5 lg:gap-2 py-1.5 sm:py-2 transition-all hover:text-blue-600 group relative text-xs lg:text-sm xl:text-base"
              >
                <i className="fas fa-bolt text-xs lg:text-sm text-yellow-500"></i>
                <span>Today's Deals</span>
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </Link>

              {/* Gift Cards */}
              <Link
                href="/giftcards"
                className="flex items-center gap-1.5 lg:gap-2 py-1.5 sm:py-2 transition-all hover:text-blue-600 group relative text-xs lg:text-sm xl:text-base"
              >
                <i className="fas fa-gift text-xs lg:text-sm text-purple-500"></i>
                <span>Gift Cards</span>
                <span className="absolute left-0 bottom-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
              </Link>

              {/* Festival Coupons */}
              <Link
                href="/festivalcoupons"
                className="flex items-center gap-1.5 lg:gap-2 py-1.5 sm:py-2 transition-all hover:text-blue-600 group relative text-xs lg:text-sm xl:text-base"
              >
                <i className="far fa-file-lines text-xs lg:text-sm text-purple-500"></i>
                <span className="relative">
                  Festival Coupons
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
                </span>
              </Link>
            </nav>

            {/* Submit & Request Coupon Buttons */}
           <div className="hidden lg:flex items-center gap-4 lg:gap-5 xl:gap-6 font-bold">
  <Link
    href="/submitcoupon"
    className="border border-gray-600 rounded-lg px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all text-sm"
  >
    Submit Coupon
  </Link>

  <Link
    href="/requestcoupon"
    className="border border-gray-600 rounded-lg px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all text-sm"
  >
    Request Coupon
  </Link>
</div>

          </div>
          
          {/* 🔸 Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div 
              ref={mobileMenuRef}
              className="lg:hidden absolute left-0 right-0 top-full mt-0 bg-white shadow-2xl rounded-b-2xl border-t border-gray-100 z-50 max-h-[80vh] overflow-y-auto"
            >
              <div className="p-3 xs:p-4 space-y-0.5 xs:space-y-1">
                {/* Home */}
                <Link
                  href="/home"
                  className="flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-home text-blue-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Home</span>
                </Link>

                {/* Categories */}
                <button
                  onClick={() => {
                    router.push('categories');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all text-left"
                >
                  <i className="fas fa-th-large text-blue-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Categories</span>
                </button>

                {/* Top Stores */}
                <button
                  onClick={() => {
                    toggleDropdown();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all text-left"
                >
                  <i className="fas fa-store text-blue-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Top Stores</span>
                  <i className="fas fa-chevron-right text-gray-400 ml-auto text-xs xs:text-sm"></i>
                </button>

                {/* Today's Deals */}
                <Link
                  href="/deals"
                  className="flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-bolt text-yellow-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Today's Deals</span>
                </Link>

                {/* Gift Cards */}
                <Link
                  href="/giftcards"
                  className="flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fas fa-gift text-purple-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Gift Cards</span>
                </Link>

                {/* Festival Coupons */}
                <Link
                  href="/festivalcoupons"
                  className="flex items-center gap-3 p-2.5 xs:p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="far fa-file-lines text-purple-500 text-sm xs:text-base w-5"></i>
                  <span className="font-medium text-sm xs:text-base">Festival Coupons</span>
                </Link>

                {/* Mobile Language & Currency - Enhanced */}
                <div className="border-t border-gray-100 pt-2 xs:pt-3 mt-2 xs:mt-3">
                  <div className="space-y-2 xs:space-y-3">
                    {/* Currency Selector */}
                    <div className="relative">
                      <label className="block text-xs text-gray-500 mb-1">Currency</label>
                      <div className="relative">
                        <select 
                          value={selectedCurrency}
                          onChange={handleCurrencyChange}
                          className="w-full p-2 xs:p-2.5 pr-8 pl-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs xs:text-sm appearance-none"
                        >
                          {currencyOptions.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                              {currency.flag} {currency.code} – {currency.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          <i className="fas fa-money-bill-wave text-xs"></i>
                        </div>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                      </div>
                    </div>

                    {/* Language Selector */}
                    <div className="relative">
                      <label className="block text-xs text-gray-500 mb-1">Language</label>
                      <div className="relative">
                        <select 
                          value={selectedLanguage}
                          onChange={handleLanguageChange}
                          className="w-full p-2 xs:p-2.5 pr-8 pl-10 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 text-xs xs:text-sm appearance-none"
                        >
                          {languageOptions.map((language) => (
                            <option key={language.code} value={language.code}>
                              {language.code} – {language.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                          <i className="fas fa-language text-xs"></i>
                        </div>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <i className="fas fa-chevron-down text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Action Buttons */}
                <div className="grid grid-cols-2 gap-2 xs:gap-3 pt-2 xs:pt-3 border-t border-gray-100">
                  <Link
                    href="/submitcoupon"
                    className="text-center border border-gray-600 rounded-lg p-1.5 xs:p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all text-xs xs:text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Submit Coupon
                  </Link>
                  <Link
                    href="/requestcoupon"
                    className="text-center border border-gray-600 rounded-lg p-1.5 xs:p-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-all text-xs xs:text-sm font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Coupon
                  </Link>
                </div>

                {/* Mobile User Actions */}
                <div className="flex justify-between pt-2 xs:pt-3 border-t border-gray-100">
                  <button className="flex-1 flex flex-col items-center p-1.5 xs:p-2 rounded-lg hover:bg-gray-50 transition-all">
                    <i className="far fa-heart text-base xs:text-lg text-gray-600 mb-0.5 xs:mb-1"></i>
                    <span className="text-[10px] xs:text-xs text-gray-600">Favorites</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center p-1.5 xs:p-2 rounded-lg hover:bg-gray-50 transition-all relative">
                    <i className="far fa-bell text-base xs:text-lg text-gray-600 mb-0.5 xs:mb-1"></i>
                    <span className="text-[10px] xs:text-xs text-gray-600">Notifications</span>
                    <span className="absolute top-1 right-1/3 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  </button>
                  <button
                    onClick={() => {
                      router.push("/signup");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 flex flex-col items-center p-1.5 xs:p-2 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    <i className="far fa-user text-base xs:text-lg text-gray-600 mb-0.5 xs:mb-1"></i>
                    <span className="text-[10px] xs:text-xs text-gray-600">Account</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;