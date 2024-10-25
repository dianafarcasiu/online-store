import Underline from "../../ui/Underline";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import { Link } from "react-router-dom";
import Title from "../../ui/Title";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <Title>{cart.length > 0 ? "Your cart" : "Your cart is empty"}</Title>

      {!cart.length && (
        <p className="font-semibold">
          Start adding some products to your cart!
        </p>
      )}

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

              <Link to="/order">
                <button className="w-full p-1 mt-6 transition-colors bg-purple-500 rounded-md hover:bg-purple-600 active:scale-95">
                  Order now
                </button>
              </Link>
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
