import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function MaterialsPage() {
  return (
    <>
      <Navbar />
      <div className="h-28 sm:h-32 md:h-36 bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-8 sm:py-12 md:py-[100px] min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <FadeIn>
            <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-8 text-black">Materials</h1>
            <p className="font-sans text-[16px] text-dark-gray leading-[1.8]">
              We source the finest Indian cotton and sustainable fabrics to craft our essentials. Every thread is chosen for durability and comfort.
            </p>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
