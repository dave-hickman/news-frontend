import { useState, useEffect } from "react";
import { getComments } from "../utils";

const Comments = ({article_id}) => {
      const [comments, setComments] = useState([])
      const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchComments = async () => {
            const response = await getComments(article_id)
            console.log(response.comments)
            setComments(response.comments)
            setIsLoading(false)
        }
        fetchComments()
    }, [])

    if (isLoading === true){
        return <p>Loading...</p>
    }
    else return (
      <section>
        {comments.map((comment) => {
          return (
            <article>
              <p>{comment.author}</p>
              <p>{comment.created_at}</p>
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