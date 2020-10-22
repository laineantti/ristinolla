import React, { useState } from "react";

function App() {
  const [teksti, setTeksti] = useState("")

  const [vuoro, setVuoro] = useState("");
  const [voittaja, setVoittaja] = useState("");
  const [peliloppui, setPeliloppui] = useState(false);

  // alussa arvotaan X tai O aloittajaksi
  if (vuoro === "") {
    const aloittaja = Math.random() >= 0.5;
    if (aloittaja === true) setVuoro("X");
    else setVuoro("O");
  }

  // lainausmerkkien välissä oleva " " on tyhjä merkki (ei välilyönti), että nappi näyttää järkevämmältä tyhjänä
  const [ruutu1, setRuutu1] = useState(" ");
  const [ruutu2, setRuutu2] = useState(" ");
  const [ruutu3, setRuutu3] = useState(" ");
  const [ruutu4, setRuutu4] = useState(" ");
  const [ruutu5, setRuutu5] = useState(" ");
  const [ruutu6, setRuutu6] = useState(" ");
  const [ruutu7, setRuutu7] = useState(" ");
  const [ruutu8, setRuutu8] = useState(" ");
  const [ruutu9, setRuutu9] = useState(" ");

  const ruutuaKlikattu = (event) => {
    switch (event.target.id) {
      case "1":
        if (ruutu1 === " ") {
          setRuutu1(vuoro);
          voittikoJoku();
        }
        break;
      case "2":
        if (ruutu2 === " ") {
          setRuutu2(vuoro);
          muutaVuoro();
        }
        break;
      case "3":
        if (ruutu3 === " ") {
          setRuutu3(vuoro);
          muutaVuoro();
        }
        break;
      case "4":
        if (ruutu4 === " ") {
          setRuutu4(vuoro);
          muutaVuoro();
        }
        break;
      case "5":
        if (ruutu5 === " ") {
          setRuutu5(vuoro);
          muutaVuoro();
        }
        break;
      case "6":
        if (ruutu6 === " ") {
          setRuutu6(vuoro);
          muutaVuoro();
        }
        break;
      case "7":
        if (ruutu7 === " ") {
          setRuutu7(vuoro);
          muutaVuoro();
        }
        break;
      case "8":
        if (ruutu8 === " ") {
          setRuutu8(vuoro);
          muutaVuoro();
        }
        break;
      case "9":
        if (ruutu9 === " ") {
          setRuutu9(vuoro);
          muutaVuoro();
        }
        break;
      default:
        console.log("virhe");
        break;
    }
  };

  const muutaVuoro = () => {
    if (vuoro === "X") setVuoro("O");
    else setVuoro("X");
  };

  const voittikoJoku = () => {
    if (ruutu1 !== " ")
      if (ruutu1 === ruutu2 && ruutu2 === ruutu3) {
        setPeliloppui(true);
        setVoittaja(ruutu1);
        setTeksti("Nyt on pelaajan <b>{vuoro}</b> vuoro!")
      }
      else muutaVuoro();
  };


  if (peliloppui) {
    return (
      <p id="tilanne">
        Pelaaja <b>{voittaja}</b> voitti! Peli on päättynyt!
      </p>
    );
  } else {
    return (
      <div>
        <p id="tilanne">{teksti}</p>
        <div>
          <div>
            <button onClick={(event) => ruutuaKlikattu(event)} id="1">
              {ruutu1}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="2">
              {ruutu2}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="3">
              {ruutu3}
            </button>
          </div>
          <div>
            <button onClick={(event) => ruutuaKlikattu(event)} id="4">
              {ruutu4}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="5">
              {ruutu5}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="6">
              {ruutu6}
            </button>
          </div>
          <div>
            <button onClick={(event) => ruutuaKlikattu(event)} id="7">
              {ruutu7}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="8">
              {ruutu8}
            </button>
            <button onClick={(event) => ruutuaKlikattu(event)} id="9">
              {ruutu9}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
