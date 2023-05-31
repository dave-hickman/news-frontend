import { useState, useEffect } from "react";
import { getTopics } from "../utils";
import TopicSummary from "../components/TopicSummary";

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
       <TopicSummary topics={topics}/>
      </>
    );
};

export default Topics;
