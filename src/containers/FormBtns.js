import FormBtn from "../components/FormBtn";
import { useDisplay } from "../contexts/ProductDisplayContext";

export default function FormBtns() {
  const { dispatch } = useDisplay();
  return (
    <div className="flex flex-col gap-4 sm:flex-row items-center text-gray-950 font-bold">
      <FormBtn
        color="bg-purple-400"
        hoverColor="bg-purple-500"
        handleAction={() => dispatch({ type: "filter" })}
      >
        Search
      </FormBtn>
      <FormBtn
        color="bg-orange-400"
        hoverColor="bg-orange-500"
        handleAction={() => dispatch({ type: "reset" })}
      >
        Reset
      </FormBtn>
    </div>
  );
}
