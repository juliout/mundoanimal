import BtnVerMais from '../../BtnDefault/btnVermais'
import {PostDiv} from './styled'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ApiPrivate } from '../../../api'
import ModalError from '../../modalError'



export default function Post(){
    const {idpost} = useParams()
    const [post, setPost] = useState('')


    useEffect(()=> {

        async function findAdmPost() {
            try {
                await ApiPrivate.get(`/posts/${idpost}`)
                .then(response=> {
                    console.log(response.data)
                    setPost(response.data)
                })
                .catch(error => {
                    throw new Error(error)
                })
            } catch (error) {
                return ModalError(error)
            }
        }
        findAdmPost()
    },[])


    if (post) {
        var {
            post_web_tag_title,
            post_id,
            post_web_title,
            post_web_texto,
            post_data_time,
            post_imagem
    
        } = post[0]
    }
    
    useEffect(()=>{ 
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v15.0" nonce="YitMizt5"></script>
    },[])

    return (
        <PostDiv>
           
            <div className="main">
                <img 
                    src="/image/banner-get.jpg" 
                    alt=" banner de anuncio get"  
                    className='banner-get'
                />
                <div className="post-div">
                    {post ? 
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
                                    {post ? <a href={`/post/${post[0].post_id}/${post[0].post_web_title}`} className="links-navegation">
                                        {post_web_tag_title}
                                    </a> : ' '}
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
                            
                            <div className="create-comentario" id="fb-root">
                            <div className="fb-comments" data-href={`https://mundoanimal.vercel.app/post/${idpost}/${post_web_title}`} data-width="600" data-numposts="5"></div>                                          
                            </div>

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
                    
                    : null}
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