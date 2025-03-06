import Layout from '../layouts/Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  return (
    <Layout>
      <CheckoutForm />
    </Layout>
  );
}

// function CheckoutForm() {
//   return (
//     // <section className="flex flex-col w-full max-w-lg justify-center items-center mx-auto my-12 p-8 bg-white shadow-md rounded-lg gap-8">
//     //   <div>{/*  */}</div>
//     // </section>

//   );
// }
function CheckoutForm() {
  let navigate = useNavigate();
  // refine form fields
  // Add form validation
  return (
    <section className="flex flex-col w-full max-w-lg justify-center items-center mx-auto my-12 p-8 bg-white shadow-md rounded-lg gap-8">
      <div className=" py-1 px-4 text-center">
        {/* add summary here */}
        <h2 className="mb-2 mt-4">Checkout</h2>
        <p className="mb-6">Fill in your details</p>
        <form className="flex flex-col gap-4 max-w-xs mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name"
              className="form-input"
            />
            <input type="text" placeholder="Last name" className="form-input" />
          </div>
          <input type="text" placeholder="Email" className="form-input " />
          <input type="text" placeholder="Address" className="form-input " />
          <div className="flex gap-4">
            <input type="text" placeholder="City" className="form-input" />
            <input type="text" placeholder="Zip code" className="form-input " />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="pb-6">Continue to payment</h2>
            <fieldset className="flex flex-col gap-4">
              <div className="flex flex-col border-2 border-blue-3 rounded-lg p-4 gap-4">
                <span className="flex flex-row gap-2">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                  />
                  <label htmlFor="paypal">Paypal</label>
                </span>
                <h6>Continue with paypal</h6>
              </div>
              <div className="flex flex-col border-2 border-blue-3 rounded-lg p-4 gap-4">
                <span className="flex flex-row gap-2">
                  <input type="radio" id="vipps" name="payment" value="vipps" />
                  <label htmlFor="vipps">Vipps</label>
                </span>
                <h6>Continue with Vipps</h6>
              </div>
              <div className="flex flex-col border-2 border-blue-3 p-4 gap-4 rounded-lg ">
                <span className="flex flex-row gap-2">
                  <input type="radio" id="visa" name="payment" value="visa" />
                  <label htmlFor="visa">Visa</label>
                </span>
                <h6>Pay with Visa</h6>
              </div>
            </fieldset>

            <div className="flex flex-row gap-4">
              <button
                type="submit"
                className="btn-primary"
                onClick={() => navigate('/checkout-success')}
              >
                Checkout
              </button>
              <button
                type="submit"
                className="btn-secondary"
                onClick={() => navigate('/')}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
