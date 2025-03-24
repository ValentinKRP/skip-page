import React from "react";

const SkipCard = ({ size, priceBeforeVat, vat, isAvailable }) => {
  const priceWithVat = priceBeforeVat + (priceBeforeVat * vat) / 100;

  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${isAvailable ? 'hover:bg-gray-100' : 'bg-gray-300'}`}>
      <h2 className="text-xl font-semibold text-primary mb-2">Size: {size} cubic yards</h2>
      <p className="text-gray-700">Price (before VAT): £{priceBeforeVat}</p>
      <p className="text-gray-700">VAT: {vat}%</p>
      <p className="font-bold text-xl text-primary">Total: £{priceWithVat.toFixed(2)}</p>
      <button
        className={`mt-4 py-2 px-4 text-white rounded ${isAvailable ? 'bg-primary hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isAvailable}
      >
        {isAvailable ? "Select Skip" : "Unavailable"}
      </button>
    </div>
  );
};

export default SkipCard;
