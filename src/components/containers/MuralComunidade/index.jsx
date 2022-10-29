import {MuralComunidadeDiv} from './styled'
import {HiUserCircle} from 'react-icons/hi'
import {AiOutlineHeart, AiFillHeart, AiFillWechat, AiOutlineCloseCircle} from 'react-icons/ai'
import {RiArrowDownSFill} from 'react-icons/ri'
import {FaShare} from 'react-icons/fa'
import {IoMdThumbsUp} from 'react-icons/io'
import {GoVerified} from 'react-icons/go'
import BtnVerMais from '../../BtnDefault/btnVermais'


export default function MuralComunidade() {  
    return (
        <MuralComunidadeDiv >
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
          {/* caixa do post e do comentario --- separar */}
          <div className="box-posts" data-aos='fade-up'>
            <div className="post-container">
              <h1 className='titulos-posts'>Título exemplo chamada</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="div-user">
                <HiUserCircle className='user-image'/>
                <div>
                  <p>Nome da pessoa - idade - Gènero</p>
                  <p>Cidade/estado - data em dd/mm/aa - x horas atras</p>
                </div>
              </div>
              <div className="interact">
                <div className="btns-interact">
                  <button>
                    <AiOutlineHeart className='interact-icons'/>
                    1
                  </button>
                  <button>
                    <AiFillWechat className='interact-icons'/> 
                    1
                  </button>
                  <button>
                    <FaShare className='interact-icons'/> 
                    1
                  </button>
                </div>

                <div className="post-verificado">
                  <GoVerified className='veri-icon'/>
                  <p>verificado</p>
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
                  />
              </div>

              <div className='div-comentario'>
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>                  
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta em caso de mais linhas</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* final aqui */}
          {/* caixa do post e do comentario --- separar */}
          <div className="box-posts">
            <div className="post-container">
              <h1 className='titulos-posts'>Título exemplo chamada</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <div className="div-user">
                <HiUserCircle className='user-image'/>
                <div>
                  <p>Nome da pessoa - idade - Gènero</p>
                  <p>Cidade/estado - data em dd/mm/aa - x horas atras</p>
                </div>
              </div>
              <div className="interact">
                <div className="btns-interact">
                  <button>
                    <AiOutlineHeart className='interact-icons'/>
                    1
                  </button>
                  <button>
                    <AiFillWechat className='interact-icons'/> 
                    1
                  </button>
                  <button>
                    <FaShare className='interact-icons'/> 
                    1
                  </button>
                </div>

                <div className="post-verificado">
                  <GoVerified className='veri-icon'/>
                  <p>verificado</p>
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
                  />
              </div>

              <div className='div-comentario'>
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>                  
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>
                <div className='caixa-comentario'>
                  <HiUserCircle className='icon-comentario'/>
                  <div className='container'>
                    <div className="conteudo">
                      <h3 className='titulo-comentario'>Nome da Pessoa</h3>
                      <p className='comentario'>Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta Aqui vai o comentário exemplo loren ipsun teste comentário 2 para mostrar o tamanho que ajusta em caso de mais linhas</p>
                    </div>
                    <div className="bot">
                      <button className='btn-comentario-curtir'>curtir</button>
                      <button className='div-comentario-cutir'>
                        <IoMdThumbsUp className='comentario-joinha'/>
                        1
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* final aqui */}
          
          <BtnVerMais/>
        </div>      
      </MuralComunidadeDiv>

    )
}