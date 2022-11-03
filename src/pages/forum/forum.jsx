import MuralComunidade from "../../components/containers/MuralComunidade"
import Header from "../../components/containers/Header"
import NewSletter from "../../components/containers/NewSletter"
import './styled.css'

export default function Forum() {

    return (
        <>
            <Header/>
            <MuralComunidade className={'muralForum'}/>
            <NewSletter/>
        </>
    )
}