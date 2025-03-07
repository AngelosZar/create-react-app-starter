import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
//
export function ProductCard({ product }) {
  const [selectedProduct, setSelectedProduct] = useState('');
  const { addToCart } = useContext(CartContext);
  console.log(selectedProduct);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedProduct) {
      navigate(`/product/${selectedProduct}`);
    }
  }, [selectedProduct, navigate]);
  //
  function handleClick() {
    setSelectedProduct(product.id);
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-sm hover:shadow-lg hover:border-blue-3 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-y-2 mt-8 flex flex-col mx-auto relative ">
      <div
        className="max-w-sm grid grid-cols-1 md:grid-cols-2 gap-4 cursor-pointer "
        onClick={handleClick}
        // key={product.id}
      >
        <div>
          <img
            src={product.image.url}
            alt={product.image?.alt}
            className="object-cover rounded-lg aspect-square"
          />
        </div>
        <div className="flex flex-col pl-4 border-l-2 border-blue-3 relative">
          <h5 className="text-xl pb-4">{product.title}</h5>
          <p className="line-clamp-3 pr-4">{product.description} </p>
        </div>

        {product.discountedPrice < product.price ? (
          <div className="grid subgrid">
            <div className="flex gap-2 ">
              {' '}
              <p className="line-through">{product.price} </p>
              <p>{product.discountedPrice} nok</p>
            </div>
            <p>
              Save {Number(product.price - product.discountedPrice).toFixed(2)}{' '}
              nok
            </p>
          </div>
        ) : (
          <p className="mt-4">{product.price} nok</p>
        )}
      </div>
      <button
        className="btn-primary justify-self-end absolute self-end bottom-4 right-4"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

// function ReviewCard({ product }) {
//   return (
//     <div>
//       <h3>Reviews</h3>
//       {product.reviews.map(review => {
//         return (
//           <div key={review.id}>
//             <p>{review.username}</p>
//             <p>{review.rating}</p>
//             <p>{review.description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
