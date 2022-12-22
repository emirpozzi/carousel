import React from "react";
import "./ArrowButton.css";

type Props = {
  orientation: "left" | "right";
  isDisabled?: boolean;
  onClick?: () => void;
};

const ArrowButton = ({ orientation, isDisabled = false, onClick }: Props) => {
  return (
    <button disabled={isDisabled}>
      <img
        className={`${orientation === "left" ? "rotate-left" : "button"}`}
        src={"/assets/svg/chevron-circled.svg"}
        onClick={() => (onClick && !isDisabled ? onClick() : null)}
        alt="circled arrow button"
        width="40px"
        height="40px"
      />
    </button>
  );
};

export default ArrowButton;
