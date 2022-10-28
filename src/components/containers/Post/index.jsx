import BtnVerMais from '../../BtnDefault/btnVermais'
import {PostDiv} from './styled'


export default function Post(){
    return (
        <PostDiv>
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
                                <a href="/" className="links-navegation">
                                    Título
                                </a>
                            </li>                  
                        </div>
                        <div className="content">
                            <h1>
                                TÍTULO EXEMPLO CAIXA ALTA
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                            
                        <div className="create-comentario">
                                                                                                       
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