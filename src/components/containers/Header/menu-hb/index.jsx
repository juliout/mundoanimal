import { useState } from 'react'
import QuemSomos from '../../../modais/QuemSomos'
import {MenuHb} from './styled'

export default function HbMenu ({openClose, quemSomos, faleConosco}) {

    async function hbModais(e, element){
        e.preventDefault()

        if(element === 'quem-somos'){
            return quemSomos(true)
        }else if (element === 'fale-conosco') {
            return faleConosco(true)
        }
    }
    return (
        <>
        <MenuHb close={openClose} >
            <nav data-aos='zoom-in'>
                <a href='*' onClick={(e)=> hbModais(e,'quem-somos')}>Quem Somos</a>
                <a href='/'>Como Funciona</a>
                <a href='/'>Blog</a>
                <a href='/'>Mural da Comunidade</a>
                <a href='/'>Termos de uso</a>
                <a href='*' onClick={(e)=> hbModais(e,'fale-conosco')}>Fale Conosco</a>
            </nav>
        </MenuHb>
        </>
    )
}