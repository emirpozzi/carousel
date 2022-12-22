import React from "react";
import StaticImage from "src/components/core/StaticImage";
import "./ArrowLink.css";

type Props = {
  tag: string;
  link: string;
};

const ArrowLink = ({ tag, link }: Props) => {
  return (
    <a href={link} className="links">
      <span>{tag}</span>
      <span className="arrow-svg">
        <StaticImage
          url="/svg/chevron-small.svg"
          width="15px"
          alt="small arrow"
        />
      </span>
    </a>
  );
};

export default ArrowLink;
