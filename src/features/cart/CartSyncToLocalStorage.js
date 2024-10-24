import { useEffect } from "react";
import { useSelector } from "react-redux";

function CartSyncToLocalStorage() {
  const cart = useSelector((state) => state.cart.cart);

  useEffect(
    function () {
      localStorage.setItem("productsForLS", JSON.stringify(cart));
    },
    [cart]
  );
  return null;
}

export default CartSyncToLocalStorage;
