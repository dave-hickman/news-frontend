import axios from "axios";

const news = axios.create({
  baseURL: "https://news-project-g3uj.onrender.com/api",
});

const getArticles = async () => {
  const response = await news.get("/articles");
  return response.data
};

export { getArticles };
