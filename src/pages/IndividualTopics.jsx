import { useEffect, useState } from "react";
import "../IndividualTopics.css";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getArticlesByTopic } from "../utils/api";
import Sort from "../components/Sort";

const IndividualTopics = ({
  queryString,
  setQueryString,
  setSort,
  sort,
  setAscDesc,
  ascDesc,
}) => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();
  const { slug } = useParams();

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
    const fetchArticlesByTopic = async () => {
      const response = await getArticlesByTopic(slug, queryString);
      setArticles(response.articles);
      setIsLoading(false);
    };

    fetchArticlesByTopic();
  }, [queryString]);

  useEffect(() => {
    queryStringBuilder();
  }, [sort, ascDesc]);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <section className="topic-articles-container">
        <h2 className="indiv-topic-header">{slug}</h2>
        <div className="sort-container">
          <Sort setSort={setSort} setAscDesc={setAscDesc} />
        </div>
        {articles.map((article) => {
          const date = new Date(article.created_at);
          const formattedDate = date.toLocaleString("en-GB");
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <article className="topic-article-container">
                <h3 className="topic-article-title">{article.title}</h3>
                <h4>By: {article.author}</h4>
                <h4>{formattedDate}</h4>
                <img src={article.article_img_url} />
              </article>
            </Link>
          );
        })}
      </section>
    );
  }
};

export default IndividualTopics;
