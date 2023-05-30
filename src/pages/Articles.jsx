import { useEffect, useState } from "react";
import ArticleSummary from "../components/ArticleSummary";
import Sort from "../components/Sort";
import { getArticles } from "../utils";

const Articles = () => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("im here");
    getArticles()
      .then((response) => {
        setArticles(response.data.articles);
      })
      .then(setIsLoading(false));
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <Sort />
        {articles.map((article) => {
          return <ArticleSummary article={article} />;
        })}
      </main>
    );
  }
};

export default Articles;
