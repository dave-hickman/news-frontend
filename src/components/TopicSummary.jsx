import "../TopicSummary.css";

const TopicSummary = ({ topics }) => {
  return (
    <>
      <header>
        <h2 className="topics-title">Topics</h2>
      </header>
      <section >
        {topics.map((topic) => {
          return (
            <article className="topic-container" key={topic.slug}>
              <h3 className="topic-name">{topic.slug}</h3>
              <p className="topic-desc">{topic.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default TopicSummary;
