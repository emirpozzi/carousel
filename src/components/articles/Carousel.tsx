import React, { useEffect, useRef, useState } from "react";
import { NUMBER_ARTICLES, WIDTH_CARD } from "src/lib/articles-constants";
import { isMovementInvalid } from "src/lib/carousel";
import { Article } from "src/types/article";
import ArticleList from "./List";
import Scrollbar from "../core/Scrollbar";

type Props = {
  articles: Article[];
};

const MobileCarousel = ({ articles }: Props) => {
  const [scrollStart, setScrollStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const carouselRel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const movement = Math.sign(offset);
    if (isMovementInvalid(movement, scrollPosition)) {
      return;
    }
    if (carouselRel.current) {
      carouselRel.current.scrollLeft += movement * WIDTH_CARD;
      setScrollPosition((position) => position + movement);
    }
  }, [offset]);

  return (
    <>
      <ul
        id="mobile-element"
        onMouseDown={(e) => {
          setScrollStart(e.clientX);
        }}
        onMouseUp={(e) => {
          setOffset(scrollStart - e.clientX);
        }}
        ref={carouselRel}
      >
        <ArticleList articles={articles} />
      </ul>
      <Scrollbar
        numberOfPoints={NUMBER_ARTICLES}
        selectedPoint={scrollPosition}
      />
    </>
  );
};

export default MobileCarousel;
