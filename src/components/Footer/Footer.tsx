import "./footer.css"
import { useLanguage } from "../../context/languageContext"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import useScreenSize from '../../hooks/useScreenSize'
import MobileFooter from "./MobileFooter"

interface LocationState { //especifico el tipado del useLocation
  pathname: string
}

const Footer = () => {
  const windowSize = useScreenSize()
  const [development, setDevelopment] = useState(false)
  console.log(development);

  const { handleLanguage } = useLanguage();

  const location: LocationState = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      setDevelopment(true)
    } else {
      setDevelopment(false)
    }
  }, [location])

  return (
    <footer className="footer">

      {windowSize.width > 576 ?
        <>
          <div className="navbarContainer">
            {development ?
              <p className="navItem">Design and development by Eneas Baroni</p> :

              <>
                <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
                <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
              </>}

          </div>

          <div className="navbarContainer">

            <p className="navItem">Design and development by Eneas Baroni</p>

            <>
              <a className="navItem" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGRAM</a>
              <a className="navItem" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer">GITHUB</a>
              <a className="navItem" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer">LINKEDIN</a>
            </>

          </div>
          <div className="langContainer">
            <div className="languageSelector" onClick={() => handleLanguage("eng")}>EN</div>
            <div className="languageSelector">/</div>
            <div className="languageSelector" onClick={() => handleLanguage("esp")}>ES</div>
          </div>
        </> :
        <MobileFooter/>
      }


    </footer>
  )
}

export default Footer
