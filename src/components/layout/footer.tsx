import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark-gray)] text-[var(--color-light-gray)] pt-12 sm:pt-16 md:pt-20 pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div>
            <div className="mb-6">
              <Image 
                src="/images/Blue and White Business Company Logo (2000 x 1000 px) (2000 x 500 px) (1700 x 500 px) (1).png" 
                alt="Indian Rhino Logo" 
                width={240} 
                height={120}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-light-gray/80">
              Built on the idea that clothing should be simple, strong, and made to last.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">Shop</h4>
            <ul className="space-y-4 text-sm text-light-gray/80">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=polos" className="hover:text-white transition-colors">Polos</Link></li>
              <li><Link href="/shop?category=tshirts" className="hover:text-white transition-colors">T-Shirts</Link></li>
              <li><Link href="/shop?category=shirts" className="hover:text-white transition-colors">Shirts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">About</h4>
            <ul className="space-y-4 text-sm text-light-gray/80">
              <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/materials" className="hover:text-white transition-colors">Materials</Link></li>
              <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="/journal" className="hover:text-white transition-colors">Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-6 tracking-widest uppercase">Help</h4>
            <ul className="space-y-4 text-sm text-light-gray/80">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-light-gray/20 pt-6 md:pt-8 flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-xs text-light-gray/60">
          <p>© 2026 Indian Rhino. All Rights Reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
