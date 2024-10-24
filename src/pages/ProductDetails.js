import { useParams } from "react-router-dom";
import productData from "../data/productData";
import ProductInfo from "../features/products/ProductInfo";
import AddToCartBtn from "../features/cart/AddToCartBtn";

export default function ProductDetails() {
  const { productID } = useParams();
  const product = productData.find((prod) => prod.id === parseInt(productID));

  return (
    <div className="wrapper">
      <div className="grid gap-12 mt-10 md:grid-cols-2 md:gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg h-96 w-96 md:h-[30rem] md:w-[30rem] shadow-lg shadow-black/20"
        ></img>

        <div>
          <ProductInfo product={product} />
          <AddToCartBtn product={product} />
        </div>
      </div>
    </div>
  );
}
