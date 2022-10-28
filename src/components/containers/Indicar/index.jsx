import {IndicarBannerDiv} from './styled'

import {BsFillShareFill} from 'react-icons/bs'

export default function Indicar() {
    return (
    <IndicarBannerDiv>
        <div className="main" data-aos='fade-left'>
            <span>
            Indique seus amigos apaixonados pelo mundo animal
            Indicar Amigos para se juntarem ao nosso grupo!
            </span>
            <button>Indique Amigos <BsFillShareFill/></button>
        </div>
    </IndicarBannerDiv>

    )
}