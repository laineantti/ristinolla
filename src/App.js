import React, { useState } from 'react';
import './App.css';

function App() {
const [ruutu1, setRuutu1] = useState("")
const [ruutu2, setRuutu2] = useState("")
const [ruutu3, setRuutu3] = useState("")
const [ruutu4, setRuutu4] = useState("")
const [ruutu5, setRuutu5] = useState("")
const [ruutu6, setRuutu6] = useState("")
const [ruutu7, setRuutu7] = useState("")
const [ruutu8, setRuutu8] = useState("")
const [ruutu9, setRuutu9] = useState("")

  return (
    <div>
      <div class="ruutu" id="ruutu1" onClick={()=>setRuutu1()} value={ruutu1}></div>
      <div class="ruutu" id="ruutu2" value={ruutu2}></div>
      <div class="ruutu" id="ruutu3" value={ruutu3}></div>
      <div class="ruutu" id="ruutu4" value={ruutu4}></div>
      <div class="ruutu" id="ruutu5" value={ruutu5}></div>
      <div class="ruutu" id="ruutu6" value={ruutu6}></div>
      <div class="ruutu" id="ruutu7" value={ruutu7}></div>
      <div class="ruutu" id="ruutu8" value={ruutu8}></div>
      <div class="ruutu" id="ruutu9" value={ruutu9}></div>
    </div>
  );
}

export default App;
