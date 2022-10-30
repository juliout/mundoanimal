import {MuralComunidadeDiv} from './styled'

import BtnVerMais from '../../BtnDefault/btnVermais'

import { useState, useContext } from 'react'
import { AuthContext } from '../../../contexts/auth'

import CaixaPostagem from './CaixaPostagem'

export default function MuralComunidade({className}) {  
    const {allPosts, setReloadPosts } = useContext(AuthContext)

    return (
        <MuralComunidadeDiv className={className || ''}>
        <div className="main">
          <h2 className='mural-title'>Mural da Comunidade</h2>

          <form className="create-post" data-aos='fade-up'>
            <div className="line-one">
              <input type="text" name='title-post' id='post-title' placeholder='Título'/>
              <p>Restam 2000 caracteres</p>
            </div>
            <textarea name="post-textarea" id="post-textarea" cols="30" rows="10" placeholder='Texto'/>
            <input type="text" name="link-post" id="link-post" placeholder='Link/Fonte'/>
            <button className='post-btn-enviar'>Enviar</button>
          </form>

          <div className='organizar-post'>
            <p>Organizar por :</p>
            <img src="/image/filter-solid.svg" alt="imagem de um filtro de posts"/>
          </div>
          
          {allPosts ? allPosts.map((value, index)=>{
            
            return (
              <CaixaPostagem data={value} key={index}/>
            )
          }) : null}
          
          <BtnVerMais/>
        </div>      
      </MuralComunidadeDiv>

    )
}