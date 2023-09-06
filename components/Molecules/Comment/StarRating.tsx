import { Star, StarBorder } from "@mui/icons-material";
import React, { useState } from "react";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number | null>(null);

  const handleRatingClick = (selectedRating: number) => {
    if (rating === selectedRating) {
      // If the same star is clicked again, reset the rating
      setRating(null);
    } else {
      setRating(selectedRating);
    }
  };

  return (
    <div className='flex'>
      {[1, 2, 3, 4, 5].map((star) =>
        star <= (rating || 0) ? (
          <Star
            key={star}
            className={`text-[1.4rem] ${
              star <= (rating || 0) ? "text-yellow-500" : "text-gray-400"
            } cursor-pointer`}
            onClick={() => handleRatingClick(star)}
          />
        ) : (
          <StarBorder
            key={star}
            className={`text-[1.4rem] ${
              star <= (rating || 0) ? "text-yellow-500" : "text-gray-400"
            } cursor-pointer`}
            onClick={() => handleRatingClick(star)}
          />
        )
      )}
    </div>
  );
};

export default StarRating;
