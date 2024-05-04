import React, { useState } from "react";
import { RootState } from "../component/state/store";
import { useSelector } from "react-redux";
import { Product } from "../pages/HomePage";

const useCartItems = (product: Product) => {
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);

  const cartItem = cartItems?.find((c) => c.product.id === product?.id);

  let [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  return { quantity, setQuantity, cartItem };
};

export default useCartItems;
