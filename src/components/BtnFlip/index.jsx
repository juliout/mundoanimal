import {BtnDiv} from './btnStyled'

export default function BtnFlip({text, color, secondColor}) {
    return(
        <BtnDiv color={color} secondColor={secondColor}>
            <div className='flip-animate'>
                <a href='/' data-back={text}>{text}</a>
            </div>
        </BtnDiv>
    )
}