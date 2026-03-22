import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/ui/ProductCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Search } from "lucide-react";

export default function ShopPage() {
  const products = [
    { id: "1", name: "Rhino Classic Polo", price: "₹1,299", images: ["/images/polo_card.png", "/images/hero_polo.png"] },
    { id: "2", name: "Premium White Tee", price: "₹899", images: ["/images/tshirt_card.png", "/images/shirt_card.png"] },
    { id: "3", name: "Signature Black Shirt", price: "₹1,899", images: ["/images/shirt_card.png", "/images/polo_card.png"] },
    { id: "4", name: "Forest Green Essential", price: "₹999", images: ["/images/hero_polo.png", "/images/tshirt_card.png"] },
    { id: "5", name: "Beige Summer Polo", price: "₹1,499", images: ["/images/polo_card.png", "/images/shirt_card.png"] },
    { id: "6", name: "Classic Navy Tee", price: "₹899", images: ["/images/tshirt_card.png", "/images/hero_polo.png"] },
    { id: "7", name: "Oxford White Shirt", price: "₹1,899", images: ["/images/shirt_card.png", "/images/polo_card.png"] },
    { id: "8", name: "Charcoal Grey Polo", price: "₹1,299", images: ["/images/polo_card.png", "/images/tshirt_card.png"] },
    { id: "9", name: "Minimalist Black Tee", price: "₹899", images: ["/images/tshirt_card.png", "/images/shirt_card.png"] },
  ];

  return (
    <>
      <Navbar />
      {/* Spacer for sticky navbar */}
      <div className="h-[80px] bg-white w-full"></div>
      
      <main className="flex-grow bg-white">
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10 pb-4 border-b border-light-gray/60">
            <h1 className="font-serif text-[32px] mb-4 md:mb-0">All Products</h1>
            <div className="flex gap-8 text-sm font-sans">
              <span className="text-dark-gray">Showing {products.length} products</span>
              <div className="flex items-center gap-2">
                <span className="text-dark-gray">Sort by:</span>
                <select className="bg-transparent border-none outline-none font-medium cursor-pointer">
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-[240px] flex-shrink-0">
              <FadeIn>
                <div className="space-y-8 sticky top-[100px]">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-sans font-bold text-[14px] uppercase tracking-widest mb-4">Category</h3>
                    <ul className="space-y-3 text-[14px] text-dark-gray">
                      <li><label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"><input type="checkbox" className="accent-black w-4 h-4 cursor-pointer" /> Polos</label></li>
                      <li><label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"><input type="checkbox" className="accent-black w-4 h-4 cursor-pointer" /> T-Shirts</label></li>
                      <li><label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors"><input type="checkbox" className="accent-black w-4 h-4 cursor-pointer" /> Shirts</label></li>
                    </ul>
                  </div>
                  
                  {/* Size Filter */}
                  <div>
                    <h3 className="font-sans font-bold text-[14px] uppercase tracking-widest mb-4">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {["S", "M", "L", "XL"].map(size => (
                        <button key={size} className="w-10 h-10 border border-light-gray flex items-center justify-center text-sm hover:border-black transition-colors">{size}</button>
                      ))}
                    </div>
                  </div>

                  {/* Color Filter */}
                  <div>
                    <h3 className="font-sans font-bold text-[14px] uppercase tracking-widest mb-4">Color</h3>
                    <div className="flex flex-wrap gap-3">
                      <button className="w-6 h-6 rounded-full bg-forest border border-light-gray" title="Forest Green"></button>
                      <button className="w-6 h-6 rounded-full bg-black border border-light-gray" title="Black"></button>
                      <button className="w-6 h-6 rounded-full bg-white border border-light-gray" title="White"></button>
                      <button className="w-6 h-6 rounded-full bg-beige border border-light-gray" title="Beige"></button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </aside>

            {/* Product Grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                {products.map((product, idx) => (
                  <FadeIn key={product.id} delay={(idx % 3) * 0.1}>
                    <ProductCard {...product} />
                  </FadeIn>
                ))}
              </div>
              
              {/* Pagination Mock */}
              <div className="mt-20 text-center flex justify-center items-center space-x-2">
                <span className="w-10 h-10 flex items-center justify-center border border-black font-medium">1</span>
                <span className="w-10 h-10 flex items-center justify-center text-dark-gray hover:text-black hover:bg-light-gray cursor-pointer">2</span>
                <span className="w-10 h-10 flex items-center justify-center text-dark-gray hover:text-black hover:bg-light-gray cursor-pointer">3</span>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
