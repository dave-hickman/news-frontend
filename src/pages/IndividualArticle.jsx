import { useEffect, useState } from "react";
import { getSingleArticle, patchArticle } from "../utils";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "../IndividualArticle.css";

const IndividualArticle = ({ userId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [articleError, setArticleError] = useState("");

  useEffect(() => {
    const fetchSingleArticle = async () => {
      const response = await getSingleArticle(article_id);
      if (response.request.status === 404) {
        setIsLoading(false)
        setArticleError("Article not found");
      } else {
        setArticle(response.data);
        setIsLoading(false);
        setVotes(response.data.article[0].votes);
      }
    };
    fetchSingleArticle();
  }, []);

  const handleVote = (num) => {
    setVotes((currentVotes) => currentVotes + num);
    const sendVotes = async () => {
      const response = await patchArticle(article_id, { inc_votes: num });
      setErrorMessage("");
      if (response.request.status !== 200) {
        setVotes((currentVotes) => currentVotes - num);
        setErrorMessage("Issue with voting, please try again later");
      }
    };
    sendVotes();
  };

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else if (articleError) { return <h2 className="article-title">Article not found!</h2>
  } else
    return (
      <section className="article-container">
        <h2>No article found</h2>
        <h2 className="article-title">{article.article[0].title}</h2>
        <div className="author-and-votes-container">
          <h3 className="author">{article.article[0].author}</h3>
          <div className="votes-container">
            <button
              aria-label="Upvote this post"
              className="vote-button vote-up"
              onClick={() => handleVote(1)}
            >
              <ThumbUpOffAltIcon className="thumbs" />
            </button>
            <button
              aria-label="Downvote this post"
              className="vote-button"
              onClick={() => handleVote(-1)}
            >
              <ThumbDownOffAltIcon className="thumbs" />
            </button>
            <div className="vote-number-container">
              <h3 aria-label="Vote score" className="votes">
                {votes}
              </h3>
            </div>
          </div>
        </div>
        <h3 className="error-message">{errorMessage}</h3>
        <img
          src={article.article[0].article_img_url}
          alt={`thumbnail for ${article.article[0].title}`}
        />
        <div className="sub-text-container">
          <div className="topic">
            <h3 className="topic-text">Topic: {article.article[0].topic}</h3>
          </div>
          <div className="likes-comments">
            <h3 className="comments">
              Comments: {article.article[0].comment_count}
            </h3>
          </div>
        </div>
        <p className="article-body">{article.article[0].body}</p>
        <Comments article_id={article_id} userId={userId} />
      </section>
    );
};

export default IndividualArticle;
