import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/languageContext';



interface MobileMenuProps {
    handleClose: () => void; // Esto indica que handleClose es una función que no devuelve ningún valor.
  }

const MobileMenu = ({handleClose}: MobileMenuProps) => {
    const [topPosition, setTopPosition] = useState("-100%")
    const { language } = useLanguage();
  const [lang, setLang] = useState<string>() 

  useEffect(() => {
    setLang(language)    
  }, [language])

  useEffect(() => {
    setTimeout(() => {
      setTopPosition("0")
    }, 100)
    
  }, [])

  const setCloseMobileMenu = () => {
    setTopPosition("-100%")
    setTimeout(() => {
      handleClose()
    }, 500)
  }


  return (
    <>
      {lang === "esp"
        ? 
          <div className="mobileNavbar" style={{top: topPosition}}> 
            <div className='mobileHeader'>
              <h3>Eneas Baroni ®</h3> 
              <h3 onClick={setCloseMobileMenu}>X</h3>       
            </div>
            <div className='mobileLinks'>
              <NavLink to="/"  className="navItem" onClick={setCloseMobileMenu}><span>I</span>nicio</NavLink>
              <NavLink to="/about"  className="navItem"  onClick={setCloseMobileMenu}>Sobre <span>M</span>i</NavLink>
              <NavLink to="/works"  className="navItem"  onClick={setCloseMobileMenu}><span>T</span>rabajos</NavLink>
              <NavLink to="/contact"  className="navItem" onClick={setCloseMobileMenu}>Contact<span>O</span></NavLink>
            </div>     
          </div>
        :
          <div className="mobileNavbar" style={{top: topPosition}}> 
            <div className='mobileHeader'>
              <h3>Eneas Baroni ®</h3> 
              <h3 onClick={setCloseMobileMenu}>X</h3>       
            </div>
            <div className='mobileLinks'>
              <h3 onClick={setCloseMobileMenu}>X</h3>                 
              <NavLink to="/"  className="navItem" onClick={setCloseMobileMenu} ><span>H</span>OME</NavLink>
              <NavLink to="/about"  className="navItem" onClick={setCloseMobileMenu}>AB<span>O</span>UT</NavLink>
              <NavLink to="/works"  className="navItem" onClick={setCloseMobileMenu}><span>W</span>ORKS</NavLink>
              <NavLink to="/contact"  className="navItem" onClick={setCloseMobileMenu}>CONTAC<span>T</span></NavLink>
            </div>   
          </div>
      }
    </>
  )
}

export default MobileMenu