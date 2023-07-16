import React from 'react';
import './App.css';

import DictionarySearch from "./DictionarySearch"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          Dic·tion·ar·y
        </header>
        <main>
          <DictionarySearch />
        </main>
        <footer>
          👉{" "}
          <a href="https://github.com/jnardino" target="_blank" rel="noreferrer">Open source</a>
          {" "}code made by{" "}
          <a href="https://www.linkedin.com/in/juliananardino/" target="_blank" rel="noreferrer">Juliana Nardino</a>
          {" "}👈
        </footer>
        </div>
    </div>
  );
}