export default function ProductCard({ product, displayGrid }) {
  return (
    <div
      className={`bg-gray-700 text-center rounded-xl p-5 cursor-pointer shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/50 hover:scale-105 transition-all duration-300 ease-in-out ${
        displayGrid
          ? ""
          : "flex flex-col sm:flex-row items-center justify-start gap-8 md:gap-24"
      }`}
    >
      <img
        src={product?.image}
        alt={product?.title}
        className={`rounded-xl h-64 md:h-52 object-cover ${
          displayGrid ? "w-full" : "w-48 h-48 md:w-64"
        }`}
      />
      <div className={`pb-2 ${displayGrid ? "pt-8" : "text-start pt-0"}`}>
        <h4 className="pb-3 font-bold text-md sm:text-lg">{product.title}</h4>
        <p className="text-sm font-bold text-purple-400">{`$ ${product.price}`}</p>
      </div>
    </div>
  );
}
