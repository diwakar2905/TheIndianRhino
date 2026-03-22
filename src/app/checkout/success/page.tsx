import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-[100px] min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <FadeIn>
            <div className="w-24 h-24 bg-forest text-white rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-6 text-black">Order Confirmed</h1>
            <p className="font-sans text-[16px] text-dark-gray mb-10 leading-[1.6]">
              Thank you for your purchase. Your order #IR10045 has been placed successfully. A confirmation email has been sent to your inbox.
            </p>
            <Link href="/shop">
              <Button variant="primary">CONTINUE SHOPPING</Button>
            </Link>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
