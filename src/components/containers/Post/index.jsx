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

                        <div className="title-comentarios">
                            <p>0 Comentários</p>
                            <div>
                                <span>Classificado por:</span>
                                <select name="ordem-comentario" id="ordem-comentario">
                                    <option value="antigos">Mais Antigos</option>
                                    <option value="recentes">Mais Recentes</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="create-comentario">

                        </div>
                        
                        <div className="create-comentario-fb">

                        </div>

                        <div className="mais-voce-sabia">

                        </div>

                    </div>
                    <div className="right">
                        
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