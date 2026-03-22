import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ShippingReturnsPage() {
  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] mb-8 text-black border-b border-light-gray/40 pb-6">Shipping & Returns</h1>
            
            <div className="prose prose-sm font-sans text-dark-gray max-w-none space-y-12">
              
              <section>
                <h2 className="font-sans text-lg font-bold uppercase tracking-widest text-black mb-4">Shipping Policy</h2>
                <p className="leading-relaxed mb-4">
                  We offer free standard shipping on all prepaid orders across India. For Cash on Delivery (COD) orders, a nominal handling fee is applied at checkout.
                </p>
                <ul className="list-disc pl-5 leading-relaxed space-y-2">
                  <li><strong>Standard Delivery:</strong> 5-7 business days</li>
                  <li><strong>Express Delivery:</strong> 2-3 business days (Available in select PIN codes)</li>
                </ul>
                <p className="leading-relaxed mt-4 text-sm opacity-80">
                  Please note that orders are processed within 24-48 hours. Orders placed on weekends or public holidays will be processed on the next business day.
                </p>
              </section>

              <section>
                <h2 className="font-sans text-lg font-bold uppercase tracking-widest text-black mb-4">Returns & Exchanges</h2>
                <p className="leading-relaxed mb-4">
                  We believe in our products. However, if you are not entirely satisfied with your purchase, we offer a hassle-free 15-day return and exchange policy.
                </p>
                <p className="leading-relaxed mb-4">
                  To be eligible for a return or exchange, your item must be unused, unwashed, and in the same condition that you received it, complete with the original tags and packaging.
                </p>
                <h3 className="font-sans text-sm font-bold uppercase text-black mb-2 mt-6">How to initiate a return:</h3>
                <ol className="list-decimal pl-5 leading-relaxed space-y-2 text-sm">
                  <li>Visit our Returns Portal and enter your Order ID.</li>
                  <li>Select the item(s) you wish to return and the reason.</li>
                  <li>Our courier partner will pick up the package within 48 hours.</li>
                  <li>Once received and inspected, the refund or exchange will be processed within 5-7 business days.</li>
                </ol>
              </section>

            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
