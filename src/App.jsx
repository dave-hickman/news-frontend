import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Articles from "./pages/Articles";

function App() {
  const [userId, setUserId] = useState("davros");

  return (
    <>
      <Nav userId={userId} />
      <Header />
      <Articles />
    </>
  );
}

export default App;
