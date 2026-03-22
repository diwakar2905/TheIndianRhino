import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="relative h-screen w-full flex items-center bg-black overflow-hidden relative">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/hero_polo.png"
              alt="Model wearing Indian Rhino Polo"
              fill
              className="object-cover object-center opacity-70"
              priority
            />
          </div>
          
          <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full flex justify-start">
            <FadeIn>
              <h1 className="font-serif text-[56px] md:text-[64px] text-white leading-[1.1] mb-6 tracking-wide">
                INDIAN RHINO<br />
                <span className="italic font-light">Built Strong. Worn Simple.</span>
              </h1>
              <p className="text-white text-[16px] md:text-[18px] max-w-md font-sans mb-12 opacity-90 leading-[1.6]">
                Premium essentials designed for everyday wear. No clutter, just quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop?category=polos">
                  <Button variant="secondary" className="w-full sm:w-auto">SHOP POLOS</Button>
                </Link>
                <Link href="/shop?category=tshirts">
                  <Button variant="secondary" className="w-full sm:w-auto">SHOP T-SHIRTS</Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 2: CATEGORIES */}
        <section className="py-[80px] bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                {[
                  { name: "POLOS", img: "/images/polo_card.png", link: "/shop?category=polos" },
                  { name: "T-SHIRTS", img: "/images/tshirt_card.png", link: "/shop?category=tshirts" },
                  { name: "SHIRTS", img: "/images/shirt_card.png", link: "/shop?category=shirts" }
                ].map((category, idx) => (
                  <Link href={category.link} key={idx} className="group relative block overflow-hidden bg-light-gray aspect-[3/4]">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={category.img}
                        alt={`${category.name} category`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-8 left-0 w-full text-center">
                      <span className="text-white font-sans font-bold text-[20px] tracking-widest relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                        {category.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 3: FEATURED PRODUCTS */}
        <section className="py-[80px] bg-white border-t border-light-gray/20">
          <div className="max-w-[1200px] mx-auto px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="font-serif text-[36px] md:text-[42px] tracking-wide text-black relative inline-block pb-4 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-[1px] after:bg-black">
                  DROP 001 — FOUNDERS COLLECTION
                </h2>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px]">
              {[
                { name: "Rhino Classic Polo", price: "₹1,299", img: "/images/polo_card.png" },
                { name: "Essential White Tee", price: "₹899", img: "/images/tshirt_card.png" },
                { name: "Premium Oxford Shirt", price: "₹1,899", img: "/images/shirt_card.png" },
                { name: "Everyday Black Tee", price: "₹899", img: "/images/tshirt_card.png" }, // Reusing image
              ].map((product, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href="/product/1" className="group block text-center">
                    <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-beige">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <Image src={product.img} alt={product.name} fill className="object-cover" />
                      </div>
                      
                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <Button variant="primary" className="shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-sans text-[16px] md:text-[20px] tracking-wide mb-2 text-black">{product.name}</h3>
                    <p className="font-sans text-[14px] text-dark-gray">{product.price}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: BRAND STORY BANNER */}
        <section className="py-[120px] bg-beige">
          <div className="max-w-[800px] mx-auto px-8 text-center text-black">
            <FadeIn>
              <h2 className="font-serif text-[36px] md:text-[42px] mb-8 leading-[1.2]">
                Strength. Simplicity. Timeless Design.
              </h2>
              <p className="font-sans text-[16px] md:text-[18px] leading-[1.8] mb-12 max-w-2xl mx-auto opacity-80">
                Indian Rhino is built on the idea that clothing should be simple,
                strong, and made to last — not fast fashion.
              </p>
              <Link href="/our-story">
                <Button variant="primary">OUR STORY</Button>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 5: NEWSLETTER */}
        <section className="py-[120px] bg-white border-b border-light-gray/40">
          <div className="max-w-[700px] mx-auto px-8 text-center text-black">
            <FadeIn>
              <h2 className="font-serif text-[36px] tracking-widest uppercase mb-4">Join The Herd</h2>
              <p className="font-sans text-[14px] md:text-[16px] mb-10 opacity-70">
                Be the first to know about new drops and exclusive releases.
              </p>
              <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="flex-grow px-6 py-4 border border-black font-sans text-sm focus:outline-none focus:ring-1 focus:ring-forest bg-white text-black"
                />
                {/* To get sharp edges with button alignment, use border-black */}
                <Button variant="primary" className="border-l-0">Subscribe</Button>
              </form>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 6: INSTAGRAM GRID */}
        <section className="py-[80px] bg-white">
          <div className="max-w-[1200px] mx-auto px-8 mb-12 text-center">
            <FadeIn>
              <h2 className="font-sans text-[20px] tracking-[0.2em] font-bold text-black hover:text-forest transition-colors transition-colors">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">@INDIANRHINO</a>
              </h2>
            </FadeIn>
          </div>
          {/* Edge to edge grid on mobile, margin on desktop if desired */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-0">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <a href="#" key={i} className="relative aspect-square overflow-hidden group">
                <Image 
                  src={
                    i % 3 === 0 
                      ? "/images/polo_card.png" 
                      : i % 3 === 1 
                        ? "/images/shirt_card.png" 
                        : "/images/tshirt_card.png"
                  } 
                  alt={`Instagram ${i}`} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
