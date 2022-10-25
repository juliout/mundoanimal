
import { useEffect, useState } from 'react'
import './style.css'


export default function BtnDefault({type, className}) {

    const VerMais = () => {
        return (
            <button className={`post-vermais-btn ${className}`}>Ver mais</button>
        )
    }

    const Participar = () => {
        return (
            <button className={`participar-btn ${className}`  }>Participar</button>
        )
    }

    return (
        <>
            {type==='ver-mais' ? <VerMais/> : type === 'participar' ? <Participar/> : null }
        </>
    )
        
    
}