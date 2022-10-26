import {FDiv} from './styled'

export default function FaleConosco({closef}) {
    return (
        <FDiv>
            <div className="fmain">
            <button className='btn-close' onClick={()=>closef(false)}>X</button>
                <h1 className="f-titulo">
                    Fale Conosco
                </h1>
                <p className='f-subtitle'>
                    Loren Ipsun fale conosco texto exemplo
                </p>
                <form action="/" id="fale-modal">
                    <div className="name-email">
                        <input 
                            placeholder='Nome'
                            type="text" 
                            id="fale-name" 
                            name='fale-name'
                            className="fale-name" 
                        />
                        <input 
                            placeholder='E-mail'
                            type="text" 
                            id="fale-email" 
                            className="fale-email" 
                        />
                    </div>
                    <input 
                        placeholder='Assunto'
                        type="text" 
                        id="fale-assunto" 
                        className='fale-assunto'
                    />
                    <textarea 
                        placeholder='Mensagem'
                        name="" 
                        id="fale-text" 
                        cols="30" 
                        rows="10" 
                        className="fale-text"
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </FDiv>
    )
}