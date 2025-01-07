import { IoIosCloseCircle } from 'react-icons/io';
import './colaborador.css'

/*
aoDeletar(colaborador.id)` diretamente como o valor do atributo `onClick`, 
a função será executada assim que o componente for renderizado, e não quando o usuário clicar no elemento. 
Isso significa que o colaborador será deletado assim que o componente for exibido na tela, e não quando o usuário realmente clicar no ícone de exclusão.
Para corrigir isso, você deve passar uma função anônima que chame a função `aoDeletar` quando o usuário clicar no elemento, 
como por exemplo: `onClick={() => aoDeletar(colaborador.id)}`. 
*/
const Colaborador = ({ colaborador, corDeFundo, aoDeletar}) => {
    return (<div className="colaborador">
        <IoIosCloseCircle 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador