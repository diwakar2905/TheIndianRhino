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
    <Link href={`/product/${id}`} className="group block text-center">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-light-gray">
        {/* Default image */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
          <Image src={images[0]} alt={name} fill className="object-cover" />
        </div>
        
        {/* Hover image (if available) */}
        {images.length > 1 && (
          <div className="absolute inset-0 transition-transform duration-700 scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100">
            <Image src={images[1]} alt={`${name} alternate`} fill className="object-cover" />
          </div>
        )}

        {/* Hover Overlay Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center bg-gradient-to-t from-black/20 to-transparent">
          <Button variant="primary" className="w-full shadow-md bg-white text-black border-transparent hover:bg-black hover:text-white">
            Add to Cart
          </Button>
        </div>
      </div>
      <h3 className="font-sans text-[16px] tracking-wide mb-1 text-black">{name}</h3>
      <p className="font-sans text-[14px] text-dark-gray">{price}</p>
    </Link>
  );
}
