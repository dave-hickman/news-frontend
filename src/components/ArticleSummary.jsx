import { Link } from "react-router-dom";
import "../ArticleSummary.css";

const ArticleSummary = ({ article }) => {
  return (
    <section className="article-card">
      <div className="title-subtext-wrapper">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <div className="article-card-sub-info">
        <div className="sub-info-separator">
          <h3>By: {article.author}</h3>
          <h3 className="article-card-text">
            Comments: {article.comment_count}
          </h3>
        </div>
        <div className="sub-info-separator right-side">
          <h3 className="article-card-text">Votes: {article.votes}</h3>
          <Link to={`/topics/${article.topic}`}>
            <h3 className="article-card-text">Topic: {article.topic}</h3>
          </Link>
        </div>
      </div>
      </div>
      <Link to={`/articles/${article.article_id}`}>
        <img className="article-summary-image"
          src={article.article_img_url}
          alt={`thumbnail for ${article.title}`}
        />{" "}
      </Link>
    </section>
  );
};

export default ArticleSummary;
