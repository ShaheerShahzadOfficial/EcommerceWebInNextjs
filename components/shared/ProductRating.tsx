import React, { useState } from "react";
import "@/styles/productRating.css";
const ProductRating = ({ className }: { className?: string }) => {
  const [Rating, setRating] = useState<number>(0);

  const handleRatingChange = (event: any) => {
    setRating(Number(event.target.value));
    console.log(event.target.value);
  };

  return (
    <div className={`ProductRating ${className}`}>
      <input
        value="5"
        name="rating"
        id="star5"
        type="radio"
        checked={Rating === 5}
        onChange={handleRatingChange}
      />
      <label htmlFor="star5"></label>

      <input
        value="4"
        name="rating"
        id="star4"
        type="radio"
        checked={Rating === 4}
        onChange={handleRatingChange}
      />
      <label htmlFor="star4"></label>

      <input
        value="3"
        name="rating"
        id="star3"
        type="radio"
        checked={Rating === 3}
        onChange={handleRatingChange}
      />
      <label htmlFor="star3"></label>

      <input
        value="2"
        name="rating"
        id="star2"
        type="radio"
        checked={Rating === 2}
        onChange={handleRatingChange}
      />
      <label htmlFor="star2"></label>

      <input
        value="1"
        name="rating"
        id="star1"
        type="radio"
        checked={Rating === 1}
        onChange={handleRatingChange}
      />
      <label htmlFor="star1"></label>
    </div>
  );
};

export default ProductRating;
