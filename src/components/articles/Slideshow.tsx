import React, { useEffect, useState } from "react";
import { VISIBLE_ITEMS } from "src/lib/articles-constants";
import { Article } from "src/types/article";
import ArrowButton from "../core/ArrowButton";
import ArticleList from "./List";

type Props = {
  articles: Article[];
};

const ArticleSlideshow = ({ articles }: Props) => {
  const [shownArticles, setShownArticles] = useState<Article[]>([]);
  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setShownArticles(articles.slice(index, VISIBLE_ITEMS + index));
  }, [articles, index]);

  const handleRightClick = () => {
    if (index === VISIBLE_ITEMS) return;
    setIndex((index) => index + 1);
  };

  const handleLeftClick = () => {
    if (index === 0) return;
    setIndex((index) => index - 1);
  };

  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setShownArticles(articles.slice(index, VISIBLE_ITEMS + index));
      return;
    }
    setShownArticles(
      articles.filter((article: Article) =>
        article.bodyType.startsWith(e.target.value)
      )
    );
  };
  return (
    <>
      <form id="desktop-element">
        <label>Search by:</label>
        <input
          type="text"
          value={searchTerm}
          placeholder="Enter a body type..."
          onChange={handleInputChange}
        />
      </form>

      <ul id="desktop-element">
        <ArticleList articles={shownArticles} />
      </ul>

      {!searchTerm && (
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
      )}

      {searchTerm && !shownArticles.length && (
        <p className="no-results">NO RESULTS</p>
      )}
    </>
  );
};

export default ArticleSlideshow;
