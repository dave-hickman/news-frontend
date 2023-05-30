const ArticleSummary = ({ article }) => {
  return (
    <section>
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <img
        src={article.article_img_url}
        alt={`thumbnail for ${article.title}`}
      />
    </section>
  );
};

export default ArticleSummary;
