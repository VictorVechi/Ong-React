import React, {useEffect, useState} from "react";
import { StylesMainDash } from "./main.styles";
import { adocao, getPetPorId, getPets, getUnidades, getUsuarioPorId, postPets } from "../../../../services/api";
import CardDashboard from "../Card/CardDashboard";
import BtnChangeCard from "../BtnChangeCard/BtnChangeCard";
import BtnMeAdote from "../BtnMeAdote/BtnMeAdote";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";
import Input from "../../../common/input/input";


const MainDashboard = () => {
  const [listaPets, setListaPets] = useState([]);
  const [nomePet, setNomePet] = useState('')
  const [racaPet, setRacaPet] = useState('')
  const [idadePet, setIdadePet] = useState('')
  const [pesoPet, setPesoPet] = useState('')
  const [descPet, setDescPet] = useState('')
  const [numero, setNumero] = useState(0);
  const [modalAberto, setModalAberto] = useState(false)
  const [unidadeSelecionada, setUnidadeSelecionada] = useState('')
  const [unidades, setUnidades] = useState([])
  const [modalAdocao, setModalAdocao] = useState(false)

  let admin = localStorage.getItem('admin')
  
  async function handleAdoteBtn(){
    const idPet = listaPets[numero]?._id
    const pet = await getPetPorId(idPet)
    const idUsuario = localStorage.getItem('id')
    console.log(pet)
    if(pet.usuarios.indexOf(idUsuario) == -1){
      console.log(pet);
      
      const data = pet
      data.usuarios.push(idUsuario)

      const response = await adocao(idPet, data)
      console.log(response);

    } 
    await desabilitar()
    setModalAdocao(true)
    setTimeout(()=>{
      setModalAdocao(false)
    }, 3500)
   
  }

  if(admin == 'true'){
     admin = true
  } else {
    admin = false
  }
  async function desabilitar(){
    const idPet = listaPets && listaPets[numero] && listaPets[numero]._id;
    if (idPet && !admin) {
      const pet = await getPetPorId(idPet);
      const idUsuario = localStorage.getItem('id')
      if(pet.usuarios.indexOf(idUsuario) == -1){
        document.getElementById('botaoAdotar').style.backgroundColor = '#ff5faf'
      } else {
        document.getElementById('botaoAdotar').style.backgroundColor = 'gray'
      }
    }
    
}

  const cadastrar = async () => {
    const admin = await verificarAdmin()
    if(admin.admin){
      const data = {
        nome: nomePet,
        raca: racaPet,
        peso: pesoPet,
        idade: idadePet,
        id_unidade: unidadeSelecionada,
        descricao: descPet,
      }
      const response = await postPets(data)
      setNomePet('')
      setDescPet('')
      setRacaPet('')
      setPesoPet('')
      setIdadePet('')
      setModalAberto(false)
      await handleBuscarPets()
    }
  }


  const handleBuscarPets = async () => {
    const resposta = await getPets();
    setListaPets(resposta);
  };

  const verificarAdmin = async () => {
      const id = localStorage.getItem("id")
      const response = getUsuarioPorId(id)
      return response
  }

  const handleUnidades = async () =>{
    const response = await getUnidades()
    setUnidades(response)
  }

  function prevCard() {
    if (numero <= 0) {
      return setNumero(() => listaPets.length - 1);
    }

    return setNumero((prevState) => {
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

  useEffect(() => {
    handleBuscarPets();
  }, []);

  useEffect(()=>{
    handleUnidades()
  }, [modalAberto])

  useEffect(()=>{
    desabilitar()
  }, [numero])


  return (
    <>
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
       {!admin && <BtnMeAdote id={'botaoAdotar'} texto="Me adote" func={()=>handleAdoteBtn()}/>}
        {admin && <Button texto={'Cadastrar'} func={()=>setModalAberto(true)}/>}
      </section>
      </StylesMainDash>
      <Modal open={modalAberto} fechaModal={() => setModalAberto(false)}>
        <h2>Cadastre um pet</h2>
        <label htmlFor="nome">Nome:</label>
        <Input valor={nomePet} placeholder={'Nome do pet'} nome={'nome'} tipo={'text'}  func={(e)=>setNomePet(e.target.value)}/>
        <label htmlFor="raca">Tipo:</label>
        <Input valor={racaPet} placeholder={'Tipo do animal:'} nome={'raca'} tipo={'text'}  func={(e)=>setRacaPet(e.target.value)}/>
        <label htmlFor="idade">Idade:</label>
        <Input valor={idadePet} placeholder={'Idade do pet'} nome={'idade'} tipo={'text'}  func={(e)=>setIdadePet(e.target.value)}/>
        <label htmlFor="peso">Peso:</label>
        <Input valor={pesoPet} placeholder={'Peso do pet'} nome={'peso'} tipo={'text'}  func={(e)=>setPesoPet(e.target.value)}/>
        <label htmlFor="descricao">Descricao:</label>
        <textarea rows="2" value={descPet} name="descricao" placeholder="Descrição" onChange={(e)=>setDescPet(e.target.value)}></textarea>
        <select value={unidadeSelecionada} onChange={(evento) => setUnidadeSelecionada(evento.target.value)}>
          {unidades.map((unidade) => {
            return (
              <option key={unidade._id} value={unidade._id}>{unidade.nome}</option>
            )
          })}
        </select>
        <Button texto={'Cadastrar'} func={(e)=> cadastrar(e)} />
      </Modal>

      <Modal open={modalAdocao} fechaModal={(e)=>setModalAdocao(false)}>
          <h2>Olá, {localStorage.getItem('nome')}</h2>
          <p className="modal">Você agora está na lista de adoção do pet, em breve um funcionário entrará em contato para agendarmos uma visita!</p>
      </Modal>
    </>
  );
};

export default MainDashboard;
