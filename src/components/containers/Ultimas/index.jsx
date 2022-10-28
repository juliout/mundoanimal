import {UltimasDiv} from './styled'
import BtnVerMais from '../../BtnDefault/btnVermais'

import {data} from '../../array'
import { useEffect, useState, useContext } from 'react'
import { Divisor } from '../../../functions/DivisorArray'
import ContainerPosts from '../../ContainerPosts'
import {AuthContext} from '../../../contexts/auth'
import EntrarGrupo from '../../modais/EntrarGrupo'

export default function Ultimas() {

  const {typeG, typeClick, EntrarG, setEntrarG} = useContext(AuthContext)

  const [dados, setDados] = useState('')
  const [baseDados, setBaseDados] = useState('')
  const [contador, setContador] = useState(3)

  function add () {
    console.log(contador)
    setContador(contador+1)
    console.log(contador)
    if(contador <= baseDados.length) {
      setDados(baseDados.slice(0, contador))
    }else {
      typeClick('whatsapp')
      setEntrarG(true)
    }
    
  }

  useEffect( ()=>{
    const x = Divisor(data, 9)
    setDados(x.slice(0, contador)) 
    setBaseDados(x)
    setContador(contador+1)
  },[])
  
  return (
      <UltimasDiv data-aos="fade-up">
      <div className="main">
        <h2 className='ultima-title'>Ultimas Enviadas</h2>
        <div className="containerPosts">    
            {
             dados ? dados.map((dado, index)=>{
              return (
                  <ContainerPosts data={dado} key={index}/>
              )
             }) : null
            }
        </div>
       <BtnVerMais onClick={()=> add()} />
      </div>
      {EntrarG? <EntrarGrupo type={typeG} EParticipe={setEntrarG}/> : null}
    </UltimasDiv>

  )
}