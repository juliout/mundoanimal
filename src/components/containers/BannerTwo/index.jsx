import {BannerTwoContainer} from './styled'

export default function BannerTwo() {
    return (
        <BannerTwoContainer>
        <div className="main">
          <div className="card bg1">
            <div className='card-text'>
              <span>
                Todos os dias, posts com curiosidades sobre os bichos que compartilham o mundo com a gente!
              </span>
            </div>
          </div>
          <div className="card bg2">
            <div className='card-text div-right'>
              <span>
                Entre nos nossos grupos de "loucos por bichos" e receba o melhor conteúdo sobre o mundo animal
              </span>
            </div>
          </div>
          <div className="card bg3">
            <div className="cardleft">
              <p>Você escolhe onde quer receber nossos posts</p>
              <div className='groupnot'>
                <img src="/image/hwpp.png" alt="logo wpp" className='logonot'/>
                <img src="/image/htele.png" alt="logo telegram" className='logonot'/>
                <img src="/image/email.png" alt="logo email" className='logonot'/>
                <img src="/image/notification.png" alt="logo notification" className='logonot'/>
              </div>
            </div>
            <img src="/image/telzap.png" alt="imagem de um celular com o aplicativo wpp aberto"  className='telnot'/>
          </div>
        </div>
      </BannerTwoContainer>
    )
}