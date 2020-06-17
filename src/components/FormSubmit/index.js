import React from 'react';
import './style.css';

export default function FormSubmit() {
  return (
    <form>
      <input type="text" placeholder="enter your email to update"/>
      <button type="submit">Submit</button>
    </form>
  )
}