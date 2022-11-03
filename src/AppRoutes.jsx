import { useContext } from 'react'
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from './contexts/auth'
// import Route from './routes/Route'
import Home from './pages/Home'
import PostPage from './pages/Post'
import Forum from './pages/forum/forum'

export default function AppRoutes() {
    const Private = ({children}) => {
        const {authenticated} = useContext(AuthContext)
        if (!authenticated){
            return <Navigate to='/'/>
        }
        return children
    }
    const Logado = ({children}) =>{
        const {authenticated} = useContext(AuthContext)
        if(authenticated) {
            return <Navigate to='/user/painel'/>
        }
        return children
    }

  return (
    
      <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/forum' element={<Forum/>}/>
                <Route  path='/post/:id/:name' element={<PostPage/>}/>
            </Routes>
        </AuthProvider>
      </BrowserRouter> 
     
  );
  }
