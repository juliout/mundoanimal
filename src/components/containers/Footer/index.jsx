import { FooterDiv } from './footerStyled'
import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
    return (
        <FooterDiv> 
            <div className="reservDiv">
                <h3>
                    vcsabia.online 2022                                         
                    <BiCopyright className='cIcon'/>
                    Todos os direitos reservados                   
                </h3>
            </div>
        </FooterDiv>
    )
}