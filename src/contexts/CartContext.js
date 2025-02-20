import { createContext, useEffect, useState } from 'react';
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedLocallyCart = localStorage.getItem('cart');
    return savedLocallyCart ? JSON.parse(savedLocallyCart) : [];
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedLocallyCartItems = localStorage.getItem('cartItems');
    return savedLocallyCartItems ? JSON.parse(savedLocallyCartItems) : 0;
  });
  const [cartTotal, setCartTotal] = useState(() => {
    const savedLocallyCartTotal = localStorage.getItem('cartTotal');
    return savedLocallyCartTotal ? JSON.parse(savedLocallyCartTotal) : 0;
  });
  //
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
  }, [cart, cartItems, cartTotal]);
  //
  function clearCart() {
    setCart([]);
    setCartItems(0);
    setCartTotal(0);
  }
  //
  const addToCart = product => {
    let newCart;
    if (cart.find(item => item.id === product.id)) {
      newCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    //
    setCart(newCart);
    setCartItems(cartItems + 1);
    setCartTotal(cartTotal + product.price);
    //
    console.log(newCart);
    console.log(cartItems);
    console.log(cartTotal);
  };
  //
  const removeFromCart = product => {
    let newCart;
    if (cart.find(item => item.id === product.id)) {
      newCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      newCart = newCart.filter(item => item.quantity > 0);
      // setCart(newCart);
      //   check if values are updated in the cart // async issue
      setCartItems(cartItems - 1);
      setCartTotal(cartTotal - product.price);
    }
    setCart(newCart);
  };
  //
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        cartItems,
        setCartItems,
        cartTotal,
        setCartTotal,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
