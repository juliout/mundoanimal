import { Link } from 'react-router-dom'
import {CardDiv} from './styled'
import './styled.css'

export default function CardPost({data}){

    const {
        post_id,
        post_titulo,
        post_web_texto,
        formatted_date,
        post_data_time
    } = data

    return (
        <Link to={`/poste/${post_id}`} className='link'>
            <CardDiv  data-aos='zoom-in'>                
                    <p>{`${post_data_time} - ${formatted_date}`}</p>
                    <h2>{post_titulo}</h2>
                    <span>
                        {post_web_texto}
                    </span>
            </CardDiv>
        </Link>
    )
}