import MuralComunidade from "../../components/containers/MuralComunidade"
import Header from "../../components/containers/Header"
import NewSletter from "../../components/containers/NewSletter"
import { useEffect, useState } from "react"
import { Api } from "../../api"
import './styled.css'
import Facebook from "../../components/Facebook"
import CommentsExample from "../../components/ComentFb"

export default function Forum() {

    const Coment = () => {
        return (
            <CommentsExample/>
        )
    }

    return (
        <>
            <Header/>
            <MuralComunidade className={'muralForum'}/>
            <NewSletter/>
        </>
    )
}