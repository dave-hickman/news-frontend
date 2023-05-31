import { useState, useEffect } from "react";
import "../Topics.css";
import { getTopics } from "../utils";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await getTopics();
      setTopics(response.topics);
      setIsLoading(false);
    };
    fetchTopics();
  }, []);

  if (isLoading === true) {
    return <p>Loading...</p>;
  } else
    return (
      <>
      {console.log(topics)}
        <header>
          <h2 className="topics-title">Topics</h2>
        </header>
        <section>
            {topics.map((topic) => {
                return(
                    <article>
                        <h3>{topic.slug}</h3>
                        <p>{topic.description}</p>
                    </article>
                )
            })}
        </section>
      </>
    );
};

export default Topics;
