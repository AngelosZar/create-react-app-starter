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

function CheckoutForm() {
  const { clearCart, cartTotal, cartTotalDiscount } = useContext(CartContext);

  return (
    <section className="flex flex-col w-full max-w-2xl justify-center items-center mx-auto my-12 p-8 bg-white shadow-md rounded-lg gap-8">
      <div className=" py-1 px-4 text-center w-full max-w-xl">
        <h1 className=" mt-4 mb-6 font-bold text-blue-2 text-5xl">Checkout</h1>
        <CartSummary
          cartTotal={cartTotal}
          clearCart={clearCart}
          cartTotalDiscount={cartTotalDiscount}
        />
        <ContinueToPayment />
        <ShippingDetails clearCart={clearCart} />
      </div>
    </section>
  );
}

function CartSummary({ cartTotal, clearCart, cartTotalDiscount }) {
  return (
    <div className="flex flex-col gap-4 border-2 border-blue-3 rounded-lg p-4 mb-20">
      <h2 className="self-start">Summary</h2>
      <hr className="w-[25%] h-1 bg-blue-2 self-start" />
      <div className="flex flex-row justify-between items-center mt-4">
        <h3>Sub Total</h3>
        <h3>{cartTotal.toFixed(2)}</h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3>Discount</h3>
        <h3>{cartTotalDiscount.toFixed(2)}</h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3>Tax</h3>
        <h3>0</h3>
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3>Shipping</h3>
        <h3>0</h3>
      </div>

      <hr className="w-full h-1 bg-blue-2 self-center" />
      <div className="flex flex-row justify-between items-center">
        <h3>Total</h3>
        <h3>{cartTotal.toFixed(2)}</h3>
      </div>
      <button className="btn-primary" onClick={clearCart}>
        Clear cart
      </button>
    </div>
  );
}

function ContinueToPayment() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <h2 className="pb-6 font-medium">Choose payment method</h2>

      <fieldset className="grid grid-cols-3 gap-2">
        <div className="flex flex-col border-2 border-blue-3 rounded-lg p-2 gap-2">
          <span className="flex flex-row gap-2">
            <input type="radio" id="paypal" name="payment" value="paypal" />
            <label htmlFor="paypal">Paypal</label>
          </span>
          <h6>Continue with paypal</h6>
        </div>
        <div className="flex flex-col border-2 border-blue-3 rounded-lg p-2 gap-2">
          <span className="flex flex-row gap-2">
            <input type="radio" id="vipps" name="payment" value="vipps" />
            <label htmlFor="vipps">Vipps</label>
          </span>
          <h6>Continue with Vipps</h6>
        </div>
        <div className="flex flex-col border-2 border-blue-3 p-2 gap-2 rounded-lg ">
          <span className="flex flex-row gap-2">
            <input type="radio" id="visa" name="payment" value="visa" />
            <label htmlFor="visa">Visa</label>
          </span>
          <h6>Pay with Visa</h6>
        </div>
      </fieldset>
    </div>
  );
}

function ShippingDetails({ clearCart }) {
  let navigate = useNavigate();
  return (
    <div className="border-2 border-blue-3 rounded-lg p-4 my-12">
      <h2 className="pb-6">Shipping details</h2>
      <form className="flex flex-col gap-4 max-w-xs mx-auto">
        <div className="flex gap-4">
          <input type="text" placeholder="First name" className="form-input" />
          <input type="text" placeholder="Last name" className="form-input" />
        </div>
        <input type="text" placeholder="Email" className="form-input " />
        <input type="text" placeholder="Address" className="form-input " />
        <div className="flex gap-4">
          <input type="text" placeholder="City" className="form-input" />
          <input type="text" placeholder="Zip code" className="form-input " />
        </div>
      </form>
      <div className="flex flex-row gap-4 justify-center mt-4">
        <button
          type="submit"
          className="btn-primary"
          onClick={() => {
            clearCart();
            navigate('/checkout-success');
          }}
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
  );
}
