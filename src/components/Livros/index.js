import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import Modal from '../Modal';



import imgLivro from '../../assets/livro-1.svg';


export default function Livros() {
  
  const [books, setBooks] = useState([]);
  const [modalBook, setModalBook] = useState(false);
    
  useEffect(() => {
    api.get('/volumes?q=HARRY%20POTTER').then(response => {
      setBooks(response.data.items)

    });
  }, []);



  return (
    <main id="books">
      <div className="container-books">
        <div className="content">
          <h1>Books</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>
        </div>

        <div className="cards-livros">

          {books.map(book => <div key={book.id} className="card">
            <img onClick={() => setModalBook(true)} src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
          </div> )}
          
        </div>
      </div>

      {modalBook ? 
            <Modal onClose={ () => setModalBook(false)}>
              <img src={imgLivro} alt=""/>
              <div className="content-book">
                <h1>Modal do App</h1>
                <span>Publicado: janeiro/ 2020</span>
                <strong>Descrição: </strong>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere natus cum dolores! Rem architecto id unde ad quibusdam, eos fugiat modi ipsam distinctio molestias nesciunt eveniet. Vitae voluptas assumenda dicta.
                </p>
              </div>
            </Modal> : null }

    </main>
  )
}