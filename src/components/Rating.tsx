import React from "react";

const Rating = () => {
  return (
    <div className="mt-2">
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-[#FFB500]"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-[#FFB500]"
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-gray bg-[#FFB500]"
        />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFB500]" />
        <input type="radio" name="rating-1" className="mask mask-star bg-[#FFB500]" />
      </div>
    </div>
  );
};

export default Rating;
