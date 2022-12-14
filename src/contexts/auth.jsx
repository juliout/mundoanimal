import { useState, createContext, useEffect, useReducer } from 'react'
import {Api} from '../api'
import ModalError from '../components/modalError';
import ModalSucess from '../components/modalSucess';
import { useNavigate } from 'react-router-dom'
import { ApiPrivate } from '../api';
export const AuthContext = createContext()

export default function AuthProvider({ children }){
    const [ usuario, setUsuario ] = useState('');
    const [ typeG, setTypeG ] = useState('')
    const [ EntrarG, setEntrarG ] = useState(false)
    const [ postData, setPostData] = useState('')
    const [ cadastrar, setCadastrar] = useState(false)
    const [ logar, setLogar] = useState(false)


    const navigate = useNavigate()

    useEffect(()=>{
        async function loadUsuario(){

        let usuarioStorage = localStorage.getItem('userToken')

        if(usuarioStorage){
            usuarioStorage  = JSON.parse(usuarioStorage)
            await Api.post('/session', {
                id: usuarioStorage.id,
                token: usuarioStorage.token
            })
            .then(async response => {
                setUsuario(usuarioStorage)                     
            })
            .catch(async response=> {
                await ModalError('Logue novamenete')
                await localStorage.removeItem('userToken')
            })
        }else {
            return localStorage.removeItem('userToken')
        }
        
    }
    loadUsuario()
    },[])


    async function Login(login){
        const response = await Api.post('/login', login).catch(async response=> {
            if(!response.response.data){
                return await ModalError('Erro ao logar, tente mais tarde')
            }
            return await ModalError(response.response.data.message)
        })
        if(response) {
            localStorage.setItem('userToken',JSON.stringify(response.data.user))
            await ModalSucess(response.data.message)
            setUsuario(response.data.user)
            return window.location.reload()
        }
    }
    function Sair(){
        localStorage.removeItem('userToken')
        return window.location.reload()
    }

    async function typeClick (type) {
        if (type === 'whatsapp'){
          setTypeG('whatsapp')
          return setEntrarG(true)
        }
        if (type === 'telegram'){
          setTypeG('telegram')
          return setEntrarG(true)
        }
        if (type === 'mail'){
          setTypeG('mail')
          return setEntrarG(true)
        }
        if (type === 'notification'){
          setTypeG('notification')
          return setEntrarG(true)
        }
        if (type === 'megafone'){
            setTypeG('megafone')
            return setEntrarG(true)
          }
        return
      }

    async function cancelarCadastro(){
        const token = {
            'x-acess-token' : usuario.token,
            'Content-Type': 'application/json',
        }
        await Api.post('/alertasorte/desativar', [],{
            headers: token
        }).then(async response => {
            localStorage.removeItem('userToken')
            await ModalSucess('Desativado', ()=> {
                setTimeout(() => {
                    window.location.reload() 
                 }, 2000);
            })
        })
        .catch(reponse=> ModalError('n??o foi possivel desativar'))
    }

    async function findAdmPost(id) {
        try {
            await ApiPrivate.get(`/posts/${id}`)
            .then(response=> {
                setPostData(response.data)
            })
            .catch(error => {
                throw new Error(error)
            })
        } catch (error) {
            return ModalError(error)
        }
    }

    const SingUp = async (user) => {
        await Api.post('/createuser', user)
        .then(async response=> {
            await ModalSucess('Cadastrado')
        })
        .catch(async response=> {
            return await ModalError(response)
        })
        let login = {
            email: user.email,
            password: user.password,
            rede: 'mundo-animal'
        }
        const resposta = await Api.post('/login', login).catch(async error=> {
            if(!error.response.data){
                return await ModalError('Error ao logar, tente mais tarde')
            }
            return await ModalError(error.response.data.message)
        })
        if(resposta) {
            await localStorage.setItem('userToken',JSON.stringify(resposta.data.user))
            await ModalSucess('sendo redirecionado')
            return setTimeout(() => {
            window.location.reload() 
            }, 2000);
        }
    
    }   

    return(
        <AuthContext.Provider
            value={{ 
                authenticated: !!usuario, 
                usuario, 
                Login,
                Sair,
                cancelarCadastro,
                typeG,
                setTypeG,
                typeClick,
                EntrarG,
                setEntrarG,
                postData,
                findAdmPost,
                cadastrar,
                setCadastrar,
                SingUp,
                logar,
                setLogar
            }}>
            {children}
        </AuthContext.Provider>
        
    )
}