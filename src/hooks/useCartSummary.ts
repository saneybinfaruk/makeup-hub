import { useSelector } from "react-redux";
import { RootState } from "../component/state/store";

const useCartSummary = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartList);
  const subtotalPrice = cartItems
    .map((c) => parseFloat(c.product.price) * c.quantity)
    .reduce((acc, curr) => acc + curr, 0)
    .toFixed(2);

  const shippingPrice = 0;
  const totalPrice = (parseInt(subtotalPrice) + shippingPrice).toFixed(2);

  return { cartItems, subtotalPrice, shippingPrice, totalPrice };
};

export default useCartSummary;
