import React from 'react';
import './style.css';

import FormSubmit from '../FormSubmit';

import imgFacebook from '../../assets/social/facebook.svg';
import imgGoogle from '../../assets/social/google.svg';
import imgTwitter from '../../assets/social/twitter.svg';
import imgPinterest from '../../assets/social/pinterest.svg';


export default function Footer() {
  return (
    <footer id="newsletter">
      <div className="container-footer">
        <div className="content-footer">
          <h1>Keep in touch with us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.</p>

          <FormSubmit />

          <div className="social-icons">
            <img src={imgFacebook} alt=""/>
            <img src={imgGoogle} alt=""/>
            <img src={imgTwitter} alt=""/>
            <img src={imgPinterest} alt=""/>
          </div>
          
        </div>
      </div>
      <div id="adress" className="adress-container">
        <div className="adress-content">
          <ul>
            <li>
            Alameda Santos, 1970
            6th floor - Jardim Paulista
            São Paulo - SP
            +55 11 3090 8500
            </li>
            <li>
            London - UK
            125 Kingsway
            London WC2B 6NH
            </li>
            <li>
            Lisbon - Portugal
            Rua Rodrigues Faria, 103
            4th floor
            Lisbon - Portugal
            </li>
            <li>
            Curitiba – PR
            R. Francisco Rocha, 198
            Batel – Curitiba – PR
            </li>
            <li>
            Buenos Aires – Argentina
            Esmeralda 950
            Buenos Aires B C1007
            </li>
          </ul>
        </div>
      </div>

    </footer>
  )
}