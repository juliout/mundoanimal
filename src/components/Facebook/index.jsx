import { useEffect } from "react";


export default function Facebook({id}) {

    useEffect(()=>{
        const w = window.FB;
        w.XFBML.parse();
      },[])

    return (
        
        <div 
            id='fb-root'
            className="fb-comments" 
            data-width="100%" data-numposts="5"
            loading="lazy"
        />                            
    )
}