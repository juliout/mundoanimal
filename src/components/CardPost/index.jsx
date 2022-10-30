import { Link } from 'react-router-dom'
import {CardDiv} from './styled'

export default function CardPost({id, date, title, text}){
    return (
        <CardDiv className="card-post" data-aos='zoom-in'>
            <Link to={`/post/${id}`}>
                
                    <p>{date}</p>
                    <h2>{title}</h2>
                    <span>
                        {text}
                    </span>
            </Link>
        </CardDiv>
    )
}