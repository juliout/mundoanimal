import {ModalMain, RepoDiv} from './styled'
import InputName from '../../inputName'
import Email from '../../emailAutocompletee'
export default function ReportError({modalClose, colorBg}) {
    return (
        <ModalMain>
            <RepoDiv bgc={colorBg}>
                <button className='btnClose' onClick={()=>modalClose(false)}> X </button>
                <form action="" method="post" id='reportar'>
                    <h2>Comunicar Erro!</h2>
                    <p>Se você encontrou algum problema em nosso sistema, por favor nos comunique preenchendo os campos abaixo</p>

                    <div className='nameEmail'>
                        <InputName type="text" name="" id="" placeholder='Nome'/>
                        <Email type="email" name="" id="" placeholder='E-mail'/>
                    </div>
                    <input type="text" className='linkinput' placeholder='Link da pagina com erro '/>
                    <textarea name="" id="textArea" cols="30" rows="10" className='textArea' placeholder='Descrição do problema'/>
                    <button className='btnEnviar'>Enviar</button>
                </form>
            </RepoDiv>
        </ModalMain>
    )
}