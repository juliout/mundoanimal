import Blog from '../../components/containers/Blog'
import ComoFunciona from '../../components/containers/ComoFunciona'
import Footer from '../../components/containers/Footer'
import Header from '../../components/containers/Header'
import Indicar from '../../components/containers/Indicar'
import Moderar from '../../components/containers/Moderar'
import MuralComunidade from '../../components/containers/MuralComunidade'
import NewSletter from '../../components/containers/NewSletter'
import Outros from '../../components/containers/Outros'
import Participar from '../../components/containers/Participar'
import ParticiparComu from '../../components/containers/ParticiparComu'
import Perguntas from '../../components/containers/Perguntas'
import RestInfo from '../../components/containers/RestInfo'
import SerieVoce from '../../components/containers/SerieVoce'
import Post from '../../components/containers/Post'



export default function PostPage() {
    return(
        <>
            <Header/>
            <Post/>
            <Participar/>
            <MuralComunidade/>
            <ParticiparComu/>
            <Outros/>
            <Moderar/>
            <ComoFunciona/>
            <Perguntas/>
            <Indicar/>
            <Blog/>
            <SerieVoce/>
            <RestInfo/>
            <Footer/>
            <NewSletter/>
        </>
    )
}