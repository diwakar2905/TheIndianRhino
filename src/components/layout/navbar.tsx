"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkHover = "relative font-bold uppercase text-[12px] tracking-[0.15em] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-forest after:transition-all after:duration-300 hover:after:w-full hover:text-forest transition-colors";

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col bg-white border-b border-light-gray shadow-sm">
      {/* Promo Bar */}
      <div className="bg-forest text-white text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium text-center py-2 px-4 shadow-sm relative z-20">
        Complimentary Standard Shipping & Returns On All Orders
      </div>

      {/* Main Navbar */}
      <nav className="w-full text-black px-4 md:px-8 py-3 md:py-5 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="inline-block">
            <Image
              src="/images/Blue and White Business Company Logo (2000 x 1000 px) (2000 x 500 px) (1700 x 500 px) (2).png"
              alt="Indian Rhino Logo"
              width={160}
              height={80}
              className="w-32 md:w-40 h-auto"
              priority
            />
          </Link>
        </div>

        {/* Center Links (Desktop only) */}
        <div className="hidden lg:flex flex-1 justify-center space-x-10 text-[13px] text-black ml-8">
          <Link href="/shop" className={linkHover}>SHOP</Link>
          <Link href="/shop?category=polos" className={linkHover}>THE POLO</Link>
          <Link href="/shop?category=tshirts" className={linkHover}>ESSENTIALS</Link>
          <Link href="/shop?category=shirts" className={linkHover}>SHIRTS</Link>
          <Link href="/our-story" className={linkHover}>OUR STORY</Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-black">
          <Link href="/shop" className="hover:text-forest transition-colors" aria-label="Search"><Search size={20} strokeWidth={1.5} /></Link>
          <Link href="/account" className="hover:text-forest transition-colors" aria-label="Account"><User size={20} strokeWidth={1.5} /></Link>
          <Link href="/cart" className="hover:text-forest transition-colors" aria-label="Cart"><ShoppingCart size={20} strokeWidth={1.5} /></Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden hover:text-forest transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-light-gray px-4 py-4 flex flex-col space-y-4">
          <Link href="/shop" className={`${linkHover} block`} onClick={() => setIsOpen(false)}>SHOP</Link>
          <Link href="/shop?category=polos" className={`${linkHover} block`} onClick={() => setIsOpen(false)}>THE POLO</Link>
          <Link href="/shop?category=tshirts" className={`${linkHover} block`} onClick={() => setIsOpen(false)}>ESSENTIALS</Link>
          <Link href="/shop?category=shirts" className={`${linkHover} block`} onClick={() => setIsOpen(false)}>SHIRTS</Link>
          <Link href="/our-story" className={`${linkHover} block`} onClick={() => setIsOpen(false)}>OUR STORY</Link>
        </div>
      )}
    </div>
  );
}
