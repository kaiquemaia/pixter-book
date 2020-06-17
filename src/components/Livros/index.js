import React from 'react';
import './style.css';

import imgLivro from '../../assets/livro-1.svg';


export default function Livros() {
  return (
    <main id="books">
      <div className="container-books">
        <div className="content">
          <h1>Books</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
        </div>

        <div className="cards-livros">
          <div className="card">
            <img src={imgLivro} alt=""/>
          </div>
          <div className="card">
            <img src={imgLivro} alt=""/>
          </div>
          <div className="card">
            <img src={imgLivro} alt=""/>
          </div>
          <div className="card">
            <img src={imgLivro} alt=""/>
          </div>
        </div>
      </div>
    </main>
  )
}