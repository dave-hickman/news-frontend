import "../TopicSummary.css";
import {Link} from "react-router-dom"

const TopicSummary = ({ topics }) => {
  return (
    <>
      <header>
        <h2 className="topics-title">Topics</h2>
      </header>
      <section >
        {topics.map((topic) => {
          return (
            <Link to={`/topics/${topic.slug}`}>
            <article className="topic-container" key={topic.slug}>
              <h3 className="topic-name">{topic.slug}</h3>
              <p className="topic-desc">{topic.description}</p>
            </article>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default TopicSummary;
