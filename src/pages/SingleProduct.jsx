import Layout from '../layouts/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { getSingleProductUrl } from '../constants/apiEndPoints';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CartContext } from '../contexts/CartContext';
import StarRating from '../components/StarRating.js';

export default function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setError('Opps!Could not find the product');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    let isMounted = true;

    const timeOut = setTimeout(() => {
      if (isMounted) {
        setError('Ops!It took too long to fetch the product');
        setIsLoading(false);
      }
    }, 7000);

    const url = getSingleProductUrl(id);
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`error ${response.status}`);
        }
        const data = await response.json();
        if (isMounted) {
          setProduct(data.data);
          setIsLoading(false);
          clearTimeout(timeOut);
        }
      } catch (error) {
        console.error('Fetch error:', error);

        if (isMounted) {
          setError(error.message);
          setIsLoading(false);
          clearTimeout(timeOut);
        }
      }
    }

    fetchData();
    return () => {
      isMounted = false;
      clearTimeout(timeOut);
    };
  }, [id]);

  return (
    <Layout>
      {/* {error && <p>{error}</p>} */}
      {/* {error ? <p>{error}</p> : isLoading && <p>Loading...</p>} */}
      {/* <SingleProduct product={product} /> */}
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && <SingleProduct product={product} />}
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
  console.log(product);
  return (
    <section className="mt-12 mx-8">
      <div className="grid grid-rows-1 md:grid-cols-2 mt-4 gap-8 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto relative ">
        <div>
          <img
            src={product.image.url}
            alt={product.image.alt || 'product'}
            className="object-cover rounded-lg aspect-square"
          />
        </div>

        <div className="subgrid mb-8">
          <h1 className="">{product.title}</h1>

          {/* <h2 className="mt-16 mb-4">Product Details</h2> */}
          <h4 className="mt-8 mb-4">{product.description}</h4>
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

          <div className="mt-3">
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
            {product.rating > 1 ? (
              <div className="flex gap-4 my-2">
                <span>
                  <StarRating defaultRating={product.rating} size={22} />
                </span>
                <span>
                  {product.reviews.length > 1 ? (
                    <p>{product.reviews.length} Reviews</p>
                  ) : (
                    <p>(1 review)</p>
                  )}
                </span>
              </div>
            ) : (
              'No reviews yet'
            )}
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

// function RecommendedProducts() {
//   return (
//     <section>
//       <h2>Recommended Products</h2>
//       <div>
//         <img
//           src="https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="placeholder"
//           className="w-96 h-96"
//         />
//         <h1>Product name</h1>
//         <p>Product price</p>
//         <p>Product description</p>
//         <button>View Product</button>
//       </div>
//     </section>
//   );
// }
