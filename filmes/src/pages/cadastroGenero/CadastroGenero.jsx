import { useEffect, useState } from "react";

//import components
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

import api from "../../Services/services"

const CadastroGenero = () => {

    const [genero, setGenero] = useState("");
    const [listarGenero, setListaGenero] = useState([]);
    function alerta(icone, mensagem){
       async function cadastrarGenero(e){
       }
      const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "icone",
  title: "mensagem"
});
    }

       async function cadastrarGenero(evt){
        evt.preventDefault();

       function ExluirGenero() {
        alert("Genero excluido")
       }
      
       async function AtualizarGenero () {
        alert("Genero Atualizado")
       }











        //verificar se o input esta vindo vazio
        // trim: apaga os espaços
        if(genero.trim() != ""){
            
            try{
                //cadastrar um genero: post
                await api.post("genero",{nome: genero});
                 alerta("sucess", "Cadastro realizado com sucesso")
                
            }catch(error){
                alerta("error", "Erro! entre em contato com o nosso suporte")
                console.log(error);
            }
        }else{
           alerta("info", "Deu ruim")
        }

    //try => tentar(o esperado)
    //catch => pega a exceção




    
    async function listarGenero(){
      try {
        const resposta = await api.get("genero");
        setListaGenero(resposta.data)
        
      } catch (error) {
        console.log(error);
      }
    }
      
    }

    }

    //TESTE: validar o genero
    // useEffect(() => {
    //     console.log(genero);
    // },[genero]);
    //fim do teste

    useEffect(()=>{
      listarGenero();
      
    },[])

    return(
        <>
           <Header/>
           <main>
                <Cadastro tituloCadastro="Cadastro de Gênero"
                visibilidade = "none"
                placeholder = "gênero"

                //atribuindo a função:
                funcCadastro = {cadastrarGenero}
                //atribuindo o valor do input:
                valorInput = {genero}
                //atibuindo a função que atualiza o meu genero
                setValorInput ={setGenero}
                />
                
                <Lista ListaTitulo="Lista de Gêneros"
                visible="none"
                lista = {listarGenero}
                />
           </main>
           <Footer/>
       </> 
    )


export default CadastroGenero;
