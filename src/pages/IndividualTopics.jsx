import { useEffect, useState } from "react";
import "../IndividualTopics.css";
import { useParams, Link } from "react-router-dom";
import { getArticlesByTopic } from "../utils";

const IndividualTopics = () => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchArticlesByTopic = async () => {
      const response = await getArticlesByTopic(slug);
      setArticles(response.articles);
      setIsLoading(false);
    };

    fetchArticlesByTopic();
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else {
    return (
      <section className="topic-articles-container">
        <h2 className="indiv-topic-header">{slug}</h2>
        {articles.map((article) => {
            const date = new Date(article.created_at)
            const formattedDate = date.toLocaleString('en-GB')
          return (
            <Link key={article.article_id} to={`/articles/${article.article_id}`}>
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
