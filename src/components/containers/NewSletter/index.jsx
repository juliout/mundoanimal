import {NewSletterDiv} from './styled'
import ReactTooltip from 'react-tooltip';

const tooltipText = 'Nós respeitamos sua privacidade. Projeto desenvolvido de acordo com as diretrizes da nova Lei Geral de Proteção de Dados.';

export default function NewSletter() {
    return (
           <NewSletterDiv>
                <div className="main">
                    <p>Cadastre-se para receber nossa newsletter com a seleção dos melhores posts</p>
                    <form action="">
                        <div className='ns-div-input'>
                            <input type="text" name="ns-name" id="ns-name" placeholder='Nome'/>
                            <input type="email" name='ns-email' id='ns-email' placeholder='E-mail'/>
                        </div>
                        <div>
                            <input type="checkbox" name="ns-termos" id="ns-termos"/>
                            <p>
                                li e aceito a 
                                <a href="/">
                                    Política de Privacidade
                                </a>
                            </p>
                            <button> Ok</button>
                        </div>
                    </form>
                    <ReactTooltip className='texttool'/>
                    <img 
                        src="/image/lgpd.png" 
                        alt="lgpd icon" 
                        className='imglgpd'
                        data-tip={tooltipText}
                    />
                </div>
           </NewSletterDiv>
    )
}