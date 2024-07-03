import { ProductCard } from '@/app/products/components';
import { products } from '@/app/products/data/products';


export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 align-items-center justify-items-center">
      {
        products.map( (product) => (
          <ProductCard key={ product.id } {...product}/>
        ))
      }
    </div>
  );
}