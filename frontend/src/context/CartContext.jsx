import React, { createContext, useState, useContext, useEffect } from "react";
import { getToken, logoutUser } from "../api/auth";
import {
  addItemToCart,
  removeItemFromCart,
  clearCartAPI,
  fetchCart,
  increaseItemInCart,
  decreaseItemInCart,
} from "../api/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem("currency");
    return savedCurrency ? JSON.parse(savedCurrency) : "USD";
  });
  const [rates, setRates] = useState(null);
  const [token, setToken] = useState(getToken());
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    if (!token) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartItemCount(
        cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    }
  }, [cartItems, token]);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  useEffect(() => {
    fetch("https://open.exchangerate-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
      });
  }, []);

  useEffect(() => {
    if (token) {
      fetchCart()
        .then((cart) => {
          if (cart) {
            setcartItems(cart.cartItems);
            setCartItemCount(
              cart.cartItems.reduce((total, item) => total + item.quantity, 0)
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching cart on initial load:", error);
        });
    } else {
      setCartItemCount(
        cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    }
  }, [token]);

  const addToCart = async (product) => {
    console.log(product);
    if (token) {
      const productId = product._id;
      if (!productId) {
        console.error("Product has no ID", product);
        return;
      }
      console.log(productId);
      const updatedCart = await addItemToCart(productId, 1);
      setcartItems(updatedCart.cartItems);
      setCartItemCount(
        updatedCart.cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    } else {
      setcartItems((prev) => {
        const itemExists = prev.find((item) => item._id === product._id);
        if (itemExists) {
          return prev.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = async (productId) => {
    if (token) {
      const updatedCart = await removeItemFromCart(productId);
      setcartItems(updatedCart.cartItems);
      setCartItemCount(
        updatedCart.cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    } else {
      setcartItems((prev) => prev.filter((p) => p._id !== productId));
    }
  };

  const clearCart = async () => {
    if (token) {
      await clearCartAPI();
      setcartItems([]);
      setCartItemCount(0);
    } else {
      setcartItems([]);
    }
  };

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    logoutUser();
    setToken(null);
    setcartItems([]);
    setCartItemCount(0);
  };

  const increaseQuantity = async (productId) => {
    if (token) {
      const updatedCart = await increaseItemInCart(productId);
      setcartItems(updatedCart.cartItems);
      setCartItemCount(
        updatedCart.cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    } else {
      setcartItems((prev) =>
        prev.map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    }
  };

  const decreaseQuantity = async (productId) => {
    if (token) {
      const updatedCart = await decreaseItemInCart(productId);
      setcartItems(updatedCart.cartItems);
      setCartItemCount(
        updatedCart.cartItems.reduce((total, item) => total + item.quantity, 0)
      );
    } else {
      setcartItems((prev) =>
        prev.map((item) =>
          item._id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        currency,
        setCurrency,
        rates,
        login,
        logout,
        cartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

