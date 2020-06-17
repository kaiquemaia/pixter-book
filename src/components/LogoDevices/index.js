import React from 'react';
import './style.css'

// logos Device 
import logoAndroid from '../../assets/icons/android.svg';
import logoApple from '../../assets/icons/apple.svg';
import logoWindows from '../../assets/icons/windows.svg';


export default function logoDevices() {
  return (
    <div className="logos-device">
      <img src={logoAndroid} alt="Android"/>
      <img src={logoApple} alt="Apple"/>
      <img src={logoWindows} alt="Windows"/>
    </div>
    
  )
}