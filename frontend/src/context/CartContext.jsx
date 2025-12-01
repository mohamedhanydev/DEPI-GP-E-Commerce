import React, { createContext, useState, useContext, useEffect } from "react";

// 1) نعمل context فاضية
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

// 2) نعمل provider اللي هيمسك حالة الكارت
export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  }); // الكارت هيتخزن هنا
  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem("currency");
    return savedCurrency ? JSON.parse(savedCurrency) : "USD";
  });
  const [rates, setRates] = useState(null);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("currency", JSON.stringify(currency));
  }, [currency]);

  useEffect(() => {
    fetch("https://open.exchangerate-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setRates(data.rates);
      });
  }, []);

  // دالة إضافة منتج للكارت
  const addToCart = (product) => {
    setcartItems((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // لو حابين نمسح منتج
  const removeFromCart = (productId) => {
    setcartItems((prev) => prev.filter((p) => p.id !== productId));
  };

  // لو عايزين نفرّغ الكارت كله
  const clearCart = () => setcartItems([]);

  const increaseQuantity = (productId) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setcartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // البيانات اللي هنشاركها مع كل مكان في الموقع
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

