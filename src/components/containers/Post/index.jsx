import BtnVerMais from '../../BtnDefault/btnVermais'
import {PostDiv} from './styled'
import {useState, useEffect, useContext} from 'react'
import { ToastContainer } from 'react-toastify'
import Facebook from '../../Facebook'
import CommentsExample from '../../ComentFb'

export default function PostContainer({data}){
    console.log(data)

    let {
        post_web_tag_title,
        post_id,
        post_web_title,
        post_web_texto,
        post_data_time,
        post_imagem

    } = data[0]
    
    
    return (
        <PostDiv>
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
                <img 
                    src="/image/banner-get.jpg" 
                    alt=" banner de anuncio get"  
                    className='banner-get'
                />
                <div className="post-div">
                     
                        <div className="left">
                            <div className="navigation">
                                <li>
                                    <a href="/" className="links-navegation">
                                        Mundo animal
                                    </a>
                                    /
                                    <a href="/" className="links-navegation">
                                        data
                                    </a>
                                    /
                                    <a href={`/post/${data[0].post_id}`} className="links-navegation">
                                        {post_web_tag_title}
                                    </a>
                                </li>                  
                            </div>
                            <div className="content">
                                <h1>
                                    {post_web_tag_title}
                                </h1>
                                <p>
                                    {post_web_texto}
                                    {
                                        post_imagem ? <img src={`${process.env.REACT_APP_BIGDATE_URL}/imgpost/${post_imagem}`} alt="" /> : ''
                                    }
                                </p>
                            </div>
                            <div className="compartilhe">
                                <p>Compartilhe : </p>
                                <div>
                                    <img 
                                        src="/image/wtpp.png" 
                                        alt="img-whatsapp" 
                                        className='compartilhe-icon'
                                    />
                                    <img 
                                        src="/image/tlg.png" 
                                        alt="img-telegram" 
                                        className='compartilhe-icon'
                                    />
                                    <img 
                                        src="/image/fcb.png" 
                                        alt="img-facebook" 
                                        className='compartilhe-icon'
                                    />
                                    <img 
                                        src="/image/intg.png" 
                                        alt="img-instagram" 
                                        className='compartilhe-icon'
                                    />
                                    <img 
                                        src="/image/lkd.png" 
                                        alt="img-linkedin" 
                                        className='compartilhe-icon'
                                    />
                                    <img 
                                        src="/image/tt.png" 
                                        alt="img-twitter" 
                                        className='compartilhe-icon'
                                    />
                                </div>
                            </div>
                            <div className="tags">                            
                                    <p>TAG 1</p>                            
                                    <p>TAG 2</p>                            
                                    <p>TAG 3</p>                            
                                    <p>TAG 4</p>                            
                                    <p>TAG 5</p>                            
                                    <p>TAG 6</p>                            
                                    <p>TAG 7</p>                            
                                    <p>TAG 8</p>                            
                                    <p>TAG 9</p>
                            </div>                       
                                    {/* <Facebook/> */}
                                    <CommentsExample/>
                            <div className="mais-voce-sabia">
                                <h1>
                                    + VCSABIA / MUNDO ANIMAL
                                </h1>
                                <div className="caixa-cards">
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    <div href='/' className="cards">
                                        <p className="header"> 24-03-2020 <span>22h</span></p>
                                        <h2 className="title"> TITULO EXEMPLO</h2>
                                        <p className="caixatexto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                    
                                    
                                </div>
                            </div>

                        </div>
                    
                    <div className="right">
                        <div className="box-top">

                        </div>
                        <div className="more-posts-online">
                            <h1>+ VCSABIA ONLINE</h1>
                            <div className="posts">
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <div className="post">
                                    <a href="/">
                                        <div className="post-header">
                                            <img src="/image/fcb.png" alt="" />
                                            <div>
                                                <p>24/03/2022 - 21h30</p>
                                                <h3>Título Exemplo de duas em caixa baixa</h3>   
                                            </div>
                                        </div>
                                        <p className="text-bottom">
                                            texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo Exemplo de duas linhas em caixa baixa texto subtítulo...
                                    </p>
                                    </a>
                                </div>
                                <BtnVerMais className='btn-default'/>
                            </div>
                        </div>

                    </div>
                </div>
                <img 
                    src="/image/banner-get.jpg" 
                    alt=" banner de anuncio get"  
                    className='banner-get'
                />
            </div>        
        </PostDiv>
    )
}