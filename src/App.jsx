import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import IndividualArticle from "./pages/IndividualArticle";
import Topics from "./pages/Topics";
import IndividualTopics from "./pages/IndividualTopics";
import PageCannotBeFound from "./pages/PageCannotBeFound";

function App() {
  const [userId, setUserId] = useState("grumpy19");

  return (
    <>
      <Nav userId={userId} />
      <main>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/*" element={<PageCannotBeFound />} />
        <Route path="/articles/:article_id" element={<IndividualArticle userId={userId}/>} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:slug" element={<IndividualTopics/>} />
      </Routes>
      </main>
    </>
  );
}

export default App;
