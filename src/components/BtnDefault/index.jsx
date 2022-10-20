
import { useEffect, useState } from 'react'
import './style.css'


export default function BtnDefault({type}) {

    const VerMais = () => {
        return (
            <button className='post-vermais-btn'>Ver mais</button>
        )
    }

    const Participar = () => {
        return (
            <button className='participar-btn'>Participar</button>
        )
    }

    return (
        <>
            {type==='ver-mais' ? <VerMais/> : type === 'participar' ? <Participar/> : null }
        </>
    )
        
    
}