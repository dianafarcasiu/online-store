import { useNavigate, useParams } from "react-router-dom";
import productData from "../../data/productData";
import ProductInfo from "./ProductInfo";
import AddToCartBtn from "../cart/AddToCartBtn";

export default function ProductDetails() {
  const { productID } = useParams();
  const product = productData.find((prod) => prod.id === parseInt(productID));
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <button
        className="px-4 py-2 tracking-wide transition-all duration-100 ease-linear active:scale-100 text-zinc-200 hover:scale-110"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>
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
