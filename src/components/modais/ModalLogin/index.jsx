import {ModalDiv} from './styled'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth'
import Email from '../../emailAutocompletee'


export default function MLogin () {
    const {Login, setLogar, setCadastrar} = useContext(AuthContext)

    async function Logar(e){
        e.preventDefault() 
        const {loginEmail , loginPass} = e.target

        const user = {
            email : loginEmail.value,
            password : loginPass.value,
            rede: 'mundo-animal'
        }
        return Login(user)
    }

    function abrirCadastro () {
        setLogar(false)
        return setCadastrar(true)        
    }

    return (
        <ModalDiv>
            <div className="modalMain">
                <button 
                    className='btnClose' 
                    onClick={()=> setLogar(false)}>
                    X 
                </button>

                <form 
                    method='POST' 
                    className='form-login'
                    onSubmit={(e)=>{Logar(e)}}>
                    
                    <h1>Loge para ter acesso ao mural da comunidade </h1>

                    <div>
                        <input 
                            type='email'
                            name='loginEmail'
                            id='loginEmail'
                            placeholder='E-mail'
                            autoComplete='off'
                        />
                        <input 
                            type="password" 
                            name='loginPass' 
                            id='loginPass'
                            placeholder='Senha'
                            autoComplete='off'
                        />
                    </div>
                    <button className='login'> Login </button>
                </form>
                <div className='nao-cadastrado'>
                    <h2>não é cadastrado ?</h2>
                    <button onClick={()=> abrirCadastro() }>Cadastrar</button>
                </div>
            </div>
        </ModalDiv>
    )
}