

import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import EntrarGrupo from '../modais/EntrarGrupo'
import {ButtonDiv} from './styled'


export default function NotificationButtom () {
    const {typeG, typeClick, EntrarG, setEntrarG} = useContext(AuthContext)

    return (
        <>
            <ButtonDiv>
                <div className="btnMain">
                    <div className="menu">
                        <li>
                            <img 
                                src="/image/megaphone.png" 
                                alt="imagem megafone"  
                                className='img1'
                                onClick={()=> {typeClick('megafone')}}
                            />
                        </li>
                        <li>
                            <img 
                                src="/image/notification-d.png" 
                                alt="imagem notificacao" 
                                className='img2'
                                onClick={()=> {typeClick('notification')}}
                            />
                        </li>
                        <li>
                            <img 
                                src="/image/mail-d.png" 
                                alt="imagem email" 
                                className='img3'
                                onClick={()=> {typeClick('mail')}}
                            />
                        </li>
                    </div>
                    <button className='btn-more'>+</button>
                </div>
            </ButtonDiv>
            {EntrarG ? <EntrarGrupo EParticipe={setEntrarG} type={typeG}/> : null}
        </>
    )
}