// CardUnidade.js
import React, { useState } from "react";
import {StyleCardUnidade } from "./card.styles";
import { Buildings } from "@phosphor-icons/react";
import Button from "../../../common/Button/Button";
import { getPetsPorUnidade } from "../../../../services/api";
import Modal from "../../../common/Modal/Modal";
import CardPets from '../../../views/Unidades/CardPets/CardPets'

const CardUnidade = ({ nome, email, telefone, idUnidade}) => {
  
  const id = idUnidade
  const [showPetsModal, setShowPetsModal] = useState(false);
  const [unidadePets, setUnidadePets] = useState([]);
  const [numero, setNumero] = useState(0)

  const getPetsPorUnidadeLocal = async () => {
    
    try {
      const petsResponse = await getPetsPorUnidade(id);
      setUnidadePets(petsResponse)
      console.log(petsResponse)
    } catch (error) {
      console.error('Erro ao buscar os pets da unidade:', error);
    }
  };
  const handleVerPets = async () => {
   await getPetsPorUnidadeLocal()
   setShowPetsModal(true)
    
  };

  function prevCard() {
    if (numero <= 0) {
      setNumero(unidadePets.length - 1);
    } else {
      setNumero((prevState) => prevState - 1);
    }
  }

  function nextCard() {
    if (numero === unidadePets.length - 1) {
      setNumero(0);
    } else {
      setNumero((prevState) => prevState + 1);
    }
  }


  return (
    <>
      <StyleCardUnidade>
        <Buildings size={64} />
        <h2>{nome}</h2>
        <p>Email: {email}</p>
        <p>Contato: {telefone}</p>
        <Button texto={"Ver pets"} func={handleVerPets} />
      </StyleCardUnidade>
      <Modal open={showPetsModal} fechaModal={(e)=>setShowPetsModal(false)}>
        <h2>{nome}</h2>
        <div className="carrossel">
          <Button texto={'anterior'} func={prevCard}/>
          <CardPets nome={unidadePets[numero]?.nome} idade={unidadePets[numero]?.idade} peso={unidadePets[numero]?.peso} raca={unidadePets[numero]?.raca}/>
          <Button texto={'próximo'} func={nextCard}/>
        </div>
      </Modal>
    </>
  );
};

export default CardUnidade;
