import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

export function ProductsFeed({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(searchQuery);
  // console.log(products);
  //
  // get the search query
  // start filtering after 2 or three characters
  // filter the products based on the search query
  // return the filtered products
  // if no search query, return all products
  // if no products, return an error message // no products found
  // if loading, return a loading message
  return (
    // map the products here // return <ProductCard />
    <section>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
}
