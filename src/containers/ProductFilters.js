import Category from "../components/FormCategory";
import Checkbox from "../components/FormCheckbox";
import PriceRange from "../components/FormPriceRange";
import Search from "../components/FormSearch";
import Sort from "../components/FormSort";
import FormBtns from "./FormBtns";

export default function ProductFilters() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 w-full bg-gray-700 h-auto rounded-lg mb-16 p-8 shadow-lg shadow-black/15">
      <Search />
      <Category />
      <Sort />
      <PriceRange />
      <Checkbox />

      <FormBtns />
    </div>
  );
}
