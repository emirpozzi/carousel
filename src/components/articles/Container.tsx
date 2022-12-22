import React, { useEffect, useState } from "react";
import { fetchArticles } from "src/api/fetch-articles";
import { Article } from "src/types/article";
import ArticleSlideshow from "./Slideshow";
import MobileCarousel from "./Carousel";

const ArticleCarousel = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then((articles: Article[]) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <MobileCarousel articles={articles} />
      <ArticleSlideshow articles={articles} />
    </>
  );
};

export default ArticleCarousel;
