import React, { useState } from "react";

function App() {
  const [vuoro, setVuoro] = useState("");
  const [voittaja, setVoittaja] = useState("");

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

  // alussa arvotaan X tai O aloittajaksi
  if (vuoro === "") {
    const aloittaja = Math.random() >= 0.5;
    if (aloittaja === true) setVuoro("X");
    else setVuoro("O");
  }

  const pelaajanVuoro = (event) => {
    switch (event.target.id) {
      case "1":
        if (ruutu1 === " ") {
          setRuutu1(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "2":
        if (ruutu2 === " ") {
          setRuutu2(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "3":
        if (ruutu3 === " ") {
          setRuutu3(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "4":
        if (ruutu4 === " ") {
          setRuutu4(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "5":
        if (ruutu5 === " ") {
          setRuutu5(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "6":
        if (ruutu6 === " ") {
          setRuutu6(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "7":
        if (ruutu7 === " ") {
          setRuutu7(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "8":
        if (ruutu8 === " ") {
          setRuutu8(vuoro);
          vaihdaVuoroa();
        }
        break;
      case "9":
        if (ruutu9 === " ") {
          setRuutu9(vuoro);
          vaihdaVuoroa();
        }
        break;
      default:
        console.log("virhe");
        break;
    }
  };

  const vaihdaVuoroa = () => {
    voitonTarkistaminen();
    if (vuoro === "X") setVuoro("O");
    else setVuoro("X");
  };

  const voitonTarkistaminen = () => {
    // VAAKATASOSSA
    //==================================================
    // ylä
    if (ruutu1 !== " ") {
      if (ruutu1 === ruutu2 && ruutu2 === ruutu3) {
        setVoittaja(vuoro);
      }
    }
    // keski
    if (ruutu3 !== " ") {
      if (ruutu3 === ruutu4 && ruutu4 === ruutu5) {
        setVoittaja(vuoro);
      }
    }
    // ala
    if (ruutu7 !== " ") {
      if (ruutu7 === ruutu8 && ruutu8 === ruutu9) {
        setVoittaja(vuoro);
      }
    }
    // SARAKKEET PYSTYSSÄ
    //==================================================
    // vasen
    if (ruutu1 !== " ") {
      if (ruutu1 === ruutu4 && ruutu4 === ruutu7) {
        setVoittaja(vuoro);
      }
    }
    // keski
    if (ruutu2 !== " ") {
      if (ruutu2 === ruutu5 && ruutu5 === ruutu8) {
        setVoittaja(vuoro);
      }
    }
    // oikea
    if (ruutu3 !== " ") {
      if (ruutu3 === ruutu6 && ruutu6 === ruutu9) {
        setVoittaja(vuoro);
      }
    }
    // VINOTTAIN
    //==================================================
    // vasemmasta ylänurkasta oikeaan alanurkkaan
    if (ruutu1 !== " ") {
      if (ruutu1 === ruutu5 && ruutu5 === ruutu9) {
        setVoittaja(vuoro);
      }
    }
    // oikeasta ylänurkasta vasempaan alanurkkaan
    if (ruutu3 !== " ") {
      if (ruutu3 === ruutu5 && ruutu5 === ruutu7) {
        setVoittaja(vuoro);
      }
    }
  };

  if (voittaja !== "") {
    return (
      <p>
        Pelaaja <b>{vuoro}</b> voitti! Peli on päättynyt!
      </p>
    );
  } else {
    return (
      <div>
        <p>
          Pelaajan <b>{vuoro}</b> vuoro.
        </p>
        <div>
          <div>
            <button onClick={(event) => pelaajanVuoro(event)} id="1">
              {ruutu1}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="2">
              {ruutu2}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="3">
              {ruutu3}
            </button>
          </div>
          <div>
            <button onClick={(event) => pelaajanVuoro(event)} id="4">
              {ruutu4}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="5">
              {ruutu5}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="6">
              {ruutu6}
            </button>
          </div>
          <div>
            <button onClick={(event) => pelaajanVuoro(event)} id="7">
              {ruutu7}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="8">
              {ruutu8}
            </button>
            <button onClick={(event) => pelaajanVuoro(event)} id="9">
              {ruutu9}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
