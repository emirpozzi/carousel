import React from "react";
import { Article } from "src/types/article";
import ArticleHeader from "src/components/ArticleHeader";
import StaticImage from "src/components/core/StaticImage";
import ArrowLink from "./core/ArrowLink";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  return (
    <div className="card">
      <ArticleHeader article={article} />
      <div className="img-wrapper ">
        <StaticImage url={article.imageUrl} alt={article.modelName} />
      </div>
      <p className="links-container">
        <ArrowLink tag="LEARN" link={"/learn/" + article.id} />
        <ArrowLink tag="SHOP" link={"/shop/" + article.id} />
      </p>
    </div>
  );
};

export default ArticleItem;
