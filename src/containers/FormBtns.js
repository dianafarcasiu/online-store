import FormBtn from "../components/FormBtn";

export default function FormBtns({ handleFilter, handleReset }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row items-center text-gray-950 font-bold">
      <FormBtn
        color="bg-purple-400"
        hoverColor="bg-purple-500"
        handleAction={handleFilter}
      >
        Search
      </FormBtn>
      <FormBtn
        color="bg-orange-400"
        hoverColor="bg-orange-500"
        handleAction={handleReset}
      >
        Reset
      </FormBtn>
    </div>
  );
}
