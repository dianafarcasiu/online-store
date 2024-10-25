import Underline from "../../ui/Underline";
import PaginationBtns from "./PaginationBtns";
import ProductGrid from "./ProductGrid";
import ProductsDisplayBtns from "./ProductsDisplayBtns";
import ProductFilters from "./ProductFilters";
import { useDisplay } from "../../contexts/ProductDisplayContext";

export default function Products() {
  const { products, firstProductIndex, lastProductIndex } = useDisplay();

  return (
    <div className="wrapper">
      <ProductFilters />

      {products.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-md p-2">{products.length} products</p>
            <ProductsDisplayBtns />
          </div>

          <Underline />
          <ProductGrid
            products={products.slice(firstProductIndex, lastProductIndex)}
          />

          <PaginationBtns />
        </>
      ) : (
        <h4 className="text-xl text-center mt-24">
          Sorry, no products matching your filters was found.
        </h4>
      )}
    </div>
  );
}
