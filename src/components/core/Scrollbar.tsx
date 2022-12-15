import React from "react";

type Props = {
  numberOfPoints: number;
  selectedPoint: number;
};

const Scrollbar = ({ numberOfPoints, selectedPoint }: Props) => {
  return (
    <div className="flex-container">
      <div className="scrollbar">
        {[...Array(numberOfPoints)].map((_e: number, i: number) => (
          <span
            className={`${i === selectedPoint ? "selected-dot" : "dot"}`}
            key={i}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Scrollbar;
