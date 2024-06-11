import Underline from "../components/Underline";
import Carousel from "../containers/Carousel";
import Header from "../containers/Header";
import ProductGrid from "../containers/ProductGrid";
import productData from "../data/productData";
import shuffleArray from "../helpers/shuffleArray";

export default function Home() {
  const randomProducts = shuffleArray([...productData]).slice(0, 3);

  return (
    <div className="wrapper">
      <div className="flex flex-col items-center gap-20 mb-28 lg:flex-row lg:justify-center">
        <Header />
        <Carousel />
      </div>

      <h3 className="font-bold text-2xl mb-4">Popular Products</h3>
      <Underline />

      <ProductGrid products={randomProducts} />
    </div>
  );
}
