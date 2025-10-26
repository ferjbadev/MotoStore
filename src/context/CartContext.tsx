import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, Motorcycle } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (motorcycle: Motorcycle) => void;
  removeFromCart: (motorcycleId: number) => void;
  updateQuantity: (motorcycleId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (motorcycle: Motorcycle) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.motorcycle.id === motorcycle.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.motorcycle.id === motorcycle.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { motorcycle, quantity: 1 }];
    });
  };

  const removeFromCart = (motorcycleId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.motorcycle.id !== motorcycleId)
    );
  };

  const updateQuantity = (motorcycleId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(motorcycleId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.motorcycle.id === motorcycleId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (total, item) => total + item.motorcycle.price * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

