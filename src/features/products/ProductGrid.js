import { Link } from "react-router-dom";
import { useDisplay } from "../../contexts/ProductDisplayContext";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const { displayGrid } = useDisplay();
  return (
    <div
      className={`grid gap-5 ${
        displayGrid ? "md:grid-cols-2 lg:grid-cols-3" : ""
      } `}
    >
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} displayGrid={displayGrid} />
        </Link>
      ))}
    </div>
  );
}
