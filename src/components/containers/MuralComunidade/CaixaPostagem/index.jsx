import { PostagemDiv } from "./styled"

import CaixaComentario from "../CaixaComentario"
import { Api } from "../../../../api"

import {GoVerified} from 'react-icons/go'
import {TiDeleteOutline} from 'react-icons/ti'
import {HiUserCircle} from 'react-icons/hi'
import {FaShare} from 'react-icons/fa'
import {RiArrowDownSFill} from 'react-icons/ri'
import {AiFillHeart, AiOutlineHeart, AiFillWechat} from 'react-icons/ai'
import { useEffect, useState } from "react"


export default function CaixaPostagem ({data, index}) {
   
  
    const usuario = 3
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const [comentarioCurtido, setComentarioCurtido] = useState(false)

    const [value , setValue] = useState(data)
    const [comentario, setComentario] = useState('')
    
    useEffect(()=>{
      const {postCurtidas} = data 
      
      function curtiu () {
        postCurtidas.forEach(element => {
          if(element.user_id === usuario) {
            setComentarioCurtido(true)
          }
        });
      }
      curtiu()
     
    },[data])


    const Verificado = () => {
        return (
          <>
            <GoVerified className='veri-icon'/>
            <p>verificado</p>
          </>
        )
      }
      const NoVerificado = () => {
        return (
          <>
            <TiDeleteOutline className='veri-icon noveri'/>
            <p className='noveri'>Não Verificado</p>
          </>
        )
      }
      
      function idade(nascimento) {
        const nascido = nascimento.split('-')
        return anoAtual - nascido[0]
      }

      async function reloadPost (post_id) {
        const response = await Api.post('/post', {
          id: post_id
        })
        if (!response.data.message) {
          setValue(response.data)
        }

      }
      
      async function curtida(post_id, user_id){

        const response = await Api.post('/curtidapost',{
          post_id : post_id,
          user_id : user_id
        })
        if (response.data.message === 'curtido') {
          await reloadPost(post_id)
          return setComentarioCurtido(true)
        }else {
          await reloadPost(post_id)
          return setComentarioCurtido(false)
        }
      }

      async function createComentario(e){
        if(e.code === 'Enter'){
          await Api.post('/createcomentario', {
            text : e.target.value,
            user_id : usuario,
            post_id : value.id
          }).then(async response => {
            await reloadPost(value.id)
            return setComentario('')
          }  
          ).catch(error=> console.log(error))
        }
      }

    return (
        <PostagemDiv className="box-posts" data-aos='fade-up' key={index}>
            <div className="post-container">
            <h1 className='titulos-posts'>{value.title}</h1>
            <p className='text'>{value.text}</p>
            <div className="div-user">
                <HiUserCircle className='user-image'/>
                <div>
                <p>{`${value.user.name} - ${idade(value.user.datanascimento)} - ${value.user.genero} `}</p>
                <p>{`${value.user.cidade} -  criado as ----, x horas atras`}</p>
                </div>
            </div>
            <div className="interact">
                <div className="btns-interact">
                <button onClick={()=> curtida(value.id, value.user_id, value.postCurtidas)}>
                    {comentarioCurtido ? 
                    <AiFillHeart
                      className='interact-icons-fill'
                    /> :
                    <AiOutlineHeart 
                        className='interact-icons' 
                    />}
                    {value.postCurtidas.length}
                </button>
                <button>
                    <AiFillWechat className='interact-icons'/> 
                    {value.comentarios.length}
                </button>
                <button>
                    <FaShare className='interact-icons'/> 
                    1
                </button>
                </div>
                <div className="post-verificado">
                {value.verified ? <Verificado/> : <NoVerificado/>}
                </div>
            </div>
            </div>

            <div className="comentario-container">
            <div className="relevante">
                <span>Mais Relevantes <RiArrowDownSFill/></span>
            </div>
            <div className="comentar">
            <HiUserCircle className='icon-comentar'/>
            <input 
                type="text" 
                placeholder='Escreva um comentário...' 
                name='inpt-comentario' 
                id='inpt-comentario'
                value={comentario}
                onChange={(e)=> setComentario(e.target.value)}
                onKeyDownCapture={(e)=>{createComentario(e)}}
                />
            </div>

            <div className='div-comentario'>

            {value ? value.comentarios.map((coment,location) => {
                return (
                    <CaixaComentario data={coment} key={location}/>                  
                )
            }) : null
            }       
            
            </div>
            </div>
        </PostagemDiv>
    )
}