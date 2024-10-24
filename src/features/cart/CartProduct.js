import { useEffect, useState } from "react";
import CartAmount from "./CartAmount";
import Underline from "../../ui/Underline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  const totalPrice = (product.price * product.amount).toFixed(2);

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-6 mb-6 md:flex-row">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-52 h-52"
            src={product.image}
            alt={product.title}
          ></img>
        </Link>
        <div className="text-center md:text-start">
          <h6 className="pb-4 font-bold">{product.title}</h6>
          <p className="text-sm">{product.category}</p>
        </div>

        <CartAmount product={product} />

        <div className="font-bold text-purple-400 text-md">{`$ ${totalPrice}`}</div>
        <button onClick={() => dispatch(deleteItem(product.id))}>
          <i className="text-2xl cursor-pointer fa-regular fa-trash-can hover:text-purple-400 active:scale-90"></i>
        </button>
      </div>
      <Underline marginBottom="mb-8" />
    </>
  );
}
