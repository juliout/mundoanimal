import { useState } from 'react'

import {RestInfoDiv} from './styled'
import BtnFlip from '../../BtnFlip'
import Descadastrar from '../../modais/Descadastrar'
import ReportError from '../../modais/report'

import {VscDebugStackframeDot} from 'react-icons/vsc'
import {RiUserUnfollowFill} from 'react-icons/ri'
import {MdReportProblem} from 'react-icons/md'

export default function RestInfo() {
    const [modalDescadastrar, setModalDescadastrar] = useState(false)
    const [modalReportar , setModalReportar] = useState(false)

    async function OpenModal(e, component) {
      e.preventDefault()
      if(component === 'descadastrar'){
        setModalDescadastrar(true)
      }else if (component === 'reportError'){
        setModalReportar(true)
      }
    }


    return (
        <RestInfoDiv>

          {modalDescadastrar ? <Descadastrar 
           modalClose={setModalDescadastrar}
           colorBg={'#0C3900'}
          /> : null}
          {modalReportar ? <ReportError 
            modalClose={setModalReportar}
            colorBg={'#0C3900'}
          /> : null}


          <div className="main">
            <div className="restTop" data-aos='fade-left'>
              <div className="list">
                <span className='hiddenmenu baseColor'>Menu</span>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor hidden'/>
                  <BtnFlip 
                    className='textleft' 
                    text={'Quem somos'} 
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Termos de uso'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Anuncie'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Fale conosco'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  />
                </div>
                <div className='divLeft'>
                  <VscDebugStackframeDot className='baseColor point'/>
                  <BtnFlip 
                    text={'Politica de privacidade'}
                    color={'#6225B5'}
                    secondColor={'black'}
                  /> 
                </div> 
              </div>
              <div className="bot">
                <span className='baseFont baseColor'> Apoio:</span>
                <img src="/image/submarino.png" alt="logosubmarino" className='restLogo'/>
                <img src="/image/americanas.png" alt="logoamericanas" className='restLogo'/>
                <img src="/image/genera.png" alt="logogenera" className='restLogo'/>
              </div>
            </div>
            <div className="restBot" data-aos='fade-right'>
              <div className='left'>
                <div onClick={(e)=>{OpenModal(e,'descadastrar')}}>
                  <RiUserUnfollowFill className='lIcon baseColor'/>
                  <BtnFlip 
                    text={'descadastrar'}
                    color={'#6225B5'}
                  />
                </div>
                <div onClick={(e)=>{OpenModal(e, 'reportError')} }>
                  <MdReportProblem className='lIcon baseColor'/>
                  <BtnFlip 
                    text={'reportar erro'}
                    color={'#6225B5'}
                  />
                </div>
              </div>

              <div className='right'>
                <span className='baseFont baseColor'>
                  compartilhe:
                </span>
                <div>
                  <img src="/image/whats-footer.svg" alt="wppicon" className='socialIcons'/>
                  <img src="/image/telegram-footer.svg" alt="telegramicon" className='socialIcons'/>
                  <img src="/image/insta-footer.svg" alt="instagramicon" className='socialIcons'/>
                  <img src="/image/face-footer.svg" alt="facebookicon" className='socialIcons'/>
                  <img src="/image/twitter-footer.svg" alt="twittericon" className='socialIcons'/>
                  <img src="/image/linkedin-footer.svg" alt="linkedinicon" className='socialIcons'/>
                </div>
              </div>
            </div>
          </div> 
        </RestInfoDiv>
    )
}