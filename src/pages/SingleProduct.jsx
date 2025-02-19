import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSingleProductUrl } from '../constants/apiEndPoints';
//
export default function SingleProductPage() {
  const [product, setProduct] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const url = getSingleProductUrl(id);
    console.log(url);
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.data);
        console.log(data);
      } catch (error) {}
    }
    fetchData();
  }, [id]);
  return (
    <Layout>
      <SingleProduct product={product} />
      {/* how to add recommended products ? */}
    </Layout>
  );
}

function SingleProduct({ product }) {
  //  add a loading spinner / or the sceleton thing
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <div>
        <img src={product.image.url} alt="placeholder" className="w-96 h-96" />
        <h1>Single Product Page</h1>
        <p>{product.title}</p>
        <p>
          {product.discountedPrice ? product.discountedPrice : product.price}
        </p>
        <p>{product.description}</p>
        {/*  */}
        <p>Rating :{product.rating}</p>
        <button>Buy Now</button>
      </div>
    </section>
  );
}

function RecommendedProducts() {
  // map maybe random products or products from the same category
  // use card component //ProductCard // to display the recommended products
  return (
    <section>
      <h2>Recommended Products</h2>
      <div>
        <img
          src="https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="placeholder"
          className="w-96 h-96"
        />
        <h1>Product name</h1>
        <p>Product price</p>
        <p>Product description</p>
        <button>View Product</button>
      </div>
    </section>
  );
}
