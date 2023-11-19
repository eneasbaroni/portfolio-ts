import "./footer.css"
import {useLanguage} from "../../context/languageContext"



const Footer = () => {  
  
  const { handleLanguage } = useLanguage();
  
  return (
    <footer className="footer">

      
          <>
            <div className="navbarContainer">
              
                  <p className="navItem">Design and development by Eneas Baroni</p>
                
                  <>
                    <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                    <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
                    <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
                  </>
              
            </div>        
            <div className="langContainer">
              {/* Verificar si handleLanguage está definido antes de usarlo */}
              {handleLanguage && (
                <>
                  <div className="languageSelector" onClick={() => handleLanguage("eng")}>EN</div>
                  <div className="languageSelector">/</div>
                  <div className="languageSelector"onClick={() => handleLanguage("esp")}>ES</div>
                </>
                )}
            </div>
          </>           

    </footer>
  )
}

export default Footer
