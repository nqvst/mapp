import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [movieList, setMovieList] = useState([]);
  const API_URL = "http://www.omdbapi.com/?apikey=65049324&s="; // s=star+wars

  const handleSearch = async (e) => {
    console.log(inputText);
    const data = await fetch(`${API_URL}${inputText}`);
    const response = await data.json();

    if (data?.ok && response?.Response === 'True') {
        setMovieList(response.Search);
    }

  };
    console.log(movieList);
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
      <div>
          {movieList.map(movie => (
              <p key={movie.imdbID}>{movie.Title}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
