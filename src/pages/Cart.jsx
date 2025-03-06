import Layout from '../layouts/Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems,
    cartItems,
    cartTotal,
    deleteFromCart,
    cartTotalDiscount,
  } = useContext(CartContext);

  console.log(cart);
  console.log(cartTotalDiscount);
  const navigate = useNavigate();
  return (
    <Layout>
      {cart.length > 0 ? (
        // <section className="flex flex-col md:flex-row gap-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 w-full">
          <CartItems />
          {/* cartTotal, clearCart, cartTotalDiscount */}
          <CartSummary
            cartTotal={cartTotal}
            clearCart={clearCart}
            cartTotalDiscount={cartTotalDiscount}
          />
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
          <h1 className="text-center ">Your cart is empty</h1>
          <h2 className="text-blue-2">Go on shopping .. Fill it up</h2>
          <button className="btn-primary" onClick={() => navigate('/')}>
            Go shopping
          </button>
        </div>
      )}
    </Layout>
  );
}

function CartItems() {
  const {
    cart,
    addToCart,
    removeFromCart,
    cartTotal,
    cartItems,
    deleteFromCart,
    cartTotalDiscount,
  } = useContext(CartContext);
  return (
    <div>
      {' '}
      <CartItem
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        cartItems={cartItems}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

function CartItem({
  cart,
  addToCart,
  removeFromCart,
  cartTotal,
  cartItems,
  deleteFromCart,
}) {
  return cart.map(product => (
    <div
      key={product.id}
      // className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4 shadow-lg max-w-sm"
      className="flex flex-col gap-4 sm:flex-row justify-between items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4 shadow-lg max-w-lg"
    >
      <div className="flex flex-col gap-2 justify-start max-w-44 max-h-auto flex-shrink-1 w-[30%] ">
        <img
          src={product.image.url}
          alt={product.title}
          className="object-cover max-w-44 max-h-auto flex-shrink-1 aspect-square "
        />
      </div>
      <div className="flex flex-col gap-2 max-w-sm justify-start items-center text-center sm:text-start sm:items-start sm:justify-start px-4 pt-8 w-[70%]">
        <h3>{product.title}</h3>
        <p className="">{product.description}</p>

        {product.discountedPrice < product.price ? (
          <div className="grid subgrid gap-2 mb-6">
            <div className="flex gap-2 ">
              <p className="line-through">{product.price} </p>
              <p>{product.discountedPrice} nok</p>
            </div>
            <p className="text-blue-2 font-semi-bold">
              Save{' '}
              {product.quantity *
                (product.price - product.discountedPrice).toFixed(2)}
              nok
            </p>
          </div>
        ) : (
          <p className="mt-4">{product.price} nok</p>
        )}

        <span className="flex flex-row gap-4">
          <button onClick={() => removeFromCart(product)}>-</button>
          <p>{product.quantity}</p>
          <button onClick={() => addToCart(product)}>+</button>
        </span>
        <span className="self-end">
          <button
            className="hover:text-red-500"
            onClick={() => deleteFromCart(product)}
          >
            {/* display message are you sure you want to delete the item */}
            Remove
          </button>
        </span>
      </div>
    </div>
  ));
}

function CartSummary({ cartTotal, clearCart, cartTotalDiscount }) {
  const navigate = useNavigate();
  return (
    <div className="mt-12 border-t-2 border-blue-3 py-1 flex flex-col gap-2 md:px-4 sticky top-0">
      <h2 className="text-blue-2">Order Summary</h2>
      <p>Subtotal: {Number(cartTotal).toFixed(2)} nok</p>
      <p>Discount: {Math.round(cartTotalDiscount)} nok</p>
      <hr className="w-[30%] h-1 bg-blue-2" />
      <p>Shipping: 0 nok</p>
      <p>Tax: 0 nok</p>
      <hr className="w-[30%] h-1 bg-blue-2" />
      <h4 className="text-blue-2">Total: {Number(cartTotal).toFixed(2)} nok</h4>
      <button
        onClick={clearCart}
        className="text-red-500 hover:text-red-700 self-start"
      >
        Empty cart
      </button>
      <button className="btn-primary" onClick={() => navigate('/Checkout')}>
        Checkout
      </button>
    </div>
  );
}
