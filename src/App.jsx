import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Articles from "./pages/Articles";
import IndividualArticle from "./pages/IndividualArticle";

function App() {
  const [userId, setUserId] = useState("davros");

  return (
    <>
      <Nav userId={userId} />
      <Header />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<IndividualArticle />} />
      </Routes>
    </>
  );
}

export default App;
