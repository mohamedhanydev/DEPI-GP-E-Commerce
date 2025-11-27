import React, { createContext, useState ,useContext} from "react";

// 1) نعمل context فاضية
export const CartContext = createContext();

// 2) نعمل provider اللي هيمسك حالة الكارت
export const CartProvider = ({ children }) => {
  const [cartItems , setcartItems ] = useState([]); // الكارت هيتخزن هنا

  // دالة إضافة منتج للكارت
  const addToCart = (product) => {
    setcartItems ((prev) => [...prev, product]);
  };

  // لو حابين نمسح منتج
  const removeFromCart = (productId) => {
    setcartItems ((prev) => prev.filter((p) => p.id !== productId));
  };

  // لو عايزين نفرّغ الكارت كله
  const clearCart = () => setcartItems ([]);

  // البيانات اللي هنشاركها مع كل مكان في الموقع
  return (
    <CartContext.Provider
      value={{
        cartItems ,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

