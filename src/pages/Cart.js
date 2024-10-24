import Underline from "../ui/Underline";
import CartProduct from "../features/cart/CartProduct";
import CartTotal from "../features/cart/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <h5 className="mb-4 text-3xl font-bold">
        {cart.length > 0 ? "Your cart" : "Your cart is empty"}
      </h5>
      <Underline />
      <div className="grid gap-12 lg:grid-cols-6">
        <div className="lg:col-span-4">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>

        <div className="lg:col-span-2">
          {cart.length > 0 && (
            <div className="sticky top-56">
              <CartTotal />

              <button className="w-full p-1 mt-6 transition-colors bg-purple-500 rounded-md hover:bg-purple-600 active:scale-95">
                Order now
              </button>
              <button
                className="w-full p-1 mt-6 transition-colors bg-gray-700 rounded-md hover:bg-gray-900 active:scale-95"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
