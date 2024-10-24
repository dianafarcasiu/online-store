import { useDispatch } from "react-redux";
import { updateItemAmount } from "./cartSlice";
import { useState } from "react";

export default function CartAmount({ product }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(product.amount || 1);

  function handleAmountChange(e) {
    const newAmount = parseInt(e.target.value);
    setAmount(newAmount);
    dispatch(updateItemAmount({ id: product.id, amount: newAmount }));
  }

  return (
    <form className="text-sm text-center">
      <label htmlFor="amount" className="block pb-2">
        Amount
      </label>
      <select
        name="amount"
        className="text-center p-1 rounded-md bg-transparent border-[1px] border-zinc-300 focus:outline-purple-400 cursor-pointer"
        value={amount}
        onChange={handleAmountChange}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </form>
  );
}
