import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSingleProductUrl } from '../constants/apiEndPoints';
//
export default function SingleProductPage() {
  const [product, setProduct] = useState(null);
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
        console.log(data.data);
        console.log(data.data.tags);
      } catch (error) {
        console.error('Fetch error:', error);
      }
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
        <h2>product</h2>
        <img
          src={product.image.url}
          alt={product.image.alt || 'product'}
          className="w-96 h-96"
        />
        <p>{product.title}</p>
        <div>
          {Number(product.discountedPrice) < Number(product.price) ? (
            <span>
              <p className="line-through">{product.price}</p>
              <p className="">{product.discountedPrice}</p>
            </span>
          ) : (
            <p className="">{product.price}</p>
          )}
        </div>

        <p>{product.description}</p>

        <p>{product.rating}</p>
        <h2>reviews</h2>
        <div>
          {product.reviews.length > 0
            ? product.reviews.map(review => (
                <div key={review.id}>
                  <h5> users review 👇</h5>
                  <p>{review.username}</p>
                  <p>{review.rating}</p>
                  <p>{review.description}</p>
                </div>
              ))
            : null}
        </div>
        <h2>tags</h2>
        <div>
          {product.tags.length > 0
            ? product.tags.map((tag, index) => (
                <ul key={index}>
                  <li>{tag}</li>
                </ul>
              ))
            : null}
        </div>
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
