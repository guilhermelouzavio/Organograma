import { Fragment } from 'react'
import './Banner.css'
//import banner from '../../../public/imagens/banner.png';

export const Banner = () => {
    //JSX
    return(
        // <Fragment> ou <> utilzado quando voce quer retornar mais de um elemento 
        //     em um componente
        <>
            <header className='banner'>
                <img src={require('./../../imagens/banner.png')} alt="O banner principal da pagina Organo"/>
            </header>
            <h1>Ttitulo</h1>
        </>
    )
}
