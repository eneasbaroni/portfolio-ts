import { useEffect, useState } from 'react'
import { useLanguage } from "../../context/languageContext"
import "./contact.css"

const Contact = () => {
  const [visible, setVisible] = useState(0)  
  const [lang, setLang] = useState<string>()

  useEffect(() => {
    setTimeout(() => {
      setVisible(1)      
    }, 1);   
  }, [])

  const { language } = useLanguage();
  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <main className="divContainer contactContainer" id='mailme' style={{opacity: `${visible}`}}>
      <div className='projectMind'>
      {lang === "esp"
        ? 
          <>
            <p className='mainText'>Tenés algun proyecto en mente?</p>
            <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal"><h1 className='h1'>HABLEMOS!</h1></a>          
          </>
        :  
          <>
            <p className='mainText'>Hava a project in mind?</p>
            <a className='mailme' href="mailto:eneasbaroni@gmail.com?Subject=Contacto%20desde%20web%20personal"><h1 className='h1'>LET'S TALK!</h1></a>
          </>
      }
      </div>
        <a href="#medias" className='media'><p>↓</p></a>        
        <a href="#app" className='mailmeArrow' id='medias'><p>↑</p></a>        
      <div className='linksContainer'>
        <div>
          {lang === "esp"
            ? 
              <p className='mainText'>o puedes encontrame en las redes</p>
            :
              <p className='mainText'>or connect with me on socials</p>
          }
          
          <div><a className="mediaLink h1" href="https://www.linkedin.com/in/eneasbaroni" target="_blank" rel="noreferrer"><span>L</span>INKEDIN</a></div>
          <div><a className="mediaLink h1" href="https://wa.me/+5493512110423" target="_blank" rel="noreferrer">WHA<span>T</span>SAPP</a></div>
          <div><a className="mediaLink h1" href="https://github.com/eneasbaroni" target="_blank" rel="noreferrer"><span>G</span>ITHUB</a></div>
          <div><a className="mediaLink h1" href="https://www.instagram.com/mr_eneas/" target="_blank" rel="noreferrer">INSTAGR<span>A</span>M</a></div>
          {lang === "esp"
            ?
              <a className="cv" href="/docs/CV_BARONI_Eneas.pdf" target="_blank" rel="noreferrer" download>
                <p className='mainText'>Descargar CV</p>
                <p className='mainText'>=</p>
              </a>
            :
              <a className="cv" href="/docs/Resume_BARONI_Eneas.pdf" target="_blank" rel="noreferrer" download>
                <p className='mainText'>Download RESUME</p>
                <p className='mainText'>=</p>
              </a>
          }
        </div>
      </div>      
    </main>
  )
}

export default Contact
