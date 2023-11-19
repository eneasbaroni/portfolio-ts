import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import './App.css';

import Footer from './components/Footer/Footer';
import { LanguageProvider } from './context/languageContext';
/* import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';
import AppContainer from './components/AppContainer/AppContainer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'; */


/* import "./grid.css" */

function App() {  
  return (
    <LanguageProvider>
      <h1>HOLAAA</h1>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<h1>Borrar</h1>}/>
      </Routes>
        {/* <AppContainer>      
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </AppContainer> */}
      </BrowserRouter>      
      <Footer/>
    </LanguageProvider>
    
  );
}

export default App;
