"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Trash2 } from "lucide-react";
import { useAuth } from "@/components/providers/AuthProvider";

export default function CartPage() {
  const { user, isLoaded } = useAuth();

  if (!isLoaded) return null;

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
        <main className="flex-grow bg-white py-8 sm:py-12 md:py-[100px] min-h-[60vh] flex flex-col items-center justify-center">
          <div className="max-w-[500px] mx-auto px-4 sm:px-6 md:px-8 text-center">
            <FadeIn>
              <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-6 text-black">Sign In Required</h1>
              <p className="font-sans text-[16px] text-dark-gray mb-10">Please sign in or create an account to view and manage your cart.</p>
              <Link href="/account">
                <Button variant="primary" className="w-full">SIGN IN</Button>
              </Link>
            </FadeIn>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-[100px]">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-12 border-b border-light-gray/40 pb-6 text-black">Your Cart</h1>
            
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Cart Items */}
              <div className="w-full lg:w-2/3 space-y-8">
                {/* Single Item */}
                <div className="flex gap-6 pb-8 border-b border-light-gray/40">
                  <div className="relative w-32 aspect-[3/4] bg-light-gray flex-shrink-0">
                    <Image src="/images/polo_card.png" alt="Polo" fill className="object-cover" />
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Link href="/product/1" className="font-serif text-xl tracking-wide hover:text-forest transition-colors text-black">Rhino Classic Polo</Link>
                        <p className="font-sans text-lg text-black">₹1,299</p>
                      </div>
                      <p className="font-sans text-sm text-dark-gray mb-1">Color: Forest Green</p>
                      <p className="font-sans text-sm text-dark-gray">Size: M</p>
                    </div>
                    
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-light-gray">
                        <button className="px-4 py-2 hover:bg-light-gray transition-colors text-black">-</button>
                        <span className="px-4 font-sans text-sm text-black">1</span>
                        <button className="px-4 py-2 hover:bg-light-gray transition-colors text-black">+</button>
                      </div>
                      <button className="text-dark-gray hover:text-black transition-colors flex flex-row items-center gap-2 text-sm uppercase tracking-widest font-bold">
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-1/3">
                <div className="bg-beige p-8">
                  <h2 className="font-serif text-2xl mb-6 text-black">Order Summary</h2>
                  
                  <div className="space-y-4 font-sans text-sm text-dark-gray mb-6 pb-6 border-b border-light-gray/40">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-black">₹1,299</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-black">Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-sans text-lg font-bold mb-8 text-black">
                    <span>Total</span>
                    <span>₹1,299</span>
                  </div>

                  <Link href="/checkout" className="block w-full">
                    <Button variant="primary" className="w-full py-4 text-[16px]">PROCEED TO CHECKOUT</Button>
                  </Link>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
