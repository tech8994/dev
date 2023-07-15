import React from "react";
import "../scss/index.scss";

export const ReviewStandered = () => {
  return (
    <div className="review_standered">
      <div className="nested_standered">
        <h1>1 review for Sleeve Button Cowl Neck</h1>
        <div className="single_review">
          <div className="review_name">
            <h5>
              {" "}
              John Snow - <span> March 14, 2019</span>
            </h5>
          </div>
          <div className="review_desc">
            <p>
              Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at
              egestas magna molestie a. Proin ac ex maximus, ultrices justo
              eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in
              vehicula lacus scelerisque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
