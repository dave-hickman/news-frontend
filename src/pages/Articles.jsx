import { useEffect, useState } from "react";
import ArticleSummary from "../components/ArticleSummary";
import Sort from "../components/Sort";
import { getArticles } from "../utils";
import "../Articles.css"

const Articles = () => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("")
  const [ascDesc, setAscDesc] = useState("")

  useEffect(() => {
    const fetchArticles = async () => {
    const response = await getArticles(sort, ascDesc);
    setArticles(response.articles);
    setIsLoading(false);
  }
  
  fetchArticles()}, [sort, ascDesc]);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <Sort setSort={setSort} setAscDesc={setAscDesc}/>
        {articles.map((article) => {
          return <ArticleSummary key={article.title} article={article} />;
        })}
      </main>
    );
  }
};

export default Articles;
