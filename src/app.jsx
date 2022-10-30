import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Aos from "aos";
import 'aos/dist/aos.css'
export default function App() {
  useEffect(()=>{
    Aos.init({
      duration: 1000
    })
  },[])

  return (
    <AppRoutes/>    
  );
  }
