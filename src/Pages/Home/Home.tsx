import { useEffect, useState } from "react" 
import { useLanguage } from "../../context/languageContext"
import "./home.css"

const Home = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [visible, setVisible] = useState(0)
  const [lang, setLang] = useState<string>()

  useEffect(() => {
    setTimeout(() => {
      setVisible(1)      
    }, 1);   
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth) 
    }
    window.addEventListener("resize", handleResize);
    handleResize();  
    return () => window.removeEventListener("resize", handleResize);
  }, [])
  
  const { language } = useLanguage();
  useEffect(() => {
    setLang(language)    
  }, [language])

  return (
    <main className="divContainer" id="home" style={{opacity: `${visible}`}}>        
      <div>
        {lang === "esp"
        ?         
          <> 
            {windowSize < 576
              ?
                <div>                  
                  <h1 className='h1'>DESARROLLADOR</h1>
                  <h1 className='h1'>WEB Y</h1>
                  <h1 className='h1'><span>D</span>ISEÑADOR </h1>
                  <h1 className='h1 text-end'><span>G</span>RAFICO DE</h1>
                  <h1 className='h1 text-center'>CORDOBA,</h1>
                  <h1 className='h1'> ARGENTINA.</h1>
                </div>
              : 
                <div>
                  <h1 className='h1'>DESARROLLADOR WEB</h1>
                  <h1 className='h1 text-end'>Y <span>D</span>ISEÑADOR <span>G</span>RAFICO</h1>
                  <h1 className='h1 text-center'>DE CORDOBA,</h1>
                  <h1 className='h1'> ARGENTINA.</h1>
                </div>
            }        
            <p className="mainText">Hola! Mi nombre es Eneas.</p>
            <p className="mainText">Soy desarrollador Web, diseñador gráfico y Arquitecto.</p>
            <p className="mainText">Actualmente me encuentro trabajando como desarrollador freelance</p>   
          </>
        :
          <> 
            {windowSize < 576
              ? 
                <div>
                  <h1 className='h1'>WEB DEVELOPER </h1>
                  <h1 className='h1'>& <span>G</span>RAPHIC</h1>
                  <h1 className='h1 text-end'><span>D</span>ESIGNER FROM</h1>                  
                  <h1 className='h1 text-end'>CORDOBA,</h1>
                  <h1 className='h1'>ARGENTINA.</h1>
                </div>  
              :
                <div>
                  <h1 className='h1'>WEB DEVELOPER </h1>
                  <h1 className='h1 text-end'>& <span>G</span>RAPHIC <span>D</span>ESIGNER</h1>
                  <h1 className='h1 text-center'>BASED IN CORDOBA,</h1>
                  <h1 className='h1'>ARGENTINA.</h1>
                </div>  
            }     
            <p className="mainText">Hi! I am Eneas.</p>
            <p className="mainText">I am a Web Developer, grapgic designer and Architect.</p>
            <p className="mainText">Currently working as a freelance developer</p>   
          </>
      }
      </div>      
    </main>
  )
}

export default Home