import {CardDiv} from './styled'

export default function CardPost({date, title, text}){
    return (
        <CardDiv className="card-post" data-aos='zoom-in'>
            <p>{date}</p>
            <h2>{title}</h2>
            <span>
                {text}
            </span>
        </CardDiv>
    )
}