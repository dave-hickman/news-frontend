import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils";
import { useParams } from "react-router-dom";
import "../IndividualArticle.css";

const IndividualArticle = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    const fetchSingleArticle = async () => {
      const response = await getSingleArticle(article_id);
      setArticle(response);
      setIsLoading(false);
    };
    fetchSingleArticle();
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else
    return (
      <section className="article-container">
        <h2 className="article-title">{article.article[0].title}</h2>
        <h3 className="author">{article.article[0].author}</h3>
        <img
          src={article.article[0].article_img_url}
          alt={`thumbnail for ${article.article[0].title}`}
        />
        <div className="sub-text-container">
          <div className="topic">
            <h3 className="topic-text">Topic: {article.article[0].topic}</h3>
          </div>
          <div className="likes-comments">
          <h3 className="likes">Likes: {article.article[0].votes}</h3>
          <h3 className="comments">
            Comments: {article.article[0].comment_count}
          </h3>
          </div>
        </div>
        <p className="article-body">{article.article[0].body}</p>
      </section>
    );
};

export default IndividualArticle;
