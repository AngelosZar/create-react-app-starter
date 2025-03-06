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
  return <section>{/*  */}</section>;
}
