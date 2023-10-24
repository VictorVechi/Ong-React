import React from "react";
import { StylesMainDash } from "./main.styles";
import adote from '/adote.svg'
import { getPets } from "../../../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import CardDashboard from "../Card/CardDashboard";


const MainDashboard = () => {
  const [listaPets, setListaPets] = useState([]);
  const [numero, setNumero] = useState(0);
  const handleBuscarPets = async () => {
    const resposta = await getPets();
    console.log(resposta);
    setListaPets(resposta);
  };

  useEffect(() => {
    handleBuscarPets();
  }, []);

  function prevCard() {
    if (numero <= 0) {
      console.log("ultimo index do array", listaPets.length - 1);
      return setNumero(() => listaPets.length - 1);
    }

    return setNumero((prevState) => {
      console.log(prevState);
      return prevState - 1;
    });
  }

  function nextCard() {
    if (numero === listaPets.length - 1) {
      return setNumero(0);
    }
    return setNumero((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <StylesMainDash>
      <section>
        <CardDashboard desc='minha descrição' nome={listaPets[numero]?.nome}/>
      </section>
      <section>
        <div>
          <button onClick={prevCard}>anterior</button>
          <button onClick={nextCard}>proximo</button>
          <p>{listaPets[numero]?.nome}</p>
          <p>{listaPets[numero]?.idade}</p>
          <p>{listaPets[numero]?.peso}</p>
          <p>{listaPets[numero]?.raca}</p>
        </div>
      </section>
    </StylesMainDash>
  );
};

export default MainDashboard;
