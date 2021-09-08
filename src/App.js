import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const API_URL = "http://www.omdbapi.com/?apikey=65049324&s="; // s=star+wars

  const handleSearch = (e) => {
    console.log(inputText);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        type="text"
        placeholder="movie title"
      />
      <button onClick={handleSearch}>Sök</button>
      {inputText}
    </div>
  );
}

export default App;
