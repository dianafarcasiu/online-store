export default function ProductInfo({ product }) {
  return (
    <>
      <h2 className="text-2xl font-bold pb-3">{product.title}</h2>
      <h4 className="text-xl font-bold pb-4">{`- ${product.category} -`}</h4>
      <h6 className="text-lg font-bold pb-8 text-purple-400">{`$ ${product.price}`}</h6>
      <p className="leading-loose pb-6">{product.description}</p>
      {product.free_shipping && <small>* Includes free shipping.</small>}
    </>
  );
}
