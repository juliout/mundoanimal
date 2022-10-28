import './styled.css'

export default function BtnVerMais({className, onClick}) {
    return (
        <button className={`post-vermais-btn ${className || ''}`} onClick={onClick || null}>Ver mais</button>
    )
}