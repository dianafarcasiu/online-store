import { useEffect, useState } from "react";
import Underline from "../components/Underline";
import CartProduct from "../components/CartProduct";
import CartTotal from "../containers/CartTotal";

export default function Cart() {
  const [addedProducts, setAddedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(5);

  useEffect(function () {
    const storedProducts =
      JSON.parse(localStorage.getItem("productsForLS")) || [];
    setAddedProducts(storedProducts);
  }, []);

  function handleDeleteProduct(id) {
    const updatedProducts = addedProducts.filter(
      (product) => product.id !== id
    );
    setAddedProducts(updatedProducts);
    localStorage.setItem("productsForLS", JSON.stringify(updatedProducts));
  }

  function handleAmountChange(id, newAmount) {
    const updatedProducts = addedProducts.map((product) =>
      product.id === id ? { ...product, amount: newAmount } : product
    );
    setAddedProducts(updatedProducts);
  }

  useEffect(
    function () {
      function calculateTotalPrice() {
        const total = addedProducts.reduce((total, product) => {
          return total + product.price * product.amount;
        }, 0);
        setTotalPrice(total.toFixed(2));
      }
      calculateTotalPrice();
    },
    [addedProducts, totalPrice]
  );

  useEffect(
    function () {
      function calculateShippingPrice() {
        const hasFreeShipping = addedProducts.every(
          (product) => product.free_shipping
        );
        setShippingPrice(hasFreeShipping ? 0 : 5);
      }
      calculateShippingPrice();
    },
    [addedProducts]
  );

  return (
    <div className="wrapper">
      <h5 className="text-3xl font-bold mb-4">
        {addedProducts.length > 0 ? "Your cart" : "Your cart is empty"}
      </h5>
      <Underline />
      <div className="grid gap-12 lg:grid-cols-6">
        <div className="lg:col-span-4">
          {addedProducts.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              onDeleteProduct={handleDeleteProduct}
              onAmountChange={handleAmountChange}
            />
          ))}
        </div>

        <div className="lg:col-span-2">
          {addedProducts.length > 0 && (
            <>
              <CartTotal
                totalPrice={totalPrice}
                shippingPrice={shippingPrice}
              />
              <button className=" bg-purple-500 w-full mt-6 p-1 rounded-md hover:bg-purple-600 transition-colors active:scale-95">
                Order now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
