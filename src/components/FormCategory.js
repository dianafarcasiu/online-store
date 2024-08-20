import { useDisplay } from "../contexts/ProductDisplayContext";

export default function Category() {
  const { category, dispatch } = useDisplay();
  return (
    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="category" className="text-md">
        Select category
      </label>
      <select
        name="category"
        id="category"
        className="form-input cursor-pointer"
        value={category}
        onChange={(e) =>
          dispatch({ type: "setCategory", payload: e.target.value })
        }
      >
        <option defaultValue="All">all</option>
        <option defaultValue="Bedroom">Bedroom</option>
        <option defaultValue="Kitchen">Kitchen</option>
        <option defaultValue="Living Room">Living Room</option>
      </select>
    </form>
  );
}
