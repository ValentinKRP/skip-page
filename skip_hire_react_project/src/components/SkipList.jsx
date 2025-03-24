import React from "react";
import SkipCard from "./SkipCard";

const SkipList = ({ skips }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          size={skip.size}
          priceBeforeVat={skip.price_before_vat}
          vat={skip.vat}
          isAvailable={skip.allowed_on_road}
        />
      ))}
    </div>
  );
};

export default SkipList;
