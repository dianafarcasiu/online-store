import Underline from "../components/Underline";

export default function CartTotal({ totalPrice, shippingPrice }) {
  const totalOrder = shippingPrice + parseFloat(totalPrice, 2);

  return (
    <div className="bg-gray-950 rounded-lg p-10 text-sm">
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>{`$ ${totalPrice}`}</span>
      </div>
      <Underline marginBottom="mb-4" />

      <div className="flex justify-between mb-2">
        <span>Shipping</span>
        <span>{`$ ${shippingPrice.toFixed(2)}`}</span>
      </div>
      <Underline marginBottom="mb-10" />

      <div className="flex justify-between mb-2 text-base font-bold">
        <span>Order total</span>
        <span>{`$ ${totalOrder.toFixed(2)}`}</span>
      </div>
    </div>
  );
}
