import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';
import deliveryImg from '../media/images/photo-1545287072-e39ac363b3c8-min.jpg';

export default function CheckoutSuccessPage() {
  return (
    <Layout>
      <CheckoutSuccessMessage />
    </Layout>
  );
}

function CheckoutSuccessMessage() {
  return (
    <section className=" h-screen">
      <img
        src={deliveryImg}
        alt="boxes on background"
        className="w-full max-h-full object-cover relative h-full "
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[80%] text-center bg-white p-8 bg-opacity-60 rounded-xl md:mt-20">
        <h1 className="text-2xl  md:text-5xl pb-4">
          Thank you for your purchase!
        </h1>
        <h4 className="pb-2">Your order is on its way ! 📦 🚛</h4>
        <p>Track you parcel</p>
        <button
          className="border-2 px-2 py-1 mt-4 rounded-lg border-blue-2 hover:bg-blue-2 transition-colors hover:text-white"
          onClick={() => localStorage.clear()}
        >
          <Link to="/">Go home</Link>
        </button>
      </div>
    </section>
  );
}
