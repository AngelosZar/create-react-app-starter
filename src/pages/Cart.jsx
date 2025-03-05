import Layout from '../layouts/Layout';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
//
// export default function Cart() {
//   //
//   const {
//     cart,
//     addToCart,
//     removeFromCart,
//     clearCart,
//     setCartItems,
//     cartItems,
//     cartTotal,
//     deleteFromCart,
//     cartTotalDiscount,
//   } = useContext(CartContext);

//   console.log(cart);
//   console.log(cartTotalDiscount);
//   const navigate = useNavigate();
//   return (
//     <Layout>
//       {cart.length > 0 ? (
//         <section className="flex flex-col md:flex-row gap-4">
//           {/* <CheckoutForm /> */}
//           <OrderSummary
//             cart={cart}
//             addToCart={addToCart}
//             removeFromCart={removeFromCart}
//             clearCart={clearCart}
//             setCartItems={setCartItems}
//             cartTotal={cartTotal}
//             cartItems={cartItems}
//             deleteFromCart={deleteFromCart}
//             cartTotalDiscount={cartTotalDiscount}
//           />
//         </section>
//       ) : (
//         <div className="flex flex-col justify-center items-center w-full h-screen gap-4">
//           <h1 className="text-center ">Your cart is empty</h1>
//           <h2 className="text-blue-2">Go on shopping .. Fill it up</h2>
//           <button className="btn-primary" onClick={() => navigate('/')}>
//             Go shopping
//           </button>
//         </div>
//       )}
//     </Layout>
//   );
// }

// function CheckoutForm() {
//   let navigate = useNavigate();
//   // refine form fields
//   // Add form validation
//   return (
//     <div className="mt-12 border-y-2 border-blue-3 py-1 px-4 text-center">
//       <h3 className="mb-2 mt-4">Proceed to checkout</h3>
//       <p className="mb-6">Fill in your details</p>
//       <form className="flex flex-col gap-4 max-w-xs mx-auto">
//         <div className="flex gap-4">
//           <input type="text" placeholder="First name" className="form-input" />
//           <input type="text" placeholder="Last name" className="form-input" />
//         </div>
//         <input type="text" placeholder="Email" className="form-input " />
//         <input type="text" placeholder="Address" className="form-input " />
//         <div className="flex gap-4">
//           <input type="text" placeholder="City" className="form-input" />
//           <input type="text" placeholder="Zip code" className="form-input " />
//         </div>
//         <div className="flex flex-col gap-4">
//           <h2 className="pb-6">Continue to payment</h2>
//           <fieldset className="flex flex-col gap-4">
//             <div className="flex flex-col border-2 border-blue-3 rounded-lg p-4 gap-4">
//               <span className="flex flex-row gap-2">
//                 <input type="radio" id="paypal" name="payment" value="paypal" />
//                 <label htmlFor="paypal">Paypal</label>
//               </span>
//               <h6>Continue with paypal</h6>
//             </div>
//             <div className="flex flex-col border-2 border-blue-3 rounded-lg p-4 gap-4">
//               <span className="flex flex-row gap-2">
//                 <input type="radio" id="vipps" name="payment" value="vipps" />
//                 <label htmlFor="vipps">Vipps</label>
//               </span>
//               <h6>Continue with Vipps</h6>
//             </div>
//             <div className="flex flex-col border-2 border-blue-3 p-4 gap-4 rounded-lg ">
//               <span className="flex flex-row gap-2">
//                 <input type="radio" id="visa" name="payment" value="visa" />
//                 <label htmlFor="visa">Visa</label>
//               </span>
//               <h6>Pay with Visa</h6>
//             </div>
//           </fieldset>

//           <div className="flex flex-row gap-4">
//             <button
//               type="submit"
//               className="btn-primary"
//               onClick={() => navigate('/checkout-success')}
//             >
//               Checkout
//             </button>
//             <button
//               type="submit"
//               className="btn-secondary"
//               onClick={() => navigate('/')}
//             >
//               Continue shopping
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
// //
// function OrderSummary({
//   cart,
//   addToCart,
//   removeFromCart,
//   clearCart,
//   cartItems,
//   setCartItems,
//   cartTotal,
//   deleteFromCart,
//   cartTotalDiscount,
// }) {
//   return (
//     <section className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 w-full">
//       <CartItem
//         cart={cart}
//         addToCart={addToCart}
//         removeFromCart={removeFromCart}
//         cartTotal={cartTotal}
//         cartItems={cartItems}
//         deleteFromCart={deleteFromCart}
//       />
//       <div className="mt-12 border-y-2 border-blue-3 py-1 flex  flex-col  justify-center gap-2 md:px-4">
//         <h2 className="text-blue-2">Order Summary</h2>
//         <p>Subtotal: {Number(cartTotal).toFixed(2)} nok</p>
//         <p>Discount: {cartTotalDiscount} nok</p>
//         <hr className="w-[30%] h-1 bg-blue-2" />
//         <p>Shipping: 0 nok</p>
//         <p>Tax: 0 nok</p>
//         <hr className="w-[30%] h-1 bg-blue-2" />

//         <h4 className="text-blue-2">
//           Total: {Number(cartTotal).toFixed(2)} nok
//         </h4>
//         <button
//           onClick={clearCart}
//           className="text-red-500 hover:text-red-700 self-start"
//         >
//           Empty cart
//         </button>
//         <br />
//       </div>
//     </section>
//   );
// }
// //
// function CartItem({
//   cart,
//   addToCart,
//   removeFromCart,
//   cartTotal,
//   cartItems,
//   deleteFromCart,
// }) {
//   return cart.map(product => (
//     <div
//       key={product.id}
//       // className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4 shadow-lg max-w-sm"
//       className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4 shadow-lg"
//     >
//       <div className="flex flex-col gap-2 justify-start max-w-44 max-h-auto flex-shrink-1">
//         <img
//           src={product.image.url}
//           alt={product.title}
//           className="object-cover max-w-44 max-h-auto flex-shrink-1"
//         />
//       </div>
//       <div className="flex flex-col gap-2 max-w-sm justify-center items-center text-center sm:text-start sm:items-start sm:justify-start px-4 pt-8">
//         <h3>{product.title}</h3>
//         <p className="">{product.description}</p>
//         {/* calculate total discount / how much user saves  */}
//         {product.discountedPrice < product.price ? (
//           <p>discountedPrice: {product.discountedPrice} is working</p>
//         ) : (
//           <p>Price: {product.price} is working</p>
//         )}
//         {/* {product.discountedPrice < product.price ? (
//           <div className="grid subgrid gap-2 mb-6">
//             <div className="flex gap-2 ">
//               <p className="line-through">{product.price} </p>
//               <p>{product.discountedPrice} nok</p>
//             </div>
//             <p>
//               Save {Number(product.price - product.discountedPrice).toFixed(2)}{' '}
//               nok
//             </p>
//           </div>
//         ) : (
//           <p className="mt-4">{product.price} nok</p>
//         )} */}
//         <p>Price: {product.discountedPrice}</p>
//         <p>
//           {product.quantity > 1
//             ? `Total is ${product.quantity * product.discountedPrice}`
//             : ''}
//         </p>
//         <p>
//           You save
//           {product.price - product.discountedPrice * product.quantity}
//         </p>

//         <span className="flex flex-row gap-4">
//           <button onClick={() => removeFromCart(product)}>-</button>
//           <p>{product.quantity}</p>
//           <button onClick={() => addToCart(product)}>+</button>
//         </span>
//         <span className="self-end">
//           <button
//             className="hover:text-red-500"
//             onClick={() => deleteFromCart(product)}
//           >
//             {/* display message are you sure you want to delete the item */}
//             Remove
//           </button>
//         </span>
//       </div>
//     </div>
//   ));
// }
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
      className="flex flex-col gap-4 sm:flex-row justify-center items-center mt-12 border-y-2 border-blue-3 py-1 md:px-4 shadow-lg"
    >
      <div className="flex flex-col gap-2 justify-start max-w-44 max-h-auto flex-shrink-1">
        <img
          src={product.image.url}
          alt={product.title}
          className="object-cover max-w-44 max-h-auto flex-shrink-1"
        />
      </div>
      <div className="flex flex-col gap-2 max-w-sm justify-center items-center text-center sm:text-start sm:items-start sm:justify-start px-4 pt-8">
        <h3>{product.title}</h3>
        <p className="">{product.description}</p>
        {/* calculate total discount / how much user saves  */}
        {product.discountedPrice < product.price ? (
          <p>discountedPrice: {product.discountedPrice} is working</p>
        ) : (
          <p>Price: {product.price} is working</p>
        )}
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
        <p>Price: {product.discountedPrice}</p>
        <p>
          {product.quantity > 1
            ? `Total is ${product.quantity * product.discountedPrice}`
            : ''}
        </p>
        <p>
          You save
          {product.price - product.discountedPrice * product.quantity}
        </p>

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
  return (
    <div className="mt-12 border-t-2 border-blue-3 py-1 flex flex-col gap-2 md:px-4 sticky top-0">
      <h2 className="text-blue-2">Order Summary</h2>
      <p>Subtotal: {Number(cartTotal).toFixed(2)} nok</p>
      <p>Discount: {cartTotalDiscount} nok</p>
      <hr className="w-[30%] h-1 bg-blue-2" />
      <p>Shipping: 0 nok</p>
      <p>Tax: 0 nok</p>
      <hr className="w-[30%] h-1 bg-blue-2" />{' '}
      <h4 className="text-blue-2">
        Total: {Number(cartTotal).toFixed(2)} nok //{' '}
      </h4>
      <button
        onClick={clearCart}
        className="text-red-500 hover:text-red-700 self-start"
      >
        Empty cart
      </button>
      <br />
    </div>
  );
}
