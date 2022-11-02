import {FuncionaA} from './styled'

export default function FuncionaCard({className, img, text, number, flip, onClick}) {
    return (
        <FuncionaA className="funcionaCard" href='#BannerCadastrar' data-aos={`flip-${flip}`} onClick={onClick || ''}>
            <span className='cardN'>{number}</span>
            <p>
            {text}
            </p>
            <img src={img} alt="card" />
        </FuncionaA>
    )
}