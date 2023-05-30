import { useEffect, useState } from "react";
import { getSingleArticle } from "../utils";
import { useParams } from "react-router-dom";

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
      <section>
        <h2>{article.article[0].title}</h2>
        <h3>{article.article[0].author}</h3>
        <h4>{article.article[0].topic}</h4>
        <p>Likes:{article.article[0].votes}</p>
        <p>Comments:{article.article[0].comment_count}</p>
        <img
          src={article.article[0].article_img_url}
          alt={`thumbnail for ${article.article[0].title}`}
        />
        <p>{article.article[0].body}</p>
      </section>
    );
};

export default IndividualArticle;