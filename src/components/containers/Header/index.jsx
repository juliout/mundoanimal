import {HeaderDiv} from './headerStyled'
import { useState, useContext} from 'react'
import HbMenu from './menu-hb'
import QuemSomos from '../../modais/QuemSomos'
import FaleConosco from '../../modais/FaleConosco'
import { AuthContext } from '../../../contexts/auth'
import EntrarGrupo from '../../modais/EntrarGrupo'



// import { Link } from 'react-router-dom'
// import { useState, useContext, useEffect } from 'react'
// import { AuthContext } from '../../contexts/auth'

export default function Header({sendLogin}) {
    const [menu, setMenu] = useState(false)
    const [quem, setQuem] = useState(false)
    const [fale, setFale] = useState(false)

    const {typeG, typeClick, EntrarG, setEntrarG} = useContext(AuthContext)
  
    async function Openhb() {
        if(!menu) {
            setMenu(true)
        }else {
            setMenu(false)
        }
    }

    return (
        <>
        <HeaderDiv>
            <div className="main">
                <div className="container">
                    <HbMenu 
                        openClose={menu} 
                        faleConosco={setFale} 
                        quemSomos={setQuem}
                    />
                    <div className='btn-hb'>
                        <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" onClick={()=>{Openhb()}}/>
                        <label htmlFor="checkbox3">
                            <div className="hamburger hamburger3">
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                                <span className="bar bar4"></span>
                            </div>
                        </label>
                    </div>
                    <img src="/image/logo.png" alt="logo escrito mundo animal" className='hlogo' onClick={()=> window.location.replace('/')}/>
                    <div className='hicons'>
                        <span>Particiapar por:</span>
                        <div>
                            <img 
                                src="/image/hwpp.png" 
                                alt="logo com simbolo do wpp"
                                onClick={()=> {typeClick('whatsapp')}} 
                                />
                            <img 
                                src="/image/htele.png" 
                                alt="logo com simbolo do telegram" 
                                onClick={()=> {typeClick('telegram')}} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderDiv>
        {quem? <QuemSomos closeq={setQuem}/> : null}
        {fale? <FaleConosco closef={setFale}/> : null}
        {EntrarG ? <EntrarGrupo type={typeG} EParticipe={setEntrarG}/> : null}
        </>
    )
}