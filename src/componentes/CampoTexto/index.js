import './campo-texto.css'

 //toda vez alterado o valor o estado muda e assim o 
    //componente atualiza na tela
    //const [valor,setValor] = useState('Guilherme');
    
    //abaixo estamos elevando o estado do componente 
    //para o formulario , para que cada botao tenha
    //o seu proprio estado
    
const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className='campo-texto'>
        <label>{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder}/> 
    </div>)
}

export default CampoTexto