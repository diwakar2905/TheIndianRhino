import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-[100px]">
        <div className="max-w-[800px] mx-auto px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-8 text-black text-center">Terms of Service</h1>
            <div className="prose prose-sm max-w-none text-dark-gray font-sans leading-[1.8]">
              <p>By accessing our website and purchasing our products, you agree to be bound by these terms.</p>
              <h2 className="text-black font-semibold mt-8 mb-4">1. General Conditions</h2>
              <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
              <h2 className="text-black font-semibold mt-8 mb-4">2. Products & Pricing</h2>
              <p>Prices for our products are subject to change without notice.</p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
