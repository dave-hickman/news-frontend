import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import IndividualArticle from "./pages/IndividualArticle";
import Topics from "./pages/Topics";
import IndividualTopics from "./pages/IndividualTopics";

function App() {
  const [userId, setUserId] = useState("grumpy19")
  const [queryString, setQueryString] = useState("");
  const [sort, setSort] = useState("created_at");
  const [ascDesc, setAscDesc] = useState("desc");

  return (
    <>
      <Nav userId={userId} />
      <main>
      <Routes>
        <Route path={`/`} element={<Articles queryString={queryString} setQueryString={setQueryString} sort={sort} setSort={setSort} ascDesc={ascDesc} setAscDesc={setAscDesc}/>} />
        <Route path="/articles/:article_id" element={<IndividualArticle userId={userId} sort={sort} setSort={setSort} ascDesc={ascDesc} setAscDesc={setAscDesc}/>} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<IndividualTopics queryString={queryString} setQueryString={setQueryString} sort={sort} setSort={setSort} ascDesc={ascDesc} setAscDesc={setAscDesc}/>} />
      </Routes>
      </main>
    </>
  );
}

export default App;
