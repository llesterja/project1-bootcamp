import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";

function Star({ value }) {
  const renderStar = (starValue) => {
    if (starValue === 0.5) {
      return <FontAwesomeIcon icon={faStarHalf} color="gold"/>;
    } else if (starValue >= 1) {
      return <FontAwesomeIcon icon={faStar} color="gold"/>;
    } else {
      return <FontAwesomeIcon icon={faStar} color="gold"/>;
    }
  };

  return (
    <span className="star">
      {renderStar(value)}
    </span>
  );
}

export default Star;
