import React from "react";
import { StylesMainDash } from "./main.styles";
import adote from '/adote.svg'
import { getPets } from "../../../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import CardDashboard from "../Card/CardDashboard";
import BtnChangeCard from "../BtnChangeCard/BtnChangeCard";
import BtnMeAdote from "../BtnMeAdote/BtnMeAdote";


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
        <CardDashboard 
        desc={listaPets[numero]?.descricao}
        nome={listaPets[numero]?.nome}
        raca={listaPets[numero]?.raca}
        idade={listaPets[numero]?.idade}
        peso={listaPets[numero]?.peso}

        />
        
      </section>
      <section>
        <div>
          <BtnChangeCard 
          func={prevCard} texto="Anterior" />

          <BtnChangeCard 
          func={nextCard} texto="Próximo" />
          
        </div>
        <BtnMeAdote
          texto="Me adote" />
      </section>
    </StylesMainDash>
  );
};

export default MainDashboard;
