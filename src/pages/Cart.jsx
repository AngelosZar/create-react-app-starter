import Layout from '../layouts/Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
//
export default function Cart() {
  //
  const { cart, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  console.log(cart);

  return (
    <Layout>
      <section className="flex flex-col md:flex-row gap-4">
        <CheckoutForm />
        <OrderSummary
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
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
function OrderSummary({ cart, addToCart, removeFromCart, clearCart }) {
  // display cart items
  // calculate
  // display total
  return (
    <section>
      <CartItem
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <CartItem
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <CartItem
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <h3>Order Summary</h3>
      <p>Subtotal: 20</p>
      <p>Shipping: 5</p>
      <p>Total: 25</p>
      <button onClick={clearCart}>Empty cart</button>
      <br />
      <p>add promo code</p>
    </section>
  );
}
function CartItem() {
  // render product details
  // remove product // add and minus on quantity
  return (
    // map cart items
    <div>
      <h3>Product Name</h3>
      <p>Price: 10</p>
      <p>Quantity: 2</p>
      <p>Total: 20</p>
      <button>Remove</button>
    </div>
  );
}
