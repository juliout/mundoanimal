import {PDiv} from './styled'

export default function Participe({cParticipe}) {
    return(
        <PDiv>
            <div className="pmain">
            <button className='btn-close' onClick={()=>cParticipe(false)}>X</button>
                <div className="container">
                    <img src="/image/telzap.png" alt=""  className='tel-zap'/>
                    <div className="prigh">
                        <h1>
                            Participe dos nossos grupos e receba diariamente receitas especialmente selecionadas pelos nossos chefs!
                        </h1>
                        <p>
                        Você prefere entrar nos grupos usando whatsapp, telegram, E-mail ou notificação?
                        </p>
                        <div className="picons">
                            <img src="/image/hwpp.png" alt="icone grande wpp" />
                            <img src="/image/htele.png" alt="icone grande wpp" />
                            <img src="/image/hemail.png" alt="icone grande wpp" />
                            <img src="/image/hsino.png" alt="icone grande wpp" />
                        </div>
                    </div>
                </div>
            </div>
        </PDiv>
    )
}