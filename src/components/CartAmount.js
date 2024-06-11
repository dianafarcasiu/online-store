export default function CartAmount({ amount, setAmount }) {
  return (
    <form className="text-sm text-center">
      <label htmlFor="amount" className="block pb-2">
        Amount
      </label>
      <select
        name="amount"
        className="text-center p-1 rounded-md bg-transparent border-[1px] border-zinc-300 focus:outline-purple-400 cursor-pointer"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
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
