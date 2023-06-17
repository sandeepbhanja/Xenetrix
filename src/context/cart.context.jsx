import { createContext, useEffect, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (!existingCartItem) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((items) => items.id !== productToRemove.id);
  } else {
    return cartItems.map((items) =>
      items.id === productToRemove.id
        ? { ...items, quantity: items.quantity - 1 }
        : items
    );
  }
};

export const removeItem = (cartItems, productToRemove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItems) {
    return cartItems.filter((items) => items.id !== productToRemove.id);
  } else {
    return cartItems;
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  removeItemCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItemCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    setCartTotal,
    setCartCount,
    removeItemFromCart,
    removeItemCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
