import DisplayBtn from "./DisplayBtn";
import { useDisplay } from "../../contexts/ProductDisplayContext";

export default function ProductsDisplayBtns() {
  const { displayGrid, dispatch } = useDisplay();

  return (
    <div className="flex justify-center">
      <DisplayBtn
        icon="fa-solid fa-grip"
        handleDisplay={() => dispatch({ type: "setDisplay", payload: true })}
        active={displayGrid}
      />
      <DisplayBtn
        icon="fa-solid fa-grip-lines"
        handleDisplay={() => dispatch({ type: "setDisplay", payload: false })}
        active={!displayGrid}
      />
    </div>
  );
}
