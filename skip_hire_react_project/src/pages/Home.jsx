import React from "react";
import Header from "../components/Header";
import SkipList from "../components/SkipList";

const Home = () => {
  const skips = [
    { id: 11554, size: 4, price_before_vat: 311, vat: 20, allowed_on_road: true },
    { id: 11555, size: 6, price_before_vat: 342, vat: 20, allowed_on_road: true },
    // Add more skip data here
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Available Skips</h2>
        <SkipList skips={skips} />
      </div>
    </div>
  );
};

export default Home;
