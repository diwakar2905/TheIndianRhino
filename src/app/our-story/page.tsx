import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[70vh] w-full flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_polo.png"
            alt="Indian Rhino Brand Banner"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-8">
          <FadeIn>
            <h1 className="font-serif text-[48px] md:text-[64px] text-white tracking-widest mb-4">OUR STORY</h1>
            <p className="font-sans text-white text-lg tracking-wide opacity-90 max-w-lg mx-auto">
              Simplicity is the ultimate sophistication.
            </p>
          </FadeIn>
        </div>
      </section>

      <main className="bg-beige">
        
        {/* Editorial Section 1 */}
        <section className="py-[120px] px-8 max-w-[1000px] mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-[32px] md:text-[40px] mb-8 text-black">Our Philosophy</h2>
            <p className="font-sans text-[16px] md:text-[20px] leading-[2] text-dark-gray max-w-3xl mx-auto">
              Indian Rhino was born out of a desire for better basics. We noticed a gap in the market for high-quality, minimalistic everyday wear that doesn't compromise on fabric or fit. We believe that true luxury lies in the details—sharp cuts, enduring materials, and an absolute absence of unnecessary clutter.
            </p>
          </FadeIn>
        </section>

        {/* Editorial Split Section */}
        <section className="py-[80px] bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <div className="relative aspect-[4/5] bg-light-gray">
                    <Image src="/images/polo_card.png" fill className="object-cover" alt="Small batch production" />
                  </div>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2">
                <FadeIn delay={0.2}>
                  <h2 className="font-serif text-[32px] mb-6 text-black">Why Rhino</h2>
                  <p className="font-sans text-[16px] leading-[1.8] text-dark-gray mb-6">
                    The rhinoceros embodies strength, grounding, and quiet power. These are the exact traits we weave into our garments. Our clothing isn't delicate; it's designed to be lived in. 
                  </p>
                  <p className="font-sans text-[16px] leading-[1.8] text-dark-gray">
                    We intentionally limit our color palette to monochrome and earthy tones, primarily our signature Forest Green, ensuring every piece works effortlessly with your existing wardrobe.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Split Section Reversed */}
        <section className="py-[120px]">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2">
                <FadeIn>
                  <div className="relative aspect-[4/5] bg-light-gray">
                    <Image src="/images/shirt_card.png" fill className="object-cover" alt="Made in India" />
                  </div>
                </FadeIn>
              </div>
              <div className="w-full md:w-1/2">
                <FadeIn delay={0.2}>
                  <h2 className="font-serif text-[32px] mb-6 text-black">Small Batch. Made in India.</h2>
                  <p className="font-sans text-[16px] leading-[1.8] text-dark-gray mb-6">
                    We run away from fast fashion. By focusing on small-batch production runs, we maintain strict quality control and minimize waste. 
                  </p>
                  <p className="font-sans text-[16px] leading-[1.8] text-dark-gray">
                    Every garment is proudly crafted in India, utilizing the rich textile heritage of our weavers while applying a sharp, modern, global design philosophy. Built strong. Worn simple.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
