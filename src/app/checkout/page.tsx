import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <FadeIn>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Checkout Form */}
              <div className="w-full lg:w-3/5">
                <h1 className="font-serif text-[32px] mb-8 text-black">Checkout</h1>

                <div className="mb-10">
                  <h2 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-black border-b border-light-gray/40 pb-2">Contact Information</h2>
                  <input type="email" placeholder="Email" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors mb-4" />
                </div>

                <div className="mb-10">
                  <h2 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-black border-b border-light-gray/40 pb-2">Shipping Address</h2>
                  
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input type="text" placeholder="First Name" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                      <input type="text" placeholder="Last Name" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                    </div>
                    <input type="text" placeholder="Address" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input type="text" placeholder="City" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                      <select className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors cursor-pointer bg-white text-dark-gray">
                        <option>State</option>
                        <option>Maharashtra</option>
                        <option>Delhi</option>
                        <option>Karnataka</option>
                      </select>
                      <input type="text" placeholder="PIN Code" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                    </div>
                    <input type="tel" placeholder="Phone" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="font-sans text-sm font-bold uppercase tracking-widest mb-6 text-black border-b border-light-gray/40 pb-2">Payment</h2>
                  <div className="border border-light-gray p-6 mb-8 bg-beige/30">
                    <p className="font-sans text-sm text-dark-gray text-center">After clicking &quot;Pay Now&quot;, you will be redirected to Razorpay to complete your purchase securely.</p>
                  </div>
                  
                  <Button variant="primary" className="w-full py-4 text-[16px]">PAY NOW</Button>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="w-full lg:w-2/5">
                <div className="bg-beige p-8 sticky top-[100px]">
                  <h2 className="font-serif text-xl mb-6 text-black">Summary</h2>
                  
                  <div className="space-y-4 mb-6 pb-6 border-b border-light-gray/40">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-20 bg-light-gray flex-shrink-0 relative overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/polo_card.png" alt="Polo" className="object-cover w-full h-full" />
                        <span className="absolute -top-2 -right-2 bg-dark-gray text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full z-10">1</span>
                      </div>
                      <div className="flex-grow font-sans text-sm">
                        <p className="font-bold text-black border-b border-transparent">Rhino Classic Polo</p>
                        <p className="text-dark-gray mt-1">Forest Green / M</p>
                      </div>
                      <p className="font-sans text-sm text-black">₹1,299</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 font-sans text-sm text-dark-gray mb-6 pb-6 border-b border-light-gray/40">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-black">₹1,299</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-black">Free</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between font-sans text-xl mb-2 text-black border-transparent">
                    <span>Total</span>
                    <span className="font-bold">₹1,299</span>
                  </div>
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
