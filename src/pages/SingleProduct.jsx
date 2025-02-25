import Layout from '../layouts/Layout';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSingleProductUrl } from '../constants/apiEndPoints';
import { ChevronDown } from 'lucide-react';
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
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  //  add a loading spinner / or the sceleton thing
  if (!product) {
    return <p>Loading...</p>;
  }
  function toggleReviewDropdown() {
    setIsReviewsOpen(!isReviewsOpen);
  }
  return (
    <section className="mt-12 relative">
      <div className="grid  grid-rows-1  md:grid-cols-2 mt-4 gap-8 bg-slate-100 p-8 rounded-lg shadow-md">
        <div>
          <h1 className="mb-6">{product.title}</h1>
          <img
            src={product.image.url}
            alt={product.image.alt || 'product'}
            className="object-cover rounded-lg aspect-square "
          />
        </div>

        <div className="subgrid">
          <h2 className="mt-16 mb-4">Product Details</h2>
          <h4 className="mb-4">{product.description}</h4>
          {product.discountedPrice < product.price ? (
            <div className="grid subgrid gap-2 mb-6">
              <div className="flex gap-2 ">
                <p className="line-through">{product.price} </p>
                <p>{product.discountedPrice} nok</p>
              </div>
              <p>
                Save{' '}
                {Number(product.price - product.discountedPrice).toFixed(2)} nok
              </p>
            </div>
          ) : (
            <p className="mt-4">{product.price} nok</p>
          )}
          <p className="mb-4">
            Rating : {product.rating} Stars from{' '}
            {product.reviews.length === 1
              ? '1 review'
              : `${product.reviews.length} reviews`}
          </p>

          <div>
            {product.tags.length === 1 ? (
              <h3>Category</h3>
            ) : (
              <h3>Categories</h3>
            )}
            <div className="mb-6">
              <ul className="mt-1 flex gap-2">
                {product.tags.length > 0
                  ? product.tags.map((tag, index) => (
                      <li className="" key={index}>
                        ⸰ {tag}
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div>
            {product.reviews.length > 0 ? (
              <button
                className="flex items-center gap-2"
                onClick={toggleReviewDropdown}
              >
                Users reviews
                <span>
                  <ChevronDown className="mt-6  -ml-2 transform transition-transform hover:scale-125  hover:text-blue-3" />
                </span>
              </button>
            ) : null}
          </div>
          <div>
            {isReviewsOpen &&
              (product.reviews.length > 0
                ? product.reviews.map(review => (
                    <div key={review.id}>
                      <h5> users review 👇</h5>
                      <p>{review.username}</p>
                      <p>{review.rating}</p>
                      <p>{review.description}</p>
                    </div>
                  ))
                : null)}
          </div>
          <div className="absolute bottom-4 right-4 flex gap-4">
            <button className="btn-primary">Add to cart</button>
            <button className="btn-secondary">Buy now</button>
          </div>
        </div>
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
