import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) =>{
    console.log(props)
    const placeholderModificada = `${props.placeholder}...`;

    //toda vez alterado o valor o estado muda e assim o 
    //componente atualiza na tela
    //const [valor,setValor] = useState('Guilherme');
    
    //abaixo estamos elevando o estado do componente 
    //para o formulario , para que cada botao tenha
    //o seu proprio estado
    const aoDigitar = (evento) => {
       props.aoAlterado(evento.target.value)
    }

 return (
    <div className="campo-texto">   
        <label>{props.label}</label>
        <input value={props.valor} onChange={aoDigitar}  required={props.obrigatorio} placeholder={placeholderModificada}/>
    </div>

 )


}

export default CampoTexto