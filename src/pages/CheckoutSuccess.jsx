import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import deliveryImg from '../media/images/photo-1545287072-e39ac363b3c8-min.jpg';
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
    <section className="relative h-screen">
      <img
        src={deliveryImg}
        alt="boxes on background"
        className="w-full max-h-full object-cover relative "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] text-center bg-white p-8 bg-opacity-40 rounded-xl">
        <h1 className="text-5xl pb-4">Thank you for your purchase!</h1>
        <h4 className="pb-2">Your order is on its way ! 📦 🚛</h4>
        <p>Track you parcel</p>
        {/* first change state and after redirect ? */}
        <button className="pb-2" onClick={() => localStorage.clear()}>
          <Link to="/" className="hover:text-blue-800 transition-colors">
            Go home
          </Link>
        </button>
      </div>
    </section>
  );
}
