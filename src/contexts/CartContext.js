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
  const [cartTotalDiscount, setCartTotalDiscount] = useState(() => {
    const savedLocallyCartTotalDiscount =
      localStorage.getItem('cartTotalDiscount');
    return savedLocallyCartTotalDiscount
      ? JSON.parse(savedLocallyCartTotalDiscount)
      : 0;
  });
  //
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartTotal', JSON.stringify(cartTotal));
    localStorage.setItem(
      'cartTotalDiscount',
      JSON.stringify(cartTotalDiscount)
    );
  }, [cart, cartItems, cartTotal, cartTotalDiscount]);
  //
  function clearCart() {
    setCart([]);
    setCartItems(0);
    setCartTotal(0);
    setCartTotalDiscount(0);
  }
  //
  const addToCart = product => {
    let newCart;
    let discountValue;
    if (cart.find(item => item.id === product.id)) {
      newCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    newCart = newCart.filter(item =>
      item.price > item.discountedPrice
        ? (discountValue = item.price - item.discountedPrice)
        : 0
    );
    //
    setCart(newCart);
    setCartItems(cartItems + 1);
    setCartTotal(cartTotal + product.price);
    setCartTotalDiscount(Number(cartTotalDiscount) + Number(discountValue));
    //
    console.log(newCart);
    console.log(cartItems);
    console.log(cartTotal);
    console.log(cartTotalDiscount);
  };
  //
  const removeFromCart = product => {
    let newCart;
    let discountValue;
    let itemToRemove = cart.find(item => item.id === product.id);
    //
    if (cart.find(item => item.id === product.id)) {
      newCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      newCart = newCart.filter(item => item.quantity > 0);
      if (itemToRemove && itemToRemove.price > itemToRemove.discountedPrice) {
        setCartTotalDiscount(
          Number(cartTotalDiscount) -
            (itemToRemove.price - itemToRemove.discountedPrice)
        );
      }
      //   item.price > item.discountedPrice
      //     ? (discountValue = item.price - item.discountedPrice)
      //     : 0
      // );
      setCartItems(cartItems - 1);
      setCartTotal(cartTotal - product.price);
    }
    setCart(newCart);
  };
  //
  const deleteFromCart = product => {
    let itemToRemove = cart.find(item => item.id === product.id);
    let newCart = cart.filter(item => item.id !== product.id);
    //
    setCart(newCart);
    setCartItems(cartItems - itemToRemove.quantity);
    setCartTotal(cartTotal - itemToRemove.quantity * itemToRemove.price);
    setCartTotalDiscount(
      Number(cartTotalDiscount) -
        itemToRemove.quantity *
          (itemToRemove.price - itemToRemove.discountedPrice)
    );
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
        deleteFromCart,
        cartTotalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
