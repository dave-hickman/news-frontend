import { useEffect, useState } from "react";
import ArticleSummary from "../components/ArticleSummary";
import Sort from "../components/Sort";
import { getArticles } from "../utils";
import "../Articles.css"

const Articles = () => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
    const response = await getArticles();
    setArticles(response.articles);
    setIsLoading(false);
  }
  
  fetchArticles()}, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <Sort />
        {articles.map((article) => {
          return <ArticleSummary key={article.title} article={article} />;
        })}
      </main>
    );
  }
};

export default Articles;
