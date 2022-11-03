import { useEffect } from 'react'
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

    function removeall(valor) {
        let x = valor
        var er = /[^a-zA-Z\s]/g;
        x = x.replace(er, '')
        x = x.replace(/ /g, '-')
        x = x.toLowerCase()
        console.log(x)
        return x
    }

    useEffect(()=>{
        removeall(post_titulo)
    },[])
    return (
        <Link to={`/post/${post_id}/${removeall(post_titulo)}`} className='link'>
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