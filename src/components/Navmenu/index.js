import React from 'react';

import logoPixter from '../../assets/logo.svg';

export default function Navmenu() {
  return (
    <div className="top">
      <img src={logoPixter} alt=""/>
      <ul>
        <li>Book</li>
        <li>Newslltter</li>
        <li>Adress</li>
      </ul>
    </div>
  )
}