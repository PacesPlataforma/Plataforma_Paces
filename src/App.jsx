import { Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Sementinha from "./Components/Sementinha"
import TelaIncial from "./Components/TelaInicial"
import SelecaoPacotes from "./Components/SelecaoPacotes"
import Profissionais from './Components/Profissionais'
import Exercicio from './Components/Exercicios'
import MemoryGame from './Components/MemoryGame'
import ExpressionMirror from './Components/ExpressionMirror'
import GTranslate from './Components/GTranslate'
import Girassol from './Components/Girassol'
import Login from './Components/Login/Login.jsx'
import SobreNos from './Components/SobreNos.jsx'
import FooterPaces from './Components/FooterPaces.jsx'



function App(){
    return( 
        <>
    
     <BrowserRouter>
        <Routes>
            <Route path='/TelaInicial' element={ <div><TelaIncial/>      <FooterPaces/></div>}/>
            <Route path='/' element={ <div><TelaIncial/> <FooterPaces/></div>}/>
            <Route path='/Sementinha' element={<div><Sementinha/><FooterPaces/></div>}/>
            <Route path='/SelecaoPacotes' element={<div> <SelecaoPacotes/><FooterPaces/></div>}/>
            <Route path='/Profissionais' element={<div><Profissionais/><FooterPaces/></div>}/>
            <Route path='/Exercicio' element={<div><Exercicio/><FooterPaces/></div>}/>
            <Route path='/MemoryGame' element={<MemoryGame/>}/>
            <Route path='/ExpressionMirror' element={<ExpressionMirror/>}/>
            <Route path='/Girassol' element={<div><Girassol/><FooterPaces/></div>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SobreNos' element={<div><SobreNos/></div>}/>
        </Routes>
     </BrowserRouter>
     <GTranslate/>
        </>
    )   
}

export default App