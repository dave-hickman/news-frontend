import { useState, useEffect } from "react";
import { getComments } from "../utils";

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
      <section className="comments-secton">
        {comments.map((comment) => {
          const date = new Date(comment.created_at)
          const formattedDate = date.toLocaleString('en-GB')
        
          return (
            <article>
              <p>{comment.author}</p>
              <p>{formattedDate}</p>
              <p>Likes:{comment.votes}</p>
              <p>{comment.body}</p>
            </article>
          );
        })}
        <p>This is the comment list</p>
      </section>
    );
  };
  
  export default Comments;