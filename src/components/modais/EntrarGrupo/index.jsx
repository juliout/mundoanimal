
import {EntrarDiv,MegaDiv } from './styled'

export default function EntrarGrupo({EParticipe, type}) {
    return (
        <>
        { type !== 'megafone' ?
         
                    
        <EntrarDiv type={type}>
            <div className="emain">
                <button className='btn-close' onClick={()=>EParticipe(false)}>X</button>
                <h1>Entrar no Grupo</h1>

                <form action="">
                    <div className='termos'>
                        <input type="checkbox" />
                        <p>
                            "Li e aceito os "
                            <a href="/">termos de uso</a> 
                            do serviço. Me comprometo a respeitar o
                            <a href='/'>manual de boas práticas </a>,
                            inclusive não enviando aos demais participantes do
                            grupo conteúdos inadequados ou que não tenham relação
                            com os temas propostos."
                        </p>
                    </div>
                    {
                    type !== 'notification' ? 
                        <div className="inputs">
                            <input 
                                type="text"
                                placeholder='Nome'
                                name='entrar-name' 
                                id='entrar-name'
                            />
                            <input 
                                type="email"
                                placeholder='E-mail'
                                name='entrar-email'
                                id='entrar-email'
                            />
                        </div> : null
                    }

                    <div className='btn-entrar'>
                        <button>
                            {type === 'whatsapp' ? 
                                <img 
                                    src="/image/modal-whats.png" 
                                    alt="icone wpp" 
                                /> 
                                : type === 'telegram' ?
                                <img 
                                    src="/image/modal-telegram.png" 
                                    alt="icone wpp" 
                                />
                                : type === 'mail' ?
                                <img 
                                    src="/image/modal-mail.png" 
                                    alt="icone wpp" 
                                />
                                : type === 'notification' ?
                                <img 
                                    src="/image/modal-notification.png" 
                                    alt="icone wpp" 
                                /> : null
                            }
                            <span>
                                Entrar no Grupo
                            </span>
                        </button>
                    
                    </div>
                </form>

            </div>
        </EntrarDiv> :
        <MegaDiv>
        <div className="megaMain">
            <button className='btn-close' onClick={()=>EParticipe(false)}>X</button>
            <h1>
                Você sabe de curiosidades sobre o Mundo Animal?
            </h1>
            <p>
                Escreva e envie para toda a comunidade
            </p>
            <form action="">
                <input 
                    type="text" 
                    name='mega-apelido'
                    id='mega-apelido'
                    placeholder='Apelido'
                />
                <div className="inputs">
                    <input 
                        type="text" 
                        name="mega-name" 
                        id="mega-name" 
                        placeholder='Nome'
                    />
                    <input 
                        type="email" 
                        name="mega-email" 
                        id="mega-email"
                        placeholder='E-mail'
                    />
                     <input 
                        type="text" 
                        name="mega-zap" 
                        id="mega-zap"
                        placeholder='zap' 
                    />
                </div>
                <textarea 
                    name="mega-text" 
                    id="mega-text" 
                    cols="30" 
                    rows="10"
                    placeholder='Escreva a curiosidade'
                />
                <div className="input-enviar">
                    <input 
                        type="text" 
                        name="mega-link" 
                        id="mega-link"
                        placeholder='Link' 
                    />
                    <button>Enviar</button>
                </div>
                <p className='text-rodape'>cite as fontes de onde você tirou a informação, separando-as por vírgula</p>
            </form>
            
        </div>
        </MegaDiv>
        }
        </>
    )
}