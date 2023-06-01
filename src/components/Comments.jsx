import { useState, useEffect } from "react";
import { getComments, postComment } from "../utils";
import "../Comments.css";

const Comments = ({ article_id, userId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [inputError, setInputError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [formDisabled, setFormDisabled] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await getComments(article_id);
      setComments(response.comments);
      setIsLoading(false);
    };
    fetchComments();
  }, []);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = async () => {
    const newPost = { username: userId, body: newComment };
    const response = await postComment(article_id, newPost);
    console.log(response)
    if (response.request.status !== 201) {
      setComments((currentComments) => {
        const commentsCopy = [...currentComments];
        commentsCopy.shift();
        return commentsCopy;
      });
      setSubmitStatus("Issue with posting comments, please try again later");
    } else {
      setSubmitStatus("Comment successfully posted");
    }
    setNewComment("");
    setFormDisabled(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDisabled(true);
    setInputError("");
    setSubmitStatus("");
    if (userId === "") {
      setInputError("Please sign in to make a comment");
      setFormDisabled(false);
    } else if (newComment === "") {
      setInputError("Please input some text to make a comment");
      setFormDisabled(false);
    } else {
      const now = new Date().toISOString();
      setComments((currentComments) => {
        return [
          {
            comment_id: 1000,
            author: userId,
            created_at: now,
            votes: 0,
            body: newComment,
          },
          ...currentComments,
        ];
      });
      addComment();
    }
  };

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else if (isLoading === true && comments.length === 0) {
    return (
      <section className="comments-section">
        <p>No comments yet...</p>
      </section>
    );
  } else
    return (
      <section className="comments-section">
        <article className="comment-card">
          <h3>Post a comment:</h3>
          <form onSubmit={handleSubmit}>
            <textarea
              onChange={handleChange}
              placeholder="New comment"
              value={newComment}
              disabled={formDisabled}
            ></textarea>
            <p>{inputError}</p>
            <button disabled={formDisabled}>Submit</button>
            <p>{submitStatus}</p>
          </form>
        </article>
        {comments.map((comment) => {
          const date = new Date(comment.created_at);
          const formattedDate = date.toLocaleString("en-GB");

          return (
            <article className="comment-card" key={comment.comment_id}>
              <p className="comment-author">{comment.author}</p>
              <p className="comment-text">{formattedDate}</p>
              <p className="comment-text">Likes:{comment.votes}</p>
              <p className="comment-text">{comment.body}</p>
            </article>
          );
        })}
      </section>
    );
};

export default Comments;
