import { useEffect, useState } from "react";
import CartAmount from "./CartAmount";
import Underline from "./Underline";
import { Link } from "react-router-dom";

export default function CartProduct({
  product,
  onDeleteProduct,
  onAmountChange,
}) {
  const [amount, setAmount] = useState(product.amount || 1);

  useEffect(() => {
    onAmountChange(product.id, amount);
  }, [amount, product.id]);

  const totalPrice = (product.price * amount).toFixed(2);

  return (
    <>
      <div className="mb-6 flex gap-6 flex-col justify-between items-center md:flex-row">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-52 h-52"
            src={product.image}
            alt={product.title}
          ></img>
        </Link>
        <div className="text-center md:text-start">
          <h6 className="font-bold pb-4">{product.title}</h6>
          <p className="text-sm">{product.category}</p>
        </div>

        <CartAmount amount={amount} setAmount={setAmount} />

        <div className="text-md font-bold text-purple-400">{`$ ${totalPrice}`}</div>
        <button onClick={() => onDeleteProduct(product.id)}>
          <i className="fa-regular fa-trash-can text-2xl cursor-pointer hover:text-purple-400 active:scale-90"></i>
        </button>
      </div>
      <Underline marginBottom="mb-8" />
    </>
  );
}
