import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rent from "../assets/rent.jpg";
import NavBar from "./NavBar";


const RentLanding = () => {
  const navigate = useNavigate();
  const [property, setProperty] = useState("");
  const [unit, setUnit] = useState("");
  const [showModal, setShowModal] = useState(false);

  const units = ["101", "102", "103"];

  const handleConfirm = () => {
    setShowModal(false);
    navigate("/pay", { state: { property, unit } });
  };

  return (
    <>
    <NavBar />
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${rent})` }}
    >
      {/* Blurred overlay */}
      <div className="absolute inset-0 bg-[#2C3E50]/70 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-lg text-[#2C3E50]">
        <h2 className="text-2xl font-bold mb-6 text-center">Rent Payment Access</h2>

        {/* Property Select */}
        <label className="block mb-2 font-semibold">Select Property:</label>
        <select
          className="w-full mb-4 p-2 rounded border"
          value={property}
          onChange={(e) => {
            setProperty(e.target.value);
            setUnit("");
          }}
        >
          <option value="">-- Choose Property --</option>
          <option value="Woodmont Mews">Woodmont Mews</option>
        </select>

        {/* Unit Select */}
        {property && (
          <>
            <label className="block mb-2 font-semibold">Select Unit:</label>
            <select
              className="w-full mb-4 p-2 rounded border"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">-- Choose Unit --</option>
              {units.map((u) => (
                <option key={u} value={u}>
                  Unit #{u}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Continue Button */}
        {property && unit && (
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-[#129B80] text-white py-2 rounded hover:bg-[#0f7f69] transition"
          >
            Continue to Payment
          </button>
        )}
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-20">
          <div className="bg-[#2C3E50] text-white bg-opacity-95 backdrop-blur-md p-6 border-2 border-black rounded-lg shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-4">Confirm Rent Payment</h3>
            <p className="mb-6">
              You're paying rent for:<br />
              <strong>{property} - Unit #{unit}</strong>
            </p>
            <div className="flex justify-around">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#129B80] text-white rounded" onClick={handleConfirm}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default RentLanding;
