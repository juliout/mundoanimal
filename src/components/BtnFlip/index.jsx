import {BtnDiv} from './btnStyled'

export default function BtnFlip({text, color, secondColor, className}) {
    return(
        <BtnDiv color={color} secondColor={secondColor} className={className || ''}>
            <div className='flip-animate'>
                <a href='/' data-back={text}>{text}</a>
            </div>
        </BtnDiv>
    )
}