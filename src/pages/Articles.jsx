import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleSummary from "../components/ArticleSummary";
import Sort from "../components/Sort";
import { getArticles } from "../utils/api";
import "../Articles.css";

const Articles = ({queryString, setQueryString, setSort, sort, setAscDesc, ascDesc}) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const queryStringBuilder = () => {
    if (sort && ascDesc) {
      setQueryString(`?sort_by=${sort}&order=${ascDesc}`);
    } else if (!sort && ascDesc) {
      setQueryString(`?order=${ascDesc}`);
    } else if (sort && !ascDesc) {
      setQueryString(`?sort_by=${sort}`);
    } else setQueryString("");
  };

  
  useEffect(() => {
    setIsLoading(true);
    setSearchParams(queryString);
    const fetchArticles = async () => {
      const response = await getArticles(queryString);
      setArticles(response.articles);
      setIsLoading(false);
    };

    fetchArticles();
  }, [queryString]);

  useEffect(() => {
    queryStringBuilder();
  }, [sort, ascDesc]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <Sort setSort={setSort} setAscDesc={setAscDesc} />
        {articles.map((article) => {
          return <ArticleSummary key={article.article_id} article={article} />;
        })}
      </main>
    );
  }
};

export default Articles;
