import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-20">
        <div className="max-w-[800px] mx-auto px-8">
          <FadeIn>
            <h1 className="font-serif text-[40px] mb-6 text-black">Contact Us</h1>
            <p className="font-sans text-dark-gray mb-12">
              Have a question about your order, sizing, or our products? 
              Fill out the form below or email us at <a href="mailto:support@indianrhino.in" className="underline hover:text-black">support@indianrhino.in</a>.
            </p>

            <form className="space-y-6 max-w-[600px]">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Name</label>
                  <input type="text" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                </div>
                <div className="w-full">
                  <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Email</label>
                  <input type="email" className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block font-sans text-sm font-bold uppercase tracking-widest mb-2 text-black">Message</label>
                <textarea rows={6} className="w-full border border-light-gray p-4 focus:outline-none focus:border-black font-sans text-sm resize-none transition-colors"></textarea>
              </div>

              <Button variant="primary" className="px-10">SEND MESSAGE</Button>
            </form>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
