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
}) {
  // display cart items
  // calculate
  // display total
  return (
    <section>
      <CartItem
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        cartItems={cartItems}
      />
      <h3>Order Summary</h3>
      <p>Subtotal: {cartTotal}</p>
      <p>Shipping: {cartItems} products</p>
      <button onClick={clearCart}>Empty cart</button>
      <br />
      <p>add promo code</p>
    </section>
  );
}
function CartItem({ cart, addToCart, removeFromCart, cartTotal, cartItems }) {
  // render product details
  // remove product // add and minus on quantity
  return cart.map(product => (
    <div key={product.id}>
      <h3>{product.title}</h3>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p></p>
      <button onClick={() => addToCart(product)}>+</button>
      <p>fd</p>
      <button onClick={() => removeFromCart(product)}>-</button>
    </div>
  ));
}

// </div>)
// <CartItem />
// <div>
//   <h3>Product Name</h3>
//   <p>Price: 10</p>
//   <p>Quantity: 2</p>
//   <p>Total: 20</p>
//   <button>Remove</button>
// </div>
