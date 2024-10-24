import ProductGrid from "../features/products/ProductGrid";
import productData from "../data/productData";
import shuffleArray from "../helpers/shuffleArray";
import Header from "./Header";
import Carousel from "./Carousel";
import Underline from "./Underline";

export default function Home() {
  const randomProducts = shuffleArray([...productData]).slice(0, 3);

  return (
    <div className="wrapper">
      <div className="flex flex-col items-center gap-20 mb-28 lg:flex-row lg:justify-center">
        <Header />
        <Carousel />
      </div>

      <h3 className="mb-4 text-2xl font-bold">Popular Products</h3>
      <Underline />

      <ProductGrid products={randomProducts} />
    </div>
  );
}
