import {HeaderDiv} from './headerStyled'
import { GiHamburgerMenu, GiPadlock } from 'react-icons/gi'
import {FiEdit} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function Header({sendLogin}) {



    return (
        <HeaderDiv>
            <div className="main">
                <div className="container">
                    <GiHamburgerMenu className='hb'/>
                    <img src="/image/logo.png" alt="logo escrito mundo animal" className='hlogo'/>
                    <div className='hicons'>
                        <span>Particiapar por:</span>
                        <div>
                            <img src="/image/hwpp.png" alt="logo com simbolo do wpp" />
                            <img src="/image/htele.png" alt="logo com simbolo do telegram" />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderDiv>
    )
}