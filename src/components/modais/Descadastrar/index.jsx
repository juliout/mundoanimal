import Email from '../../emailAutocompletee'
import InputName from '../../inputName'

import {ModalMain, DesDiv} from './styled'

export default function Descadastrar({modalClose, colorBg}) {
    return (
        <ModalMain>
            <DesDiv bgc={colorBg}>
                <button className='btnClose' onClick={()=>modalClose(false)}>X</button>
                <form  method="post" id="descadastrar">
                    <h2>Descadastrar</h2>
                    <p>Para se descadastrar do site e cancelar o envio de receitas e promoções, preencha os campos abaixo:</p>
                    <div className='firstDiv'>
                        <div className='top'>
                            <div className='divinput'>
                                <label htmlFor="">Nome Completo</label>
                                <InputName type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='botton'>
                            <div className='divinput'>
                                <label htmlFor="">Email</label>
                                <Email type="email" name="" id="inputEmail" className='inputEmail'/>
                            </div>
                            <div className='divinput'>
                                <label htmlFor="">senha</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    </div>
                    <button className='btnDescadastrar'> Descadastrar </button>
                </form>
            </DesDiv>
        </ModalMain>
    )
}