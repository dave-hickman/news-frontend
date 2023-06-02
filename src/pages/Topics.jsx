import { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import TopicSummary from "../components/TopicSummary";

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
      <>
        <TopicSummary topics={topics} />
      </>
    );
};

export default Topics;
