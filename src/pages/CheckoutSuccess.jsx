import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
// The Checkout success page will display a message to the user notifying them that their order was successful.
// There should also be a link that lets a user go back to the store. The cart must be cleared if the user gets to the Checkout success page.
export default function CheckoutSuccessPage() {
  return (
    <Layout>
      <CheckoutSuccessMessage />
    </Layout>
  );
}

function CheckoutSuccessMessage() {
  return (
    <section>
      <img
        src="https://images.unsplash.com/photo-1503980599186-9cc36eda351a?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-full max-h-full object-cover relative"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1>Thank you for your purchase!</h1>
        <p>Your order is on its way.</p>
        <p>Some other marketing message</p>
        <button>
          <Link to="/" className="hover:text-blue-800 transition-colors">
            redirect home{' '}
          </Link>
        </button>
      </div>
    </section>
  );
}
