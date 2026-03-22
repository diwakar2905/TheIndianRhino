import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  images: string[];
}

export function ProductCard({ id, name, price, images }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group block text-center cursor-pointer">
      <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-[#F8F8F8]">
        {/* Default image */}
        <div className="absolute inset-0 transition-opacity duration-[0.6s] ease-in-out opacity-100 group-hover:opacity-0 z-10 delay-75 group-hover:delay-0">
          <Image src={images[0]} alt={name} fill className="object-cover" />
        </div>
        
        {/* Hover image (if available) */}
        {images.length > 1 && (
          <div className="absolute inset-0 transition-transform duration-[1s] ease-out scale-105 group-hover:scale-100 z-0">
            <Image src={images[1]} alt={`${name} alternate`} fill className="object-cover" />
          </div>
        )}

        {/* Hover Overlay Button */}
        <div className="absolute inset-x-0 bottom-0 p-0 sm:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[0.4s] ease-out flex items-center justify-center z-20">
          <Button variant="primary" className="w-full shadow-lg border-none !bg-black !text-white hover:!bg-[#222222] hover:!text-white transition-colors duration-300">
            QUICK ADD
          </Button>
        </div>
      </div>
      
      <h3 className="font-sans text-[15px] tracking-[0.1em] uppercase mb-[6px] text-black font-semibold">{name}</h3>
      <p className="font-sans text-[14px] text-dark-gray/80 mb-3 font-medium">{price}</p>
      
      {/* Lacoste style color swatches */}
      <div className="flex justify-center items-center gap-[6px]">
        <div className="w-[12px] h-[12px] rounded-full bg-forest border border-light-gray shadow-sm"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-black border border-light-gray shadow-sm"></div>
        <div className="w-[12px] h-[12px] rounded-full bg-white border border-light-gray shadow-sm"></div>
        <span className="text-[10px] text-dark-gray/60 ml-[4px] font-sans uppercase tracking-[0.1em] font-medium leading-none mt-[1px]">+ 3 COLORS</span>
      </div>
    </Link>
  );
}
