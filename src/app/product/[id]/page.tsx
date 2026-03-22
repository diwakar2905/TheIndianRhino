import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowLeft, Truck, RefreshCw } from "lucide-react";

export default function ProductPage({ params }: { params: { id: string } }) {
  // Mock data for any ID
  const product = {
    name: "Rhino Classic Polo",
    price: "₹1,299",
    images: ["/images/polo_card.png", "/images/hero_polo.png", "/images/tshirt_card.png"],
    colors: [{ name: "Forest Green", hex: "bg-forest" }, { name: "Black", hex: "bg-black" }, { name: "White", hex: "bg-white" }],
    sizes: ["S", "M", "L", "XL"]
  };

  return (
    <>
      <Navbar />
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white">
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          
          <div className="mb-8">
            <Link href="/shop" className="inline-flex items-center text-sm font-sans text-dark-gray hover:text-black transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Shop
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
            
            {/* Left: Image Stack */}
            <div className="w-full md:w-3/5 space-y-4">
              <FadeIn>
                <div className="flex flex-col gap-4">
                  {product.images.map((img, idx) => (
                    <div key={idx} className="relative aspect-[3/4] w-full bg-light-gray">
                      <Image 
                        src={img} 
                        alt={`${product.name} view ${idx+1}`} 
                        fill 
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right: Product Info (Sticky) */}
            <div className="w-full md:w-2/5">
              <div className="sticky top-[120px]">
                <FadeIn delay={0.2}>
                  <h1 className="font-serif text-[32px] md:text-[40px] leading-tight mb-2 text-black">{product.name}</h1>
                  <p className="font-sans text-[20px] md:text-[24px] mb-8 text-black">{product.price}</p>

                  {/* Size Selection */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-sans font-bold text-sm tracking-wide uppercase">Size</span>
                      <Link href="/size-guide" className="text-sm text-dark-gray underline hover:text-black transition-colors">Size Guide</Link>
                    </div>
                    <div className="flex gap-3">
                      {product.sizes.map(size => (
                        <button key={size} className="w-12 h-12 border border-light-gray flex items-center justify-center font-sans text-sm hover:border-black hover:bg-black hover:text-white transition-all">
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div className="mb-10">
                    <span className="font-sans font-bold text-sm tracking-wide uppercase mb-3 block">Color: <span className="font-normal text-dark-gray">Forest Green</span></span>
                    <div className="flex gap-4">
                      {product.colors.map(color => (
                        <button key={color.name} className={`w-8 h-8 rounded-full ${color.hex} border-2 border-white ring-1 ring-light-gray hover:ring-black transition-all outline-none`} title={color.name}></button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <Button variant="primary" className="w-full mb-8 py-4 text-[16px]">ADD TO CART</Button>

                  {/* Details */}
                  <div className="prose prose-sm font-sans text-dark-gray mb-10">
                    <ul className="space-y-2 list-disc pl-4 marker:text-light-gray">
                      <li>100% Premium Cotton</li>
                      <li>Embroidered Rhino Logo</li>
                      <li>Regular Fit</li>
                      <li>Breathable Fabric</li>
                    </ul>
                  </div>

                  {/* Delivery & Returns */}
                  <div className="space-y-4 border-t border-b border-light-gray/40 py-6">
                    <div className="flex items-start gap-4 text-sm font-sans text-dark-gray">
                      <Truck size={20} className="text-black shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-black font-medium mb-1">Standard Delivery</p>
                        <p>5–7 working days. Free shipping on all prepaid orders.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 text-sm font-sans text-dark-gray">
                      <RefreshCw size={20} className="text-black shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-black font-medium mb-1">Easy Returns</p>
                        <p>15-day hassle-free return and exchange policy.</p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion / More Info (Mock) */}
                  <div className="mt-8 space-y-4 font-sans border-b border-light-gray/40 pb-6">
                    <details className="group [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                      <summary className="flex items-center justify-between text-black font-medium uppercase text-sm tracking-wider">
                        Description
                        <span className="transition group-open:rotate-180">
                          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                      </summary>
                      <p className="text-dark-gray mt-4 text-sm leading-relaxed">
                        The Rhino Classic Polo is crafted from ultra-soft, breathable premium cotton. Designed with a timeless regular fit, it features our signature embroidered logo on the chest. The quintessential piece for a modern, minimal wardrobe.
                      </p>
                    </details>
                  </div>

                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
