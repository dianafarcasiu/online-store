import { useSelector } from "react-redux";
import Underline from "../../ui/Underline";
import { getShippingPrice, getTotalCartPrice } from "../cart/cartSlice";
import OrderOverviewItem from "./OrderOverviewItem";
import Title from "../../ui/Title";
import OrderForm from "./OrderForm";

function Order() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector(getTotalCartPrice).toFixed(2);
  const shippingPrice = useSelector(getShippingPrice).toFixed(2);
  const totalOrder = parseFloat(totalPrice) + parseFloat(shippingPrice);

  return (
    <div className="wrapper">
      <Title>Order Overview</Title>
      <ul className="mb-16">
        {cart.map((item) => (
          <OrderOverviewItem key={item.id}>
            {" "}
            <span>
              {item.amount} x {item.title}
            </span>
            <span>${item.totalPrice.toFixed(2)}</span>
          </OrderOverviewItem>
        ))}
        {parseFloat(shippingPrice) !== 0 && (
          <OrderOverviewItem>
            <span>Shipping</span>
            <span>${shippingPrice}</span>
          </OrderOverviewItem>
        )}
        <OrderOverviewItem>
          <span className="not-italic font-bold">Total</span>
          <span>${totalOrder.toFixed(2)}</span>
        </OrderOverviewItem>
      </ul>

      <Title>Your contact info</Title>
      <OrderForm />
    </div>
  );
}

export default Order;
