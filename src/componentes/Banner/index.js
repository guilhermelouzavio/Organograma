import './banner.css'

//dessa forma é so um atalho do meu componente
//principal, é util em casos de varios componentes
//eu posso escolher qual exportar

const Banner = () => {
    return (<header className="cabecalho">
        <img src='/imagens/banner.png' alt='Logo do Organo'/>
    </header>)
}

export default Banner