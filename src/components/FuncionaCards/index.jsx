import {FuncionaA} from './styled'

export default function FuncionaCard({className, img, text, number, flip}) {
    return (
        <FuncionaA className="funcionaCard" href='#BannerCadastrar' data-aos={`flip-${flip}`}>
            <span className='cardN'>{number}</span>
            <p>
            {text}
            </p>
            <img src={img} alt="card" />
        </FuncionaA>
    )
}