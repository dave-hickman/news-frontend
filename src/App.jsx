import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import IndividualArticle from "./pages/IndividualArticle";
import Topics from "./pages/Topics";

function App() {
  const [userId, setUserId] = useState("davros");

  return (
    <>
      <Nav userId={userId} />
      <main>
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
