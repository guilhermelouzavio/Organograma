import './Rodape.css'


const Rodape = () =>{

    return (
        <footer className='footer'>
            <section>
              <ul>
                <li><img src={require('../../imagens/fb.png')} alt='logo facebook'/></li>
                <li><img src={require('../../imagens/ig.png')} alt='logo instagram'/></li>
                <li><img src={require('../../imagens/tw.png')} alt='logo twitter'/></li>
              </ul>
            </section>
                <section className='logo'>
                    <img src={require('../../imagens/logo.png')} alt='imagem titulo projeto'/>
                </section> 
                <section>
                    <p>Desenvolvido por Alura.</p>
                </section>     
        </footer>

    )
}

export default Rodape