import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white py-[100px] min-h-[60vh] flex flex-col items-center justify-center">
        <div className="max-w-[700px] mx-auto px-8 text-center">
          <FadeIn>
            <h1 className="font-serif text-[40px] tracking-[0.15em] uppercase mb-8 text-black">Journal</h1>
            <p className="font-sans text-[16px] text-dark-gray leading-[1.8]">
              Coming soon. Notes on style, culture, and our process.
            </p>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </>
  );
}
