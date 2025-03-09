import { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';

import { ProductsFeed } from '../components/ProductsFeed';
import { HeroOnHome } from '../components/HeroOnHome';
import { QuoteSection } from '../components/QuoteSection';
import { ALLPRODUCTSURL } from '../constants/apiEndPoints';

export default function Home() {
  const [isLoading, setIsLoading] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(ALLPRODUCTSURL);
        if (!response.ok) {
          throw new Error(`error ${response.status} `);
        }
        const data = await response.json();
        setProducts(data.data);
        setIsLoading(false);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <HeroOnHome />
      <ProductsFeed
        products={products}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <QuoteSection />
    </Layout>
  );
}
