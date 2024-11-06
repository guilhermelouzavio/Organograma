import './Banner.css'
//import banner from '../../../public/imagens/banner.png';

export const Banner = () => {
    //JSX
    return(
        <header className="banner">
            <img src={require('./../../imagens/banner.png')} alt="O banner principal da pagina Organo"/>
        </header>
    )
}
