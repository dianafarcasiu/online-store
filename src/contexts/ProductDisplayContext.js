import { createContext, useContext, useReducer, useState } from "react";
import productData from "../data/productData";

const DisplayContext = createContext();

const initialState = {
  currentPage: 1,
  displayGrid: true,
  query: "",
  category: "All",
  sortOrder: "default",
  maxPrice: 600,
  freeShipping: false,
  products: productData,
};

function reducer(state, action) {
  switch (action.type) {
    // Pagination
    case "setPage":
      return { ...state, currentPage: action.payload };
    // Display
    case "setDisplay":
      return { ...state, displayGrid: action.payload };

    // Filtering
    case "setQuery":
      return { ...state, query: action.payload };
    case "setCategory":
      return { ...state, category: action.payload };
    case "setSortOrder":
      return { ...state, sortOrder: action.payload };
    case "setMaxPrice":
      return { ...state, maxPrice: action.payload };
    case "setFreeShipping":
      return { ...state, freeShipping: action.payload };

    case "filter":
      const filteredProducts = productData.filter((product) => {
        const queryMatch = product.title
          .toLowerCase()
          .includes(state.query.toLowerCase());
        const categoryMatch =
          state.category === "All" || product.category === state.category;
        const priceMatch = product.price <= state.maxPrice;
        const shippingMatch = !state.freeShipping || product.free_shipping;
        return queryMatch && categoryMatch && priceMatch && shippingMatch;
      });
      if (state.sortOrder === "lowToHigh")
        filteredProducts.sort((a, b) => a.price - b.price);
      else if (state.sortOrder === "highToLow")
        filteredProducts.sort((a, b) => b.price - a.price);

      return { ...state, products: filteredProducts };

    // Reset
    case "reset":
      return { ...initialState, displayGrid: state.displayGrid };

    default:
      throw new Error("Action unknown.");
  }
}

function DisplayProvider({ children }) {
  const [
    {
      currentPage,
      displayGrid,
      query,
      category,
      sortOrder,
      maxPrice,
      freeShipping,
      products,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Pagination logic
  const productsPerPage = 9;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <DisplayContext.Provider
      value={{
        currentPage,
        displayGrid,
        products,
        query,
        category,
        sortOrder,
        maxPrice,
        freeShipping,
        productsPerPage,
        totalPages,
        lastProductIndex,
        firstProductIndex,
        pageNumbers,
        dispatch,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

function useDisplay() {
  const context = useContext(DisplayContext);
  if (context === undefined)
    throw new Error("DisplayContext was used outside the DisplayProvider.");
  return context;
}

export { DisplayProvider, useDisplay };
