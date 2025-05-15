import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg"
import Excluir from "../../assets/img/trash-can-regular.svg"

const Lista = (props) => {
    return(
        <section className="layout_grid listagem">
          <h1>{props.ListaTitulo}</h1>
            <hr/>
            
            <div className="tabela">
                <table>
                    {/* cabecalho da tabela: */}
                    <thead>
                            {/* tr > table row */}
                        <tr className="tablecabecalho">
                            {/* th => table header */}
                            <th>Nome</th>
                            <th  style={{display: props.visivel}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                            
                        </tr>
                    </thead>
                    {/* corpo da tabela */}
                    <tbody>
                        {props.lista && props.lista.lenght > 0?(
                            props.lista.map((item, index)=> (
                      <tr className="item_lista" key={item.idGenero}>
                        <td data-cell="nome">
                        {item.nome}
                        </td>
                        <td data-cell="Gênero" style={{display: props.visivel}}>Ação</td>
                        <td data-cell="Editar"> <img src={Editar} alt="Caneta" /></td>
                        <td data-cell="Excluir"> <img src={Excluir} alt="Lixeira" /></td>
                      </tr>
                            ))
                        ):
                        onClick=(props.funcExcluir)
                        
                        (
                            <p>Nenhum genero encontrado.</p>
                        )
}

                    </tbody>
                </table>
            </div>
        </section>
    )
}



export default Lista;