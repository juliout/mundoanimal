import { useContext, useState } from 'react'
import {BannerTwoContainer} from './styled'
import Participe from '../../modais/Participe'
import { AuthContext } from '../../../contexts/auth'

export default function BannerTwo() {
  const [ participe, setParticipe] = useState(false)
  const {typeClick} = useContext(AuthContext)

  return (
    <>
      <BannerTwoContainer data-aos='fade-up'>
      <div className="main">
        <div 
          className="card bg1" 
          onClick={()=>{setParticipe(true)}}
          data-aos='fade-up'
        >
          <div className='card-text' data-aos='fade-up'>
            <span>
              Todos os dias, posts com curiosidades sobre os bichos que compartilham o mundo com a gente!
            </span>
          </div>
        </div>
        <div 
          className="card bg2" 
          onClick={()=>{setParticipe(true)}}
          data-aos='fade-down'
        >
          <div className='card-text div-right' data-aos='fade-up'>
            <span>
              Entre nos nossos grupos de "loucos por bichos" e receba o melhor conteúdo sobre o mundo animal
            </span>
          </div>
        </div>
        <div className="card bg3" data-aos='fade-up'>
          <div className="cardleft">
            <p>Você escolhe onde quer receber nossos posts</p>
            <div className='groupnot'>
              <img 
                src="/image/hwpp.png" 
                alt="logo wpp" 
                className='logonot'
                onClick={()=> {typeClick('whatsapp')}}
                data-aos='flip-right'
              />
              <img 
                src="/image/htele.png"
                alt="logo telegram" 
                className='logonot'
                onClick={()=> {typeClick('telegram')}}
                data-aos='flip-right'
              />
              <img 
                src="/image/email.png"
                alt="logo email" 
                className='logonot'
                onClick={()=> {typeClick('mail')}}
                data-aos='flip-right'
              />
              <img 
                src="/image/notification.png" 
                alt="logo notification" 
                className='logonot'
                onClick={()=> {typeClick('notification')}}
                data-aos='flip-right'
              />
            </div>
          </div>
          <img 
            src="/image/telzap.png" 
            alt="imagem de um celular com o aplicativo wpp aberto"  
            className='telnot' 
            onClick={()=>{setParticipe(true)}}
          />
        </div>
      </div>
    </BannerTwoContainer>
    {participe ? <Participe cParticipe={setParticipe}/> : null}
    </>
  )
}