import React from 'react';
import './global.css';

import Header from './components/Header';
import Livros from './components/Livros';


function App() {
  return (
    <div className="App">
      <Header />
      <Livros />

    </div>
  );
}

export default App;
