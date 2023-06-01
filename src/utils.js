import axios from "axios";

const news = axios.create({
  baseURL: "https://news-project-g3uj.onrender.com/api",
});

const getArticles = async (sort, ascDesc) => {
  console.log(typeof sort)

  const { data } = await news.get(`/articles?sort_by=${sort}&order=${ascDesc}`);
  return data;
};

const getSingleArticle = async (article_id) => {
  const { data } = await news.get(`/articles/${article_id}`);
  return data;
};

const getComments = async (article_id) => {
  const { data } = await news.get(`/articles/${article_id}/comments`);
  return data;
};

const patchArticle = async (article_id, vote) => {
  try {
    const { data } = await news.patch(`/articles/${article_id}`, vote);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const postComment = async(article_id, comment) => {
  try{const response = await news.post(`/articles/${article_id}/comments`, comment);
  return response
} catch(error) {
  console.log(error);
  return error;
}
}

export { getArticles, getSingleArticle, getComments, patchArticle, postComment };
