"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  // If not on the homepage, navbar should be solid white instead of transparent
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 px-8 py-6 flex items-center justify-between ${
    isScrolled || !isHome
      ? "bg-white text-black border-b border-light-gray/50 py-4"
      : "bg-transparent text-white"
  }`;

  const linkHover = "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className={navClasses}>
      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="font-serif text-2xl tracking-wider font-bold">
          INDIAN RHINO
        </Link>
      </div>

      {/* Center Links */}
      <div className="flex-1 flex justify-center space-x-10 text-sm font-medium tracking-wide">
        <Link href="/shop" className={linkHover}>Shop</Link>
        <Link href="/shop?category=polos" className={linkHover}>Polos</Link>
        <Link href="/shop?category=tshirts" className={linkHover}>T-Shirts</Link>
        <Link href="/shop?category=shirts" className={linkHover}>Shirts</Link>
        <Link href="/our-story" className={linkHover}>Our Story</Link>
      </div>

      {/* Right Icons */}
      <div className="flex-1 flex justify-end space-x-6">
        <button className="hover:opacity-70 transition-opacity"><Search size={20} strokeWidth={1.5} /></button>
        <button className="hover:opacity-70 transition-opacity"><User size={20} strokeWidth={1.5} /></button>
        <button className="hover:opacity-70 transition-opacity"><ShoppingCart size={20} strokeWidth={1.5} /></button>
      </div>
    </nav>
  );
}
