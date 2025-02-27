import Layout from '../layouts/Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
//
export default function Cart() {
  //
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    setCartItems,
    cartItems,
    cartTotal,
    deleteFromCart,
  } = useContext(CartContext);
  console.log(cart);

  return (
    <Layout>
      <section className="flex flex-col md:flex-row gap-4">
        {/* <CheckoutForm /> */}
        <OrderSummary
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          setCartItems={setCartItems}
          cartTotal={cartTotal}
          cartItems={cartItems}
          deleteFromCart={deleteFromCart}
        />
      </section>
    </Layout>
  );
}

function CheckoutForm() {
  // refine form fields
  // Add form validation
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Address" />
        <button type="submit">send</button>
      </form>
    </div>
  );
}
function OrderSummary({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  cartItems,
  setCartItems,
  cartTotal,
  deleteFromCart,
}) {
  // display cart items
  // calculate
  // display total
  return (
    <section className="">
      <div className="">
        <CartItem
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
          cartItems={cartItems}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="mt-12 border-y-2 border-blue-3 py-1 md:px-4">
        <h3>Order Summary</h3>
        <p>Subtotal: {cartTotal}</p>
        <p>Shipping: {cartItems} products</p>
        <button onClick={clearCart}>Empty cart</button>
        <br />
        <p>add promo code</p>
      </div>
    </section>
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
      className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4"
    >
      <div className="flex flex-col gap-2 justify-center items-center">
        <img
          src={product.image.url}
          alt={product.title}
          className="object-cover  max-w-44  max-h-auto flex-shrink-0 "
        />
      </div>
      <div className="flex flex-col gap-2 max-w-sm justify-center items-center text-center sm:text-start sm:items-start sm:justify-start px-4">
        <h3>{product.title}</h3>
        <p className="">{product.description}</p>
        {/* calculate total discount / how much user saves  */}
        {/* {product.discountedPrice < product.price ? (
          <div className="grid subgrid gap-2 mb-6">
            <div className="flex gap-2 ">
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
        )} */}
        <p>Price: {product.price}</p>
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
