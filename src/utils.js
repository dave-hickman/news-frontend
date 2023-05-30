import axios from "axios";

const news = axios.create({
  baseURL: "https://news-project-g3uj.onrender.com/api",
});

const getArticles = () => {
  return news.get("/articles");
};

export { getArticles };
