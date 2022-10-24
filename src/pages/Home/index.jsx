import {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MCadastro from './ModalCadastro/index'
import BtnFlip from '../../components/BtnFlip'
import LiPerguntas from '../../components/LiPerguntas'
import Modal from '../../components/modal'
import FuncionaCard from '../../components/FuncionaCards'
import InputMask from 'react-input-mask'
import NewSletterDiv from '../../components/NewSletter'

import {BannerDiv, BannerTwo, UltimasDiv, ComoFuncionaDiv,
 PerguntasDiv, IndicarBannerDiv,RestInfoDiv, ParticiparDiv,
 MuralComunidade, PaticiparComunidade, OutrosDiv, ModerarDiv,
 BlogDiv, SerieVoce} from './homeStyled'

import Email from '../../components/emailAutocompletee'
import ModalError from '../../components/modalError'

import BtnDefault from '../../components/BtnDefault'


import {BsFillShareFill} from 'react-icons/bs'
import {RiUserUnfollowFill, RiArrowDownSFill} from 'react-icons/ri'
import {VscDebugStackframeDot} from 'react-icons/vsc'
import {MdReportProblem} from 'react-icons/md'
import {HiUserCircle} from 'react-icons/hi'
import {FaShare} from 'react-icons/fa'
import {AiOutlineHeart, AiFillHeart, AiFillWechat, AiOutlineCloseCircle} from 'react-icons/ai'
import {IoMdThumbsUp} from 'react-icons/io'
import {GoVerified} from 'react-icons/go'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../contexts/auth'
import { useContext } from 'react'

export default function Home(){

  const { Login } = useContext(AuthContext)

  const [plataform, setPlataform] = useState('whatsapp')
  const [modalDescadastrar, setModalDescadastrar] = useState(false)
  const [modalReportar , setModalReportar] = useState(false)

  const [cadastrar, setCadastrar] = useState(false)
  const [formCadastro, setFormCadastro] = useState({})


  return (
      <>
        <Header />
          {cadastrar === true ? <MCadastro setCadastrar={setCadastrar} form={formCadastro}/> : null}
          {modalDescadastrar === true ? <Modal type={'descadastrar'} Modal={setModalDescadastrar}/> : null}
          {modalReportar === true ? <Modal type={'reportarError'} Modal={setModalReportar}/> : null}
          
          {/* container do alerta*/}
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

        {/* div banner */}
        <BannerDiv>
          <div className="banner">
            <div className='rpbanner'>
              <h1>QUER CONHECER FATOS CURIOSOS SOBRE O MUNDO ANIMAL?</h1>
              <button>[Entrar na comunidade]</button>
            </div>          
          </div>              
        </BannerDiv>

        <BannerTwo>
          <div className="main">
            <div className="card bg1">
              <div className='card-text'>
                <span>
                  Todos os dias, posts com curiosidades sobre os bichos que compartilham o mundo com a gente!
                </span>
              </div>
            </div>
            <div className="card bg2">
              <div className='card-text div-right'>
                <span>
                  Entre nos nossos grupos de "loucos por bichos" e receba o melhor conteúdo sobre o mundo animal
                </span>
              </div>
            </div>
            <div className="card bg3">
              <div className="cardleft">
                <p>Você escolhe onde quer receber nossos posts</p>
                <div className='groupnot'>
                  <img src="/image/hwpp.png" alt="logo wpp" className='logonot'/>
                  <img src="/image/htele.png" alt="logo telegram" className='logonot'/>
                  <img src="/image/email.png" alt="logo email" className='logonot'/>
                  <img src="/image/notification.png" alt="logo notification" className='logonot'/>
                </div>
              </div>
              <img src="/image/telzap.png" alt="imagem de um celular com o aplicativo wpp aberto"  className='telnot'/>
            </div>
          </div>
        </BannerTwo>

        <UltimasDiv>
          <div className="main">
            <h2 className='ultima-title'>Ultimas Enviadas</h2>
            <div className="containerPosts">
              <div className='show-cards'>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>

              </div>
              <img src="/image/banner-get.jpg" alt="banner para o site get"  className='banner-get'/>
            </div>
            <div className="containerPosts">
              <div className='show-cards'>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
              </div>
              <img src="/image/banner-get.jpg" alt="banner para o site get"  className='banner-get'/>
            </div>
            <div className="containerPosts">
              <div className='show-cards'>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
                <div className="card-post">
                  <p>24/03/2022 - 21:30h</p>
                  <h2>Escondidinho de carne seca</h2>
                  <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  </span>
                </div>
              </div>
              <img src="/image/banner-get.jpg" alt="banner para o site get"  className='banner-get'/>
            </div>
            <BtnDefault type='ver-mais'/>
          </div>
        </UltimasDiv>

        <ParticiparDiv>
          <div className="main">
            <h2>Sabe muito sobre o Mundo Animal?</h2>
            <div>
              <p>Participe da nossa comunidade e escreva no mural!</p>
              <p>Os melhores posts serão enviados para os mais de 100.000 membros da nossa comunidade!</p>
            </div>
            <BtnDefault type='participar'/>
          </div>
        </ParticiparDiv>

        <MuralComunidade>
          <div className="main">
            <h2 className='mural-title'>Mural da Comunidade</h2>

            <form className="create-post">
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
            
            <BtnDefault type='ver-mais'/>
          </div>      
        </MuralComunidade>


        <PaticiparComunidade>
          <div className="main">
            <a href="/"> Click para Participar</a>
          </div>
        </PaticiparComunidade>

        <OutrosDiv>
          <div className="main">
            <h2 className='outro-title'>Outros VCsabia</h2>

            <div className="container-cards">

              {/* fazer um componente de cards da apartitr da div cards-outros */}
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
              <div className="card-outros">
                <div className="card-top">
                  <img 
                    src="/image/vcsabia-human-body.png" 
                    alt="logo voce sabia" 
                  />
                  <div>
                    <p>24/03/2022 - 21:30H</p>
                    <h3>Escondidinho de carne seca titulo exemplo quebra</h3>
                  </div>
                </div>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting.
                </p>
              </div>
            </div>

            <BtnDefault type='ver-mais'/>
          </div>
        </OutrosDiv>

        <ModerarDiv>
          <div className="main">
            <div>
              <h1>Quer ser moderador do vcsabia.online?</h1>
              <a href="/">Clique aqui</a>
            </div>
          </div>
        </ModerarDiv>

        <ComoFuncionaDiv>
          <div className="funcionaMain">
            <div className='funcionaTop'>
                <h1>Como funciona o VCSABIA ONLINE?</h1>
                <p>para receber os posts, é só entrar no grupo de <a href="/">Whatsapp</a> ou <a href="/">Telegram</a> .</p>
                <p>Mas se você quiser colaborar com a comunidade e escrever posts que serão enviados para mais de <span>100.000 membros</span>, basta você seguir os <span>passos abaixo:</span></p>
            </div>
            <div className='funcionaBottom'>
                <FuncionaCard 
                img={"/image/step1.jpg"} 
                number={1} 
                text={'Cadastre seu nome e email, escolha um avatar e o seu apelido na comunidade'}
                />
                <FuncionaCard
                  img={'/image/step2.jpg'} 
                  number={2} 
                  text={'Escreva seu post no mural, indicando ao menos uma fonte onde possamos checar a informação;'}
                />
                <FuncionaCard
                  img={'/image/step3.jpg'} 
                  number={3} 
                  text={'Seu post será publicado no mural com o status de "não verificado". Após nossa equipe de editores conferir se as informações são verdadeiras, o status do post será alterado;'}
                />
                <FuncionaCard 
                  img={'/image/step4.jpg'} 
                  number={4} 
                  text={'Os melhores posts do mural serão enviados para a comunidade, através dos grupos de whats e telegram e demais redes sociais.'}
                />
            </div>
          </div>        
        </ComoFuncionaDiv>

        <PerguntasDiv>
          <div className="perguntasMain">
            <h1>Perguntas Frequentes</h1>
            <div className="perguntasContainer">
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
              <LiPerguntas>
                <h3>Punctuation conventions used in Chinese languages</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore</p>
              </LiPerguntas>
            </div>
          </div>
        </PerguntasDiv>

        <IndicarBannerDiv>
            <div className="main">
              <span>
                Indique seus amigos apaixonados pelo mundo animal
                Indicar Amigos para se juntarem ao nosso grupo!
              </span>
              <button>Indique Amigos <BsFillShareFill/></button>
            </div>
        </IndicarBannerDiv>

        <BlogDiv>
          <div className="main">
            <div className="title-main">
              <h1>Blog VCsabia.online</h1>
              <h2>
                <a href="/">
                  &#62;&#62; ver mais
                </a>
              </h2>
            </div>

            <div className="box-cards">
              <div className="card">
                  <p className='card-date'>24-03-2022</p>
                  <img src="/image/banner-index.jpg" alt="" />
                  <h3>Título do post exemplo</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</p>
              </div>
              <div className="card">
                  <p className='card-date'>24-03-2022</p>
                  <img src="/image/banner-index.jpg" alt="" />
                  <h3>Título do post exemplo</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</p>
              </div>
              <div className="card">
                  <p className='card-date'>24-03-2022</p>
                  <img src="/image/banner-index.jpg" alt="" />
                  <h3>Título do post exemplo</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</p>
              </div>
              <div className="card">
                  <p className='card-date'>24-03-2022</p>
                  <img src="/image/banner-index.jpg" alt="" />
                  <h3>Título do post exemplo</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.</p>
              </div>
            </div>
          </div>
        </BlogDiv>

        <SerieVoce>
          <div className="main">
            <h1>Série Vc Sabia?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h3>+ Saíba Mais</h3>
            <h3>Conheça nossas outras ferramentas:</h3>
            <div className="links">
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              <div className="link">
                <BtnFlip 
                  text={'/copadomundo'} 
                  color={'white'} 
                  secondColor={'#6225B5'}
                />
              </div>
              
            </div>
          </div>
        </SerieVoce>

        <RestInfoDiv>
          <div className="main">
            <div className="restTop">
              <div className="list">
                <span className='hiddenmenu baseColor'>Menu</span>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor hidden'/>
                  <BtnFlip 
                    className='textleft' 
                    text={'Quem somos'} 
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Termos de uso'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Anuncie'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Fale conosco'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Politica de privacidade'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  /> 
                </div> 
              </div>
              <div className="bot">
                <span className='baseFont baseColor'> Apoio:</span>
                <img src="/image/submarino.png" alt="logosubmarino" className='restLogo'/>
                <img src="/image/americanas.png" alt="logoamericanas" className='restLogo'/>
                <img src="/image/genera.png" alt="logogenera" className='restLogo'/>
              </div>
            </div>
            <div className="restBot">
              <div className='left'>
                <div onClick={()=>{setModalDescadastrar(true)}}>
                  <RiUserUnfollowFill className='lIcon baseColor'/>
                  <BtnFlip 
                    text={'descadastrar'}
                    color={'#6225B5'}
                  />
                </div>
                <div onClick={()=> setModalReportar(true)}>
                  <MdReportProblem className='lIcon baseColor'/>
                  <BtnFlip 
                    text={'reportar erro'}
                    color={'#6225B5'}
                  />
                </div>
              </div>

              <div className='right'>
                <span className='baseFont baseColor'>
                  compartilhe:
                </span>
                <div>
                  <img src="/image/whats-footer.svg" alt="wppicon" className='socialIcons'/>
                  <img src="/image/telegram-footer.svg" alt="telegramicon" className='socialIcons'/>
                  <img src="/image/insta-footer.svg" alt="instagramicon" className='socialIcons'/>
                  <img src="/image/face-footer.svg" alt="facebookicon" className='socialIcons'/>
                  <img src="/image/twitter-footer.svg" alt="twittericon" className='socialIcons'/>
                  <img src="/image/linkedin-footer.svg" alt="linkedinicon" className='socialIcons'/>
                </div>
              </div>
            </div>
          </div> 
        </RestInfoDiv>

        <Footer/>
        <NewSletterDiv/>
    </>
  )
}

