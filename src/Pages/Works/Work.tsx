import { useEffect, useState } from "react"
import { useLanguage } from "../../context/languageContext"

interface Props {
  work: {
    title: string
    type: string
    description: string
    url: string
    web: string
    technologies: string[]
  }
  id: string
}

const Work: React.FC<Props> = ({work, id}) => {
  const [lang, setLang] = useState<string>()

  const { language } = useLanguage();
  useEffect(() => {
    setLang(language)    
  }, [language])

  return (

    <div className="work" style={{backgroundImage: `url(${work.url})`}}>      
      <a href={`${work.web}`} className="workLink"  target="_blank" rel="noreferrer">
          <h1 className="h2" id={id}>{work.title.toUpperCase()}</h1>
      </a>
      <div className="workInfo">
        <p className="workType">{work.type}</p>
        <p className="workDescription">{work.description}</p>
        {lang === "esp"
          ?<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ Visita el Proyecto</a>
          :<a className="workLink" href={`${work.web}`} target="_blank" rel="noreferrer">+ See the Project</a>
        }  
        <div className="techImg">
          {work.technologies.map((tech, index) => (
            <img key={index} src={`./images/technologies/${tech}.svg`} alt={tech} className="tech" />
          ))}            
        </div>
      </div>
    </div>   
    
  )
}

export default Work
