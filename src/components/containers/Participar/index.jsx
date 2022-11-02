import {ParticiparDiv} from './styled'
import BtnParticipar from '../../BtnDefault/btnParticipar'
import { useContext } from 'react'
import {AuthContext} from '../../../contexts/auth'


export default function Participar() {
  const {setLogar} = useContext(AuthContext)
  
    return (
        <ParticiparDiv>
        <div className="main">
          <h2>Sabe muito sobre o Mundo Animal?</h2>
          <div>
            <p>Participe da nossa comunidade e escreva no mural!</p>
            <p>Os melhores posts serão enviados para os mais de 100.000 membros da nossa comunidade!</p>
          </div>
          <BtnParticipar onClick={()=>setLogar(true)}/>
        </div>
      </ParticiparDiv>

    )
}