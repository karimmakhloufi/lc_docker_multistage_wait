import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/`)
    .then(response => response.json())
    .then(data => {
      setTeam(data?.team);
      setLoading(false);
      console.log(data)
    });
   }, []);

  return (
    <div className="App">
      <h1>Docker Multi Stage @VIEL ZE BEST </h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
        {team &&
              <h3>TEAM : {team}</h3>
        }
    </div>
  );
}

export default App;
