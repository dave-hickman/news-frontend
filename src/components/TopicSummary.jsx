import "../TopicSummary.css";

const TopicSummary = ({ topics }) => {
  return (
    <>
      <header>
        <h2 className="topics-title">Topics</h2>
      </header>
      <section>
        {topics.map((topic) => {
          return (
            <article>
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default TopicSummary;
