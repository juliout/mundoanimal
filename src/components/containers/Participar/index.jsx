import {ParticiparDiv} from './styled'
import BtnDefault from '../../BtnDefault'

export default function Participar() {
    return (
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

    )
}