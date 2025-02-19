import Layout from '../layouts/Layout';
export default function Cart() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row gap-4">
        <CheckoutForm />
        <OrderSummary />
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
        <button type="submit">Submit.buy</button>
      </form>
    </div>
  );
}
function OrderSummary() {
  // display cart items
  // calculate
  // display total
  return (
    <section>
      <CartItem />
      <CartItem />
      <CartItem />
      <h3>Order Summary</h3>
      <p>Subtotal: 20</p>
      <p>Shipping: 5</p>
      <p>Total: 25</p>
      <button>Empty Cart</button>
      <br />
      <p>add promo code</p>
    </section>
  );
}
function CartItem() {
  // render product details
  // remove product // add and minus on quantity
  return (
    <div>
      <h3>Product Name</h3>
      <p>Price: 10</p>
      <p>Quantity: 2</p>
      <p>Total: 20</p>
      <button>Remove</button>
    </div>
  );
}
