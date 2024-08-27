import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <CardContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
