import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] mb-8 text-black border-b border-light-gray/40 pb-6">Privacy Policy</h1>
            
            <div className="prose prose-sm font-sans text-dark-gray max-w-none space-y-8 leading-relaxed">
              <p>
                At Indian Rhino, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
              </p>

              <div>
                <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-black mb-3">1. Information We Collect</h2>
                <p>We collect information that you provide directly to us, such as when you create an account, place an order, or subscribe to our newsletter. This may include your name, email address, shipping address, and payment details.</p>
              </div>

              <div>
                <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-black mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to process transactions, send transaction notifications, improve our services, and communicate with you about new products or offers if you have opted in.</p>
              </div>

              <div>
                <h2 className="font-sans text-sm font-bold uppercase tracking-widest text-black mb-3">3. Data Security</h2>
                <p>We implement strict security measures to maintain the safety of your personal information. All payment processing is securely handled through Razorpay and we do not store your credit card information on our servers.</p>
              </div>

              <p className="text-sm opacity-80 mt-12 pt-8 border-t border-light-gray/40">
                Last updated: March 2026
              </p>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
