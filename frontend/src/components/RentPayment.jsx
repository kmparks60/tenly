import React, { useState } from "react";
import rent from "../assets/rent.jpg";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";

const states = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const RentPayment = () => {
  const [method, setMethod] = useState("Card");

  const [form, setForm] = useState({
    first: "", last: "", address1: "", address2: "", city: "",
    state: "", country: "USA", zip: "", email: "", phone: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const renderMethodFields = () => {
    switch (method) {
      case "PayPal":
        return <div className="bg-gray-100 p-4 rounded">[PayPal Payment Placeholder]</div>;
      case "Plaid":
        return <div className="bg-gray-100 p-4 rounded">[Plaid Bank Link Placeholder]</div>;
      default:
        return <div className="bg-gray-100 p-4 rounded">[Card Entry Placeholder]</div>;
    }
  };

  return (
    <>
    <NavBar />
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${rent})` }}
    >
      <div className="absolute inset-0 bg-[#2C3E50]/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-3xl text-[#2C3E50]">
        <h2 className="text-2xl font-bold mb-4">Rent Payment</h2>
        <p className="mb-6 font-semibold">Paying for:  - Unit #</p>

        <div className="mb-4">
          <label className="block font-medium mb-1">Payment Method:</label>
          <select
            className="w-full border p-2 rounded"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="Card">Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Plaid">Bank (Plaid)</option>
          </select>
        </div>

        {renderMethodFields()}

        <div className="grid grid-cols-2 gap-4 mt-6">
          <input name="first" placeholder="First Name" className="border p-2 rounded" onChange={handleChange} />
          <input name="last" placeholder="Last Name" className="border p-2 rounded" onChange={handleChange} />
          <input name="address1" placeholder="Address 1" className="col-span-2 border p-2 rounded" onChange={handleChange} />
          <input name="address2" placeholder="Address 2" className="col-span-2 border p-2 rounded" onChange={handleChange} />
          <input name="city" placeholder="City" className="border p-2 rounded" onChange={handleChange} />
          <select name="state" className="border p-2 rounded" onChange={handleChange}>
            <option value="">State</option>
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <input name="country" value="USA" disabled className="border p-2 rounded" />
          <input name="zip" placeholder="Zipcode" className="border p-2 rounded" onChange={handleChange} />
          <input name="email" placeholder="Email" className="col-span-2 border p-2 rounded" onChange={handleChange} />
          <input name="phone" placeholder="Phone" className="col-span-2 border p-2 rounded" onChange={handleChange} />
        </div>

        <button className="mt-6 w-full bg-[#129B80] text-white py-2 rounded hover:bg-[#0f7f69] transition">
          Submit Payment
        </button>
      </div>
    </div>
    </>
  );
};

export default RentPayment;
