import Category from "./FormCategory";
import Checkbox from "./FormCheckbox";
import PriceRange from "./FormPriceRange";
import Search from "./FormSearch";
import Sort from "./FormSort";
import FormBtns from "./FormBtns";

export default function ProductFilters() {
  return (
    <div className="grid w-full h-auto gap-10 p-8 mb-16 bg-gray-700 rounded-lg shadow-lg sm:grid-cols-2 md:grid-cols-3 shadow-black/15">
      <Search />
      <Category />
      <Sort />
      <PriceRange />
      <Checkbox />

      <FormBtns />
    </div>
  );
}
