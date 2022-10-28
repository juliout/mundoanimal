import './styled.css'

const BtnParticipar = ({className, onClick}) => {
    return (
        <button className={`participar-btn ${className}`} onClick={onClick || null}>Participar</button>
    )
}

export default BtnParticipar