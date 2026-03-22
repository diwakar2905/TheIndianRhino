import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] mb-12 border-b border-light-gray/40 pb-6 text-black">Your Cart</h1>
            
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
