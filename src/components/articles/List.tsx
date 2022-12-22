import React from "react";
import { Article } from "src/types/article";
import ArticleItem from "./Item";

type Props = {
  articles: Article[];
};

const ArticleList = ({ articles }: Props) => {
  return (
    <>
      {articles.map((item: Article) => (
        <li key={item.id}>
          <ArticleItem article={item} />
        </li>
      ))}
    </>
  );
};

export default ArticleList;
