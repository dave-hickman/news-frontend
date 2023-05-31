import { useState, useEffect } from "react";
import { getComments } from "../utils";
import '../Comments.css'

const Comments = ({article_id}) => {
      const [comments, setComments] = useState([])
      const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchComments = async () => {
            const response = await getComments(article_id)
            setComments(response.comments)
            setIsLoading(false)
        }
        fetchComments()
    }, [])

    
    if (isLoading === true){
        return <p>Loading...</p>
    }
    else if (isLoading === true && comments.length === 0){
      return(
        <section className="comments-section">
          <p>No comments yet...</p>
        </section>
      )
    }
    else return (
      <section className="comments-section">
        {comments.map((comment) => {
          const date = new Date(comment.created_at)
          const formattedDate = date.toLocaleString('en-GB')
        
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