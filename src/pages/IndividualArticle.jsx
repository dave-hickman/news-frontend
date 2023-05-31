import { useEffect, useState } from "react";
import { getSingleArticle, patchArticle } from "../utils";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import '../IndividualArticle.css'


const IndividualArticle = ({userId}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [votes, setVotes] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")


  useEffect(() => {
    const fetchSingleArticle = async () => {
      const response = await getSingleArticle(article_id);
      setArticle(response);
      setIsLoading(false);
      setVotes(response.article[0].votes)
    };
    fetchSingleArticle();
  }, []);

  const handleVote = (num) => {
    setVotes((currentVotes) => currentVotes + num)
    const sendVotes = async () => {
      const response = await patchArticle(article_id, {inc_votes: num});
      setErrorMessage("")
      if(response.request.status !== 200){
        setVotes(((currentVotes) => currentVotes - num))
        setErrorMessage("Issue with voting, please try again later")
      }
    };
    sendVotes();

  }

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else
    return (
      <section className="article-container">
        <h2 className="article-title">{article.article[0].title}</h2>
        <h3 className="author">{article.article[0].author}</h3>
        <button onClick={() => handleVote(1)}>Vote Up</button>
        <button onClick={() => handleVote(-1)}>Vote Down</button>
        <h3 className="likes">Votes: {votes}</h3>
        <h3 className="likes">{errorMessage}</h3>
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
        <Comments article_id={article_id} userId={userId}/>
      </section>
    );
};

export default IndividualArticle;
