import {UltimasDiv} from './styled'
import BtnVerMais from '../../BtnDefault/btnVermais'

import { useEffect, useState, useContext } from 'react'
import { Divisor } from '../../../functions/DivisorArray'
import ContainerPosts from '../../ContainerPosts'
import {AuthContext} from '../../../contexts/auth'
import ModalError from '../../modalError'
import { ApiPrivate } from '../../../api'

export default function Ultimas() {

  const {typeClick} = useContext(AuthContext)

  const [dados, setDados] = useState('')
  const [baseDados, setBaseDados] = useState('')
  const [contador, setContador] = useState(3)

  function add () {
    setContador(contador+1)
    if(contador <= baseDados.length) {
      setDados(baseDados.slice(0, contador))
    }else {
      typeClick('whatsapp')
    } 
  }
  
  useEffect( ()=>{

    const data = async () => {
      try {
        ApiPrivate.get('/postsPagina/mundoanimal')
        .then(response=> { 
          setarrays(response.data)
        })
        .catch(error=> {
          throw new Error(error.message)
        })
      } catch (error) {
        return ModalError(error.message)
      }
    }
    data()
    function setarrays(array){
      const x = Divisor(array, 9)
      setDados(x.slice(0, contador)) 
      setBaseDados(x)
      setContador(contador+1)
    }

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
    </UltimasDiv>

  )
}