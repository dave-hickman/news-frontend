import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicSummary from "../components/TopicSummary";
import "../Topics.css"

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      const response = await getTopics();
      if (response.request.status !== 200) {
        return <p>Issue retrieving topics, please try again later!</p>;
      } else {
        setTopics(response.data.topics);
        setIsLoading(false);
      }
    };
    fetchTopics();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  } else
    return (
      <section className="topics-body">
        <TopicSummary topics={topics} />
      </section>
    );
};

export default Topics;
