import { useDisplay } from "../contexts/ProductDisplayContext";

export default function PriceRange() {
  const { maxPrice, dispatch } = useDisplay();
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="price" className="text-md flex justify-between">
        <span>Select price</span>
        <span className="font-bold">{`$ ${maxPrice}`}</span>
      </label>
      <input
        type="range"
        name="price"
        min={0}
        max={600}
        className="cursor-pointer accent-purple-500"
        value={maxPrice}
        onChange={(e) =>
          dispatch({ type: "setMaxPrice", payload: e.target.value })
        }
      ></input>
      <div className="text-xs flex justify-between">
        <span>0</span>
        <span>{`Max: $600`}</span>
      </div>
    </form>
  );
}
