import Layout from '../layouts/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getSingleProductUrl } from '../constants/apiEndPoints';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';

//
export default function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const url = getSingleProductUrl(id);
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error ${response.status}`);
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <Layout>
      <SingleProduct product={product} />
    </Layout>
  );
}

function SingleProduct({ product }) {
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const { addToCart } = useContext(CartContext);
  //  add a loading spinner / or the sceleton thing

  const navigate = useNavigate();
  if (!product) {
    return <p>Loading...</p>;
  }
  function toggleReviewDropdown() {
    setIsReviewsOpen(!isReviewsOpen);
  }
  return (
    <section className="mt-12 mx-8">
      <div className="grid grid-rows-1 md:grid-cols-2 mt-4 gap-8 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto relative ">
        <div>
          <h1 className="mb-6">{product.title}</h1>
          <img
            src={product.image.url}
            alt={product.image.alt || 'product'}
            className="object-cover rounded-lg aspect-square "
          />
        </div>

        <div className="subgrid mb-8">
          <h2 className="mt-16 mb-4">Product Details</h2>
          <h4 className="mb-4">{product.description}</h4>
          {product.discountedPrice < product.price ? (
            <div className="grid subgrid gap-2 mb-6">
              <div className="flex gap-2 ">
                <p className="line-through">{product.price} </p>
                <p>{product.discountedPrice} nok</p>
              </div>
              <p className="text-blue-2 font-semi-bold">
                Save{' '}
                {Number(product.price - product.discountedPrice).toFixed(2)} nok
              </p>
            </div>
          ) : (
            <p className="mt-4">{product.price} nok</p>
          )}

          {product.rating > 1 ? (
            <p className="mb-4">
              Rating : {product.rating} Stars from{' '}
              {product.reviews.length === 1
                ? '1 review'
                : `${product.reviews.length} reviews`}
            </p>
          ) : (
            'No reviews yet'
          )}

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
                {isReviewsOpen ? (
                  <span>
                    <ChevronUp className="mt-6 -ml-2 transform transition-transform hover:scale-125  hover:text-blue-3" />
                  </span>
                ) : (
                  <span>
                    <ChevronDown className="mt-6 -ml-2 transform transition-transform hover:scale-125  hover:text-blue-3" />
                  </span>
                )}
              </button>
            ) : null}
          </div>
          <div>
            {isReviewsOpen &&
              (product.reviews.length > 0
                ? product.reviews.map(review => (
                    <div
                      key={review.id}
                      className="mb-4 border-2 p-2 rounded-xl border-blue-3"
                    >
                      <h5> Users review</h5>
                      <p>User: {review.username}</p>
                      <p> Rating: {review.rating}</p>
                      <p className="text-blue-2">{review.description}</p>
                    </div>
                  ))
                : null)}
          </div>
          <div className="absolute bottom-4 right-4 flex gap-4">
            <button className="btn-primary" onClick={() => addToCart(product)}>
              Add to cart
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                addToCart(product);
                navigate('/cart');
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecommendedProducts() {
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
