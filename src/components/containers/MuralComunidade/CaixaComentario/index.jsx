import { useEffect, useState } from 'react'

import { Api } from '../../../../api'

import {HiUserCircle} from 'react-icons/hi'
import {IoMdThumbsUp} from 'react-icons/io'

import {ComentarioDiv} from './styled'

export default function CaixaComentario({data}) {
  const usuario = 3
  const [curtirTxt, setCurtirTxt] = useState(false)
  const [value, setValue] = useState(data)

  
  useEffect(()=> {
    const {comentarioCurtidas} = data
    function curtiu () {
      comentarioCurtidas.forEach(element => {
        if(element.user_id === usuario) {
          setCurtirTxt(true)
        } 
      })
    }
    curtiu()
  },[data])

  async function realodComentario(comentario_id) {
    const response = await Api.post('/comentario', {
      id: comentario_id
    })
    if (!response.data.message) {
      console.log(response.data)
      setValue(response.data)
    }
  }

  async function curtida(comentario_id, user_id) {
    const response = await Api.post('/curtidacomentario', {
      user_id: user_id,
      comentario_id: comentario_id
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
            onClick={()=> {curtida(value.id, usuario)}}
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