// CardUnidade.js
import React, { useState } from "react";
import { Modal, StyleCardUnidade } from "./card.styles";
import { Buildings } from "@phosphor-icons/react";
import Button from "../../../common/Button/Button";
import { getPetsPorUnidade } from "../../../../services/api";


const CardUnidade = ({ nome, email, telefone,idUnidade }) => {
  
  const id = idUnidade
  const [showPetsModal, setShowPetsModal] = useState(false);
  const [unidadePets, setUnidadePets] = useState([]);

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
   await getPetsPorUnidade()
   setShowPetsModal(true)
    
  };

  return (
    <>
      <StyleCardUnidade>
        <Buildings size={64} />
        <h2>{nome}</h2>
        <p>Email: {email}</p>
        <p>Contato: {telefone}</p>
        <Button texto={"Ver pets"} func={handleVerPets} />
      </StyleCardUnidade>
      <Modal open={showPetsModal} fechaModal={(e) => setShowPetsModal(false)}>
        <h2>Pets da Unidade: {nome}</h2>
        {unidadePets.map((pet) => (
          <div key={pet.id}>
            <p>Nome do Pet: {pet.nome}</p>
            <p>Espécie: {pet.especie}</p>
          </div>
        ))}
      </Modal>
    </>
  );
};

export default CardUnidade;
