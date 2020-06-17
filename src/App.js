import React from 'react';
import './global.css';

import Header from './components/Header';
import Livros from './components/Livros';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Livros />
      <Footer />
    </div>
  );
}

export default App;
