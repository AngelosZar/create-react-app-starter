import { ProductCard } from './ProductCard';

export function ProductsFeed({ products }) {
  return (
    // map the products here // return <ProductCard />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
