import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../cart/cartSlice";

function OrderForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit() {
    if (name && address && phone) {
      navigate("/order/completed");
      dispatch(clearCart());
    }
  }

  return (
    <form className="text-sm sm:text-base">
      <div className="flex flex-col items-center gap-2 mb-5 sm:flex-row">
        <label className="sm:basis-40">Full name</label>
        <input
          type="text"
          required
          name="name"
          className="px-2 py-1 text-gray-900 bg-gray-300 rounded-lg grow focus:outline-none focus:ring focus:ring-gray-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mb-5 sm:flex-row">
        <label className="sm:basis-40">Email</label>
        <input
          type="email"
          required
          name="email"
          className="px-2 py-1 text-gray-900 bg-gray-300 rounded-lg grow focus:outline-none focus:ring focus:ring-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mb-5 sm:flex-row">
        <label className="sm:basis-40">Phone number</label>
        <input
          type="tel"
          required
          name="phone"
          className="px-2 py-1 text-gray-900 bg-gray-300 rounded-lg grow focus:outline-none focus:ring focus:ring-gray-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-2 mb-5 sm:flex-row">
        <label className="sm:basis-40">Address</label>
        <input
          type="text"
          required
          name="address"
          className="px-2 py-1 text-gray-900 bg-gray-300 rounded-lg grow focus:outline-none focus:ring focus:ring-gray-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <button
        className="block mx-auto px-3 py-1.5 mt-8 transition-colors bg-purple-500 rounded-lg hover:bg-purple-600 active:scale-95"
        onClick={handleSubmit}
      >
        Confirm & place order
      </button>
    </form>
  );
}

export default OrderForm;
