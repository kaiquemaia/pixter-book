import React from 'react';
import './style.css';
import Navmenu from '../Navmenu';

import LogoDevices from '../LogoDevices';
import imgTablet from '../../assets/tablet.svg';

export default function Header() {
  return (
    <header id="top">
      <Navmenu />

      <div className="content-header">
        <div className="text">
          <h1>Pixter Digital Books</h1>
          <p>Lorem ipsum dolor sit amet? <br/> consectetur elit, volutpat.</p>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta lobortis sit</p>

          {/* Logo devices  */}
          <LogoDevices />
        </div>

        <img className="tablet" src={imgTablet} alt=""/>
        
      </div>

    </header>
  )
}