// import { Fragment } from "react";
import React, { useState } from 'react';
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";
import api from "../../Services/services";


const CadastroFilme = () => {

const [listaGenero, setListaGenero] = useState ([]);  
const [genero, setGenero]= useState("")
const [filme, setFilme]= useState("")

async function listarGenero(){
   
    try {
      const resposta = await api.get("genero")
      setListaGenero(resposta.data);
    } catch (error) {
        console.log(error);
    }
    
   
// useEffect(()=> {
//     listarGenero
// },[])


function cadastrarFilmes (){  
    
    try {
         alert("Lista apareceu")
    } catch (error) {
        
    }
}

  
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="Filme"
                    lista = {listarGenero}
                    funcCadastro = {cadastrarFilmes}
                    valorInput = {filme}
                    setValorInput = {setFilme}
                    valorSelect={genero}
                    
                    />
                <Lista
                titulo = "Lista de Filmes"
                />
            </main>
            <Footer />
        </>
    )
}
}

export default CadastroFilme;