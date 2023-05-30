const Comments = (article_id) => {
    //make api call to get comments, map through them and add details into little cards
      const [comments, setComments] = useState([])
    return (
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