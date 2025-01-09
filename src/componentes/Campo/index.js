import './campo.css'

 //toda vez alterado o valor o estado muda e assim o 
    //componente atualiza na tela
    //const [valor,setValor] = useState('Guilherme');
    
    //abaixo estamos elevando o estado do componente 
    //para o formulario , para que cada botao tenha
    //o seu proprio estado
    
const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input 
            type={type}
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}
        /> 
    </div>)
}

export default Campo