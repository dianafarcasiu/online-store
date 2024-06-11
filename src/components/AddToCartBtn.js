import { useEffect, useState } from "react";

export default function AddToCartBtn({ product }) {
  const productsFromLS =
    JSON.parse(localStorage.getItem("productsForLS")) || [];
  const [productsForLS, setProductsForLS] = useState(productsFromLS);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(
    function () {
      localStorage.setItem("productsForLS", JSON.stringify(productsForLS));
    },
    [productsForLS]
  );

  function addToCart() {
    const isAlreadyAdded = productsForLS.some((item) => item.id === product.id);

    if (isAlreadyAdded) alert("Item already in cart.");
    else {
      const addedProducts = [...productsForLS, product];
      setProductsForLS(addedProducts);
      setIsAddedToCart(true);
    }
  }

  return (
    <button
      className="block mt-10 text-gray-950 bg-purple-400 py-2 px-4 rounded-md hover:bg-purple-500 transition-colors active:scale-95"
      onClick={addToCart}
    >
      {isAddedToCart ? "Added to cart" : "Add to cart"}
    </button>
  );
}
