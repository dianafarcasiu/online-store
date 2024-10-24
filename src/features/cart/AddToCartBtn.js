import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./cartSlice";

export default function AddToCartBtn({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const isAlreadyAdded = cart.some((item) => item.id === product.id);

  return (
    <button
      className="block px-4 py-2 mt-10 transition-colors bg-purple-400 rounded-md text-gray-950 hover:bg-purple-500 active:scale-95"
      onClick={() => dispatch(addItem(product))}
      disabled={isAlreadyAdded}
    >
      {isAlreadyAdded ? "Item in cart" : "Add to cart"}
    </button>
  );
}
