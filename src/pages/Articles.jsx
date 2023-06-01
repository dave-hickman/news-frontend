import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import ArticleSummary from "../components/ArticleSummary";
import Sort from "../components/Sort";
import { getArticles } from "../utils";
import "../Articles.css"

const Articles = ({setQueryString, queryString}) => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("")
  const [ascDesc, setAscDesc] = useState("")
  let [searchParams, setSearchParams] = useSearchParams()
  

  const queryStringBuilder = () => {
    if(sort && ascDesc){
      setQueryString(`?sort_by=${sort}&order=${ascDesc}`)
    }
    else if(!sort && ascDesc){
      setQueryString(`?order=${ascDesc}`)
    }
    else if (sort && !ascDesc){
      setQueryString(`?sort_by=${sort}`)
    }
    else setQueryString("")
  }


  useEffect(() => {
    const fetchArticles = async () => {
    queryStringBuilder()
    const response = await getArticles(queryString);
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
