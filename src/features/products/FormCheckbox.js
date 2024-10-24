import { useDisplay } from "../../contexts/ProductDisplayContext";

export default function Checkbox() {
  const { freeShipping, dispatch } = useDisplay();
  return (
    <form
      className="flex flex-col gap-2 items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="checkbox" className="text-md">
        Free shipping
      </label>
      <input
        type="checkbox"
        className="cursor-pointer h-5 w-5 accent-purple-500"
        checked={freeShipping}
        onChange={(e) =>
          dispatch({ type: "setFreeShipping", payload: e.target.value })
        }
      ></input>
    </form>
  );
}
