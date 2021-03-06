import React from 'react';
import './style.css';

export default function Modal({ id = 'modal', onClose = () => {}, children}) {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  };

  

  return (
    <div id={id} className="bg-modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="close" onClick={onClose}>+</div>
          <div className="content">{children}</div>
      </div>
      
    </div>
  )
}

