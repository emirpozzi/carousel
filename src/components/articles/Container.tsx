import React, { useEffect, useState } from "react";
import { fetchArticles } from "src/api/fetch-articles";
import { Article } from "src/types/article";
import Slideshow from "./Slideshow";
import Carousel from "./Carousel";

const Container = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles().then((articles: Article[]) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <Carousel articles={articles} />
      <Slideshow articles={articles} />
    </>
  );
};

export default Container;
