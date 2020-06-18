import React from 'react';

import logoPixter from '../../assets/logo.svg';

export default function Navmenu() {
  return (
    <div className="top">
      <img src={logoPixter} alt=""/>
      <ul>
        <li><a href="#books">Book</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
        <li><a href="#adress">Adress</a></li>
      </ul>
    </div>
  )
}