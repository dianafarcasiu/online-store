import { useState } from "react";
import Underline from "../components/Underline";
import PaginationBtns from "../containers/PaginationBtns";
import ProductGrid from "../containers/ProductGrid";
import ProductsDisplayBtns from "../containers/ProductsDisplayBtns";
import productData from "../data/productData";
import ProductFilters from "../containers/ProductFilters";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayGrid, setDisplayGrid] = useState(true);
  const [products, setProducts] = useState(productData);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [maxPrice, setMaxPrice] = useState(600);
  const [freeShipping, setFreeShipping] = useState(false);

  // Filtering logic
  function filterProducts() {
    const filteredProducts = productData.filter((product) => {
      const queryMatch = product.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const categoryMatch = category === "All" || product.category === category;
      const priceMatch = product.price <= maxPrice;
      const shippingMatch = !freeShipping || product.free_shipping;

      return queryMatch && categoryMatch && priceMatch && shippingMatch;
    });

    if (sortOrder === "lowToHigh")
      filteredProducts.sort((a, b) => a.price - b.price);
    else if (sortOrder === "highToLow")
      filteredProducts.sort((a, b) => b.price - a.price);

    setProducts(filteredProducts);
  }
  function resetValues() {
    setQuery("");
    setCategory("All");
    setSortOrder("default");
    setMaxPrice(600);
    setFreeShipping(false);
    setCurrentPage(1);
    setProducts(productData);
  }

  // Pagination logic
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;

  return (
    <div className="wrapper">
      <ProductFilters
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        freeShipping={freeShipping}
        setFreeShipping={setFreeShipping}
        filterProducts={filterProducts}
        resetValues={resetValues}
      />

      {products.length > 0 ? (
        <>
          <div className="flex items-center justify-between mb-2">
            <p className="font-bold text-md p-2">{products.length} products</p>
            <ProductsDisplayBtns
              displayGrid={displayGrid}
              setDisplayGrid={setDisplayGrid}
            />
          </div>

          <Underline />
          <ProductGrid
            products={products.slice(firstProductIndex, lastProductIndex)}
            displayGrid={displayGrid}
          />

          <PaginationBtns
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <h4 className="text-xl text-center mt-24">
          Sorry, no products matching your filters was found.
        </h4>
      )}
    </div>
  );
}
