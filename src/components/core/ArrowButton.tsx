import React from "react";

type Props = {
  orientation: "left" | "right";
  onClick?: () => void;
};

const ArrowButton = ({ orientation, onClick }: Props) => {
  return (
    <button>
      <img
        className={`${orientation === "left" ? "rotate-left" : "button"}`}
        src={require("src/assets/svg/chevron-circled.svg")}
        onClick={() => (onClick ? onClick() : null)}
        alt="circled arrow button"
        width="40px"
        height="40px"
      />
    </button>
  );
};

export default ArrowButton;
