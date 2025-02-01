import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingCartItem = cartItems.find(cartItem => 
      cartItem.id === item.id &&
      cartItem.dough.name === item.dough.name &&
      cartItem.size.name === item.size.name &&
      cartItem.toppings.length === item.toppings.length &&
      cartItem.toppings.every(cartTopping => 
        item.toppings.some(itemTopping => 
          cartTopping.name === itemTopping.name
        )
      )
    );
  
    if (existingCartItem) {
      changeQuantity(existingCartItem.cartId, item.quantity);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  const removeFromCart = (cartId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  };

  const changeQuantity = (cartId, difference) => {
    setCartItems((items) => items.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        const changedCartItem = {
          ...cartItem,
          fullPrice: cartItem.fullPrice + difference*cartItem.pizzaPrice,
          quantity: cartItem.quantity + difference,
        };
        if (changedCartItem.quantity == 0) {
          removeFromCart(changedCartItem.cartId);
        }
        return changedCartItem;
      }
      return cartItem;
    }))
  };

  const editCartItem = (cartId, newSize, newDough, newToppings) => {
    setCartItems((items) => items.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        const changedCartItem = {
          ...cartItem,
          dough: cartItem.pizzaInfo.doughs.find(dough => dough.name == newDough),
          size: cartItem.pizzaInfo.sizes.find(size => size.name == newSize),
          toppings: newToppings.map(({ translatedName, ...rest }) => rest)
        };
        return changedCartItem;
      }
      return cartItem;
    }))
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.fullPrice;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity, editCartItem, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};