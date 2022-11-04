import { useContext } from 'react'
import {BannerContainer} from './styled'
import {AuthContext} from '../../../contexts/auth'

export default function BannerDiv() {
    const {typeClick} = useContext(AuthContext)

    return (
        <BannerContainer>
            <div className="banner">
            <div className='rpbanner'>
                <h1>QUER CONHECER FATOS CURIOSOS SOBRE O MUNDO ANIMAL?</h1>
                <button onClick={()=> typeClick('whatsapp')}>[Entrar na comunidade]</button>
            </div>          
            </div>              
        </BannerContainer>
    )
}