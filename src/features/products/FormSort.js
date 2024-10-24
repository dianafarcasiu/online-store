import { useDisplay } from "../../contexts/ProductDisplayContext";

export default function Sort() {
  const { sortOrder, dispatch } = useDisplay();
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="sort" className="text-md">
        Sort by
      </label>
      <select
        name="sort"
        // id="sort"
        className="form-input cursor-pointer"
        value={sortOrder}
        onChange={(e) =>
          dispatch({ type: "setSortOrder", payload: e.target.value })
        }
      >
        <option value="default">default</option>
        <option value="lowToHigh">Low to high</option>
        <option value="highToLow">High to low</option>
      </select>
    </form>
  );
}
