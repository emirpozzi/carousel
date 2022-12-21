import React, { useEffect, useState } from "react";
import { fetchArticles } from "src/api/fetch-articles";
import { Article } from "src/types/article";
import ArrowButton from "src/components/core/ArrowButton";
import Scrollbar from "src/components/core/Scrollbar";
import { WIDTH_CARD, VISIBLE_ITEMS } from "src/lib/articles-constants";
import { isMovementInvalid } from "src/lib/carousel";
import ArticleList from "./ArticleList";

/** Number of images in assets */
const NUMBER_ARTICLES = 8;

const ArticleCarousel = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [shownArticles, setShownArticles] = useState<Article[]>([]);
  const [index, setIndex] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(0);
  const [offsetX, setOffsetX] = useState(WIDTH_CARD);

  useEffect(() => {
    fetchArticles().then((articles: Article[]) => {
      setArticles(articles);
      setShownArticles(articles.slice(0, VISIBLE_ITEMS));
    });
  }, []);

  useEffect(() => {
    setShownArticles(articles.slice(index, VISIBLE_ITEMS + index));
  }, [index, articles]);

  useEffect(() => {
    const carousel = document.getElementById("mobile-element");
    if (carousel) {
      carousel.onclick = () => {
        const movementDirection = Math.sign(scrollEnd - scrollStart);
        if (isMovementInvalid(movementDirection, offsetX)) return;

        carousel.scrollLeft += WIDTH_CARD * movementDirection;

        setOffsetX((offsetX) => offsetX + WIDTH_CARD * movementDirection);
      };
    }
  }, [offsetX, scrollEnd, scrollStart]);

  const handleRightClick = () => {
    if (index === VISIBLE_ITEMS) return;
    setIndex((index) => index + 1);
  };

  const handleLeftClick = () => {
    if (index === 0) return;
    setIndex((index) => index - 1);
  };

  return (
    <>
      <ul
        id="mobile-element"
        onMouseDown={(e) => setScrollEnd(e.clientX)}
        onMouseUp={(e) => setScrollStart(e.clientX)}
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
        selectedPoint={offsetX / WIDTH_CARD - 1}
      />
    </>
  );
};

export default ArticleCarousel;
