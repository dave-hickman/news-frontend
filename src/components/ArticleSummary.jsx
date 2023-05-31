import { Link } from "react-router-dom";
import "../ArticleSummary.css"

const ArticleSummary = ({ article }) => {
  return (
    <section className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <h3>{article.author}</h3>
      <Link to={`/articles/${article.article_id}`}>
        <img
          src={article.article_img_url}
          alt={`thumbnail for ${article.title}`}
        />{" "}
      </Link>
    </section>
  );
};

export default ArticleSummary;
