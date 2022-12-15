import React from "react";
import { Article } from "src/types/article";

type Props = {
  article: Article;
};

const ArticleHeader = ({ article }: Props) => {
  return (
    <header>
      <div className="body-type">{article.bodyType}</div>
      <div className="title">
        <strong>{article.modelName}</strong>
        <span className="ml">{article.modelType}</span>
      </div>
    </header>
  );
};

export default ArticleHeader;
