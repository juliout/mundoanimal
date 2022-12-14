import {MuralComunidadeDiv} from './styled'

import BtnVerMais from '../../BtnDefault/btnVermais'
import { useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../../contexts/auth'
import { Api } from '../../../api'
import ModalSucess from '../../modalSucess'

import CaixaPostagem from './CaixaPostagem'
import ModalError from '../../modalError'
import { ToastContainer } from 'react-toastify'

export default function MuralComunidade({className}) {
    
  const {setLogar, usuario} = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [link, setLink] = useState('')
  const [ allPosts, setAllPosts ] = useState('')
  const [ limit, setLimit] = useState(3)
  const navigate = useNavigate()

  //useEfects
  useEffect(()=> {
    async function findAllPostMural(){
        try {
            await Api.post('/allposts', {limit: limit}).then(response=> {
                setAllPosts(response.data)
            })
        } catch (error) {
            ModalError(error.message)
        }
    }
    findAllPostMural() 
  },[allPosts])

  //functions
  async function reloadPosts (limit) {
    try {
      if(limit) {
          await Api.post('/allposts', {limit: limit}).then(response=>{
            setAllPosts(false)
          }).catch(e=>{
              throw new Error(e.message)
          })
      }else {
          await Api.post('/allposts', {limit: 3}).then(response=>{
              setAllPosts(false)
          }).catch(e=>{
              throw new Error(e.message)
          })
      }
        
    } catch (error) {
        console.log(error.message)
    }
  }

  async function SendPostMural(e) {
    e.preventDefault()
    if(!usuario){
      return setLogar(true)
    }
    const token = {
      'x-acess-token' : usuario.token,
      'Content-Type': 'application/json',
    }
    try {
      await Api.post('/createpost', {
        title: title,
        text: text,
        link: link,
        type: 'mundo-animal',
        user_id: usuario.id
      },{
        headers: token
      })
      .then(response =>{
        ModalSucess('Publicado no mural')
        reloadPosts(3)
        setTitle('')
        setLink('')
        setText('')
      }).catch(e=>{
        throw new Error(e.message)
      })
    } catch (error) {
      ModalError(error.message)
    }
  }

  function morePosts() {
    if(!usuario) return setLogar(true)
    if (window.location.pathname !== '/forum') {
      if (limit >= 6) {
        navigate('/forum')
      }
    }
    reloadPosts(limit+1)
    setLimit(limit+1)
  }
    
  return (
      <MuralComunidadeDiv className={className || ''}>

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />          
      <div className="main">
        <h2 className='mural-title'>Mural da Comunidade</h2>

        {/* formulario de envio come??o */}
        <form 
          className="create-post" 
          data-aos='fade-up' 
          method='post' 
          onSubmit={(e)=>{SendPostMural(e)}}
        >
          <div className="line-one">
            <input 
              type="text" 
              name='title-post' 
              id='post-title' 
              placeholder='T??tulo'
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              disabled={usuario ? false : true}
            />
            <p>Restam {500 - text.length} caracteres</p>
          </div>
          <textarea 
            ame="post-textarea" 
            id="post-textarea" 
            cols="30" 
            rows="10"
            maxLength={500} 
            placeholder='Texto'
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            disabled={usuario ? false : true}
          />
          <input 
            type="text" 
            name="link-post" 
            id="link-post" 
            placeholder='Link/Fonte'
            value={link}
            onChange={(e)=>{setLink(e.target.value)}}
            disabled={usuario ? false : true}
          />
          <button className='post-btn-enviar'>Enviar</button>
        </form>

        {/* final do formulario, caixa de comentarios */}

        <div className='organizar-post'>
          <p>Organizar por :</p>
          <img src="/image/filter-solid.svg" alt="imagem de um filtro de posts"/>
        </div>
        
        {allPosts ? allPosts.map((value,index)=>{
          return (
            <CaixaPostagem data={value} key={index}/>
          )
        }) : null}
        
        <BtnVerMais onClick={()=> morePosts()}/>
      </div>      
    </MuralComunidadeDiv>

  )
}