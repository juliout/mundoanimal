import {ComoFuncionaDiv} from './styled'
import FuncionaCard from '../../FuncionaCards'

export default function ComoFunciona() {
    return (
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

    )
}