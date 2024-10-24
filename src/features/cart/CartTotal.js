import { useSelector } from "react-redux";
import { getShippingPrice, getTotalCartPrice } from "./cartSlice";
import Underline from "../../ui/Underline";

export default function CartTotal() {
  const totalPrice = useSelector(getTotalCartPrice).toFixed(2);
  const shippingPrice = useSelector(getShippingPrice).toFixed(2);
  const totalOrder = parseFloat(totalPrice) + parseFloat(shippingPrice);

  return (
    <div className="p-10 text-sm rounded-lg bg-gray-950">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{`$ ${totalPrice}`}</span>
      </div>
      <Underline marginBottom="mb-4" />

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>{`$ ${shippingPrice}`}</span>
      </div>
      <Underline marginBottom="mb-10" />

      <div className="flex justify-between mb-2 text-base font-bold">
        <span>Order total</span>
        <span>{`$ ${totalOrder.toFixed(2)}`}</span>
      </div>
    </div>
  );
}
