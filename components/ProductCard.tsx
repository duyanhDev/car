import { Product } from '@/lib/data';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  const formatToVND = (amount: number) => {
    return new Intl.NumberFormat('de-DE').format(amount) + ' VNĐ';
  }
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{product.category}</div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary">
            {formatToVND(product.price)}
          </span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
