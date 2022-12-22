import React from "react";
import ArticleHeader from "./Header";
import StaticImage from "src/components/core/StaticImage";
import ArrowLink from "../core/ArrowLink";
import { Article } from "../../types/article";

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
