import {BlogDiv} from './styled'

export default function Blog() {

    return (
        <BlogDiv >
        <div className="main" data-aos='fade-up'>
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

    )
}