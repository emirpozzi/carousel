import { Article } from "../types/article";

export function fetchArticles(): Promise<Article[]> {
  return fetch(`api/cars.json`)
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((error: Error) =>
      console.error("Errow while retrieving article data", error.message)
    );
}
