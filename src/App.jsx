
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import RegForm from './components/RegForm';
import Landing from './components/Landing';
import SoloNavBar from './components/SoloNavBar';
import NuevoAlbum from './components/NuevoAlbum';



function App() {
  
  return (

    <>
    <BrowserRouter>
    <SoloNavBar/>
    
    
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegForm/>}/>
      <Route path="/newalbum" element={<NuevoAlbum/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
