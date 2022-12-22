import React from "react";
import { Article } from "src/types/article";
import Item from "./Item";

type Props = {
  articles: Article[];
};

const List = ({ articles }: Props) => {
  return (
    <>
      {articles.map((item: Article) => (
        <li key={item.id}>
          <Item article={item} />
        </li>
      ))}
    </>
  );
};

export default List;
