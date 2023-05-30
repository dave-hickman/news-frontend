import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Articles from "./pages/Articles";
import IndividualArticle from "./pages/IndividualArticle";

function App() {
  const [userId, setUserId] = useState("davros");

  return (
    <>
      <Nav userId={userId} />
      <Header />
      <Articles />
      <IndividualArticle />
    </>
  );
}

export default App;
