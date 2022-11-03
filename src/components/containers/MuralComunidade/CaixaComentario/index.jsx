import { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../../../../contexts/auth'
import { Api } from '../../../../api'

import {HiUserCircle} from 'react-icons/hi'
import {IoMdThumbsUp} from 'react-icons/io'

import {ComentarioDiv} from './styled'
import ModalError from '../../../modalError'

export default function CaixaComentario({data}) {
  
  const [curtirTxt, setCurtirTxt] = useState(false)
  const [value, setValue] = useState(data)
  const {usuario, setLogar} = useContext(AuthContext)
  
  useEffect(()=> {
    if(!usuario){
      return
    }
    const {comentarioCurtidas} = data
    function curtiu () {
      comentarioCurtidas.forEach(element => {
        if(element.user_id === usuario.id) {
          setCurtirTxt(true)
        } 
      })
    }
    curtiu()
  },[])

  async function realodComentario(comentario_id) {
    const response = await Api.post('/comentario', {
      id: comentario_id
    })
    if (!response.data.message) {
      setValue(response.data)
    }
  }

  async function curtida(comentario_id) {
    if(!usuario) {
      return setLogar(true)
    }
    const token = {
      'x-acess-token' : usuario.token,
      'Content-Type': 'application/json',
    }
    const response = await Api.post('/curtidacomentario', {
      user_id: usuario.id,
      comentario_id: comentario_id
    }, {
      headers: token
    })
    if(response.data.message === 'curtido') {
      await realodComentario(comentario_id)
      return setCurtirTxt(true)
    } else {
      await realodComentario(comentario_id)
      return setCurtirTxt(false)
    }
  }

  return (
    <ComentarioDiv>
      <HiUserCircle className='icon-comentario'/>
      <div className='container'>
        <div className="conteudo">
          <h3 className='titulo-comentario'>{value.user.name}</h3>
          <p className='comentario'>{value.text}</p>
        </div>
        <div className="bot">
          <button 
            className={`btn-comentario-curtir ${curtirTxt ? 'curtido' : ''}`}
            onClick={()=> {curtida(value.id)}}
          >
              curtir
          </button>
          <button  
            className={`div-comentario-cutir ${curtirTxt? 'curtido' : ''}`}
            onClick={()=> {curtida(value.id, usuario)}}
          >
            <IoMdThumbsUp className='comentario-joinha'/>
            {value.comentarioCurtidas.length}
          </button>
        </div>
      </div>
    </ComentarioDiv> 
  )
}