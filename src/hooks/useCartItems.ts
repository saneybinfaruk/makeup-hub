import { useCallback, useEffect, useState } from "react";
import { RootState } from "../component/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../pages/HomePage";
import {
  addToList,
  removeItem,
  updateQuantity,
} from "../component/state/cartSlice";

const useCartItems = (product: Product) => {
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);

  const cartItem = cartItems?.find((c) => c.product?.id === product?.id);

  let [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem ? cartItem.quantity : 0);
    } else {
      setQuantity(0);
    }
  }, [cartItem]);

  const cartUpdate = (quantity: number) => {
    dispatch(
      cartItem
        ? updateQuantity({
            id: product?.id,
            quantity,
          })
        : addToList({ product, quantity })
    );
  };
  const handleIncreamentQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity += 1));
    cartUpdate((quantity += 1));
  }, [quantity]);

  const handleDecreamentQuantity = useCallback(() => {
    setQuantity((prevQuantity) => (prevQuantity -= 1));
    cartUpdate((quantity -= 1));

    if (quantity <= 0) {
      handleRemoveBtn();
    }
  }, [quantity]);

  const handleRemoveBtn = useCallback(() => {
    dispatch(removeItem({ id: product?.id, quantity }));
  }, [quantity]);

  return {
    quantity,
    handleIncreamentQuantity,
    handleDecreamentQuantity,
    handleRemoveBtn,
  };
};

export default useCartItems;
