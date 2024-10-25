import { Link } from "react-router-dom";

function OrderCompleted() {
  return (
    <div className="flex items-center justify-center h-[85vh]">
      <div className="text-center">
        <i
          className="text-2xl sm:text-5xl text-lime-600 fa fa-check-circle-o"
          aria-hidden="true"
        ></i>
        <h1 className="mt-2 mb-6 text-lg font-bold sm:text-2xl">
          Order completed!
        </h1>
        <p className="mb-3 text-md sm:text-xl">
          Congratulations! You just made your home a bit more{" "}
          <span className="text-3xl text-purple-500 sm:text-5xl logo">
            comfy
          </span>
          !
        </p>
        <p className="text-sm sm:text-md">
          Thank you, order and delivery infos were sent to your email address.
        </p>

        <Link to="/">
          <button className="px-4 py-2 mt-10 transition-colors bg-purple-400 rounded-lg text-gray-950 hover:bg-purple-500 active:scale-95">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderCompleted;
