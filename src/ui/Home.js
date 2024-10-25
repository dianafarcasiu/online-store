import ProductGrid from "../features/products/ProductGrid";
import productData from "../data/productData";
import shuffleArray from "../helpers/shuffleArray";
import Header from "./Header";
import Carousel from "./Carousel";
import Underline from "./Underline";
import Title from "./Title";

export default function Home() {
  const randomProducts = shuffleArray([...productData]).slice(0, 3);

  return (
    <div className="wrapper">
      <div className="flex flex-col items-center gap-20 mb-28 lg:flex-row lg:justify-center">
        <Header />
        <Carousel />
      </div>

      <Title>Popular Products</Title>

      <ProductGrid products={randomProducts} />
    </div>
  );
}
