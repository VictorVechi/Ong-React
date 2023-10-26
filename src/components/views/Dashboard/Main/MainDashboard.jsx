import React, {useEffect, useState} from "react";
import { StylesMainDash } from "./main.styles";
import { getPets, getUnidades, getUsuarioPorId, postPets } from "../../../../services/api";
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

  let admin = localStorage.getItem('admin')
  let userId = localStorage.getItem('id')
  let listaAdotados = JSON.parse(localStorage.getItem(userId))
  

  function handleAdoteBtn(){
       
    console.log(userId)
    listaAdotados.push(listaPets[numero]?._id)
    localStorage.setItem(userId, JSON.stringify(listaAdotados))
    console.log(listaAdotados)
  }

  
  if(admin == 'true'){
     admin = true
  } else {
    admin = false
  }

  const cadastrar = async () => {
    const admin = await verificarAdmin()
    // console.log(admin.admin)
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
    }
  }

  const handleBuscarPets = async () => {
    const resposta = await getPets();
    console.log(resposta);
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

  useEffect(() => {
    handleBuscarPets();
  }, []);

  useEffect(()=>{
    handleUnidades()
  }, [modalAberto])

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
       {!admin && !listaAdotados.includes(listaPets[numero]?._id) && <BtnMeAdote texto="Me adote" func={()=>handleAdoteBtn()}/>}
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
        <textarea value={descPet} name="descricao" placeholder="Descrição" onChange={(e)=>setDescPet(e.target.value)}></textarea>
        <select value={unidadeSelecionada} onChange={(evento) => setUnidadeSelecionada(evento.target.value)}>
          {unidades.map((unidade) => {
            return (
              <option key={unidade._id} value={unidade._id}>{unidade.nome}</option>
            )
          })}
        </select>
        <Button texto={'Cadastrar'} func={(e)=> cadastrar(e)} />
      </Modal>
    </>
  );
};

export default MainDashboard;
