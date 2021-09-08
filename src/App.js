import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const API_URL = "http://www.omdbapi.com/?apikey=65049324&s="; // s=star+wars

  const handleSearch = async (e) => {
    console.log(inputText);
    const data = await fetch(`${API_URL}${inputText}`);
    console.log(data);
    const response = await data.json();

    // console.log(response);
    if (response && response.Response === 'True') {
        setMovieList(response.Search);
    }

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
