import {useState, useContext} from 'react'
import {ModalDiv} from './modalStyled'
import InputName from '../../inputName'
import { AuthContext } from '../../../contexts/auth';

import 'react-toastify/dist/ReactToastify.css';
import Email from '../../emailAutocompletee';

export default function MCadastro({setCadastrar, form}) {
    const {SingUp} = useContext(AuthContext)

    async function sendCadastro(e) {
        e.preventDefault()
        const {name, genero, nascimento, email, password} = e.target

        const user = {
            name: name.value,
            email: email.value,
            datanascimento: nascimento.value,
            genero: genero.value,
            password: password.value,
            rede: 'mundo-animal',
            userAgent: window.location.userAgent,
            plataform : window.location.plataform,
            social: 'e-mail',
            socialContact: email.value
        }
        SingUp(user)
    }
    
    const closebox = (e) => {
        e.preventDefault()
        setCadastrar(false)        
    }
    return (
        <ModalDiv>
            <div className="modalMain">
                <button className='btnClose' onClick={closebox}> X </button>
                <form id='formSendCadastro' onSubmit={(e)=> sendCadastro(e)}>
                    <h2 className='formTitle'>
                        Faça Seu cadastro e Tenha permissão a postar no mural da comunidade.
                    </h2>
                    <div className='divForm'>                        
                        <div className='divfor-all'>
                            <div className='stwo'>
                                    <div className='input fullname'>
                                        <label htmlFor="name">Nome Completo:</label>
                                        <InputName type="text" name='name' id='name' required/>
                                    </div>
                                    <div className="select">
                                        <label htmlFor="genero">genero</label>
                                        <select name="genero" id="genero" className='.input'>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                        </select>
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="nascimento">Data Nasci.:</label>
                                        <input type='date' name='nascimento' id='nascimento' required/>
                                    </div>
                                    
                            </div>
                            <div className="sone">
                                    <div className='input '>
                                        <label htmlFor="email">E-mail</label>
                                        <Email name='email' id='email' required autoComplete='off' />
                                    </div>
                                    <div className='input'>
                                        <label htmlFor="name">Senha</label>
                                        <input type="password" name='password' id='password' required/>
                                    </div>
                            </div>
                        </div>
                       
                        <div className='divtemos'>
                            <input type="checkbox" name="termodal" id="termodal" required/>
                            <label htmlFor="temodal">Li e aceito os <span>termos de uso</span>.</label>
                        </div>
                        <button className='prontobtn'>Pronto!</button>
                    </div>
                </form>                
            </div>
        </ModalDiv>
    )
}