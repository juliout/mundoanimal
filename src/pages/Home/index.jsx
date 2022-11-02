import {useEffect, useState, useContext} from 'react'
//containers da pagina 
import Header from '../../components/containers/Header'
import BannerDiv from '../../components/containers/Banner'
import BannerTwo from '../../components/containers/BannerTwo'
import Ultimas from '../../components/containers/Ultimas'
import Participar from '../../components/containers/Participar'
import MuralComunidade from '../../components/containers/MuralComunidade'
import ParticiparComu from '../../components/containers/ParticiparComu'
import Outros from '../../components/containers/Outros'
import Moderar from '../../components/containers/Moderar'
import ComoFunciona from '../../components/containers/ComoFunciona'
import Perguntas from '../../components/containers/Perguntas'
import Indicar from '../../components/containers/Indicar'
import Blog from '../../components/containers/Blog'
import SerieVoce from '../../components/containers/SerieVoce'
import RestInfo from '../../components/containers/RestInfo'
import Footer from '../../components/containers/Footer'
import NewSletterDiv from '../../components/containers/NewSletter'
//modais e alerts
import MCadastro from '../../components/modais/ModalCadastro/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//copntext
import { AuthContext } from '../../contexts/auth'
import ShareS from '../../components/SessionShare'
import NotificationButtom from '../../components/NotificationButtom'
import MLogin from '../../components/modais/ModalLogin'


export default function Home(){
  const {cadastrar, setCadastrar, logar, setLogar} = useContext(AuthContext)
  return (
      <>
        <Header />
          {logar ? <MLogin/>:null}
          {cadastrar ? <MCadastro setCadastrar={setCadastrar}/> : null}
          {/* container do alerta*/}
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

        {/* div banner */}
        <BannerDiv/>
        <BannerTwo/>
        <Ultimas/>
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
        <NewSletterDiv/>
        <ShareS/>
        <NotificationButtom/>
    </>
  )
}

