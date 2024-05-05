import { useEffect, useState } from "react";
import { RootState } from "../component/state/store";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../pages/HomePage";
import { addToList, updateQuantity } from "../component/state/cartSlice";

const useCartItems = (product: Product) => {
  const cartItems = useSelector((state: RootState) => state.cartList.cartItems);

  const cartItem = cartItems?.find((c) => c.product.id === product?.id);

  let [quantity, setQuantity] = useState(cartItem ? cartItem.quantity : 0);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem ? cartItem.quantity : 0);
    } else {
      setQuantity(0);
    }
  }, [cartItem]);

  const cartUpdate = () => {
    if (cartItem) {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity,
        })
      );
    } else {
      dispatch(addToList({ product, quantity }));
    }
  };
  const handleIncreamentQuantity = () => {
    setQuantity((quantity += 1));
    cartUpdate();
  };
  const handleDecreamentQuantity = () => {
    setQuantity((quantity -= 1));
    cartUpdate();
  };

  return { quantity, handleIncreamentQuantity, handleDecreamentQuantity };
};

export default useCartItems;
