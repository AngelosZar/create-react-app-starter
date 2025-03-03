import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

export function ProductsFeed({ products, isLoading, setIsLoading }) {
  const [searchQuery, setSearchQuery] = useState('');

  const [error, setError] = useState(null);
  console.log(searchQuery);
  // console.log(products);
  //
  // get the search query ✅
  // start filtering after 2 or three characters
  // filter the products based on the search query
  // return the filtered products
  // if no search query, return all products
  // if no products, return an error message // no products found
  // if loading, return a loading message
  const filteredProd = products.filter(product => {
    if (!searchQuery) {
      return products;
    } else
      return (
        product?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product?.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        // error with tags array ??
        product?.tags.some(tag =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
  });

  return (
    // map the products here // return <ProductCard />
    <section>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading && <p>Loading...</p>}
        {/* add a loading spinner later */}
        {filteredProd.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
