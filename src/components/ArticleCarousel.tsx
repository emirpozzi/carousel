import React, { useEffect, useRef, useState } from "react";
import { fetchArticles } from "src/api/fetch-articles";
import { Article } from "src/types/article";
import ArrowButton from "src/components/core/ArrowButton";
import Scrollbar from "src/components/core/Scrollbar";
import {
  WIDTH_CARD,
  VISIBLE_ITEMS,
  NUMBER_ARTICLES,
} from "src/lib/articles-constants";
import { isMovementInvalid } from "src/lib/carousel";
import ArticleList from "./ArticleList";

// TODO remove debounce package

const ArticleCarousel = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [shownArticles, setShownArticles] = useState<Article[]>([]);
  const [index, setIndex] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [offset, setOffset] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const carouselRel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    fetchArticles().then((articles: Article[]) => {
      setArticles(articles);
    });
  }, []);

  useEffect(() => {
    setShownArticles(articles.slice(index, VISIBLE_ITEMS + index));
  }, [articles, index]);

  useEffect(() => {
    const movement = Math.sign(offset);
    console.log("movement", movement);

    if (isMovementInvalid(movement, scrollPosition)) {
      console.log("ITS INVALID");
      return;
    }
    // add state for an index for the mobile version
    if (carouselRel.current) {
      carouselRel.current.scrollLeft += movement * WIDTH_CARD;
      console.log("before setting", scrollPosition);
      setScrollPosition((position) => position + movement);
      console.log("posafter setting", scrollPosition);
    }
  }, [offset]);

  const handleRightClick = () => {
    if (index === VISIBLE_ITEMS) return;
    setIndex((index) => index + 1);
  };

  const handleLeftClick = () => {
    if (index === 0) return;
    setIndex((index) => index - 1);
  };

  // TODO mobile and desktop put them in 2 different components?
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

      <ul id="desktop-element">
        <ArticleList articles={shownArticles} />
      </ul>

      <div className="buttons">
        <ArrowButton
          orientation="left"
          onClick={handleLeftClick}
          isDisabled={index === 0}
        />
        <ArrowButton
          orientation="right"
          onClick={handleRightClick}
          isDisabled={index === VISIBLE_ITEMS}
        />
      </div>

      <Scrollbar
        numberOfPoints={NUMBER_ARTICLES}
        selectedPoint={scrollPosition}
      />
    </>
  );
};

export default ArticleCarousel;
