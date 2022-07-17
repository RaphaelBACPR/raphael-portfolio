import { DiPhp, DiHtml5, DiCss3, DiJsBadge, DiMysql, DiReact, DiSass } from 'react-icons/di'
import { SiMicrosoftexcel } from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'


const technologies = [
  {
    id: 'php', name: 'PHP', icon: <DiPhp />, infos: [
      { desc: 'MVC e OO' },
      { desc: 'Conhecimento em Laravel' },
      { desc: 'Conhecimento em desonvolvimento de APIs Rest' }
    ]
  },
  {
    id: 'html', name: 'HTML5', icon: <DiHtml5 />, infos: [
      { desc: 'HTML Semantico' },
      { desc: 'SEO' },
      { desc: 'Facilidade em conversão de Layout para HTML' }
    ]
  },
  {
    id: 'css', name: 'CSS', icon: <DiCss3 />, infos: [
      { desc: 'FlexBox, Grid e Animaçoes' },
      { desc: 'Bibliotecas: Bootstrap, Materialize' },
      { desc: 'Pré-compiladores: SASS' }
    ]
  },
  {
    id: 'js', name: 'JS', icon: <DiJsBadge />, infos: [
      { desc: 'ES7' },
      { desc: 'Manipulação de DOM' },
      { desc: 'Requisiçoes Ajax' }
    ]
  },
  {
    id: 'mysql', name: 'MYSQL', icon: <DiMysql />, infos: [
      { desc: 'Manipulaçao de BD' },
      { desc: 'Integraçao com API' },
      { desc: 'Queries otimizadas' }
    ]
  },
  {
    id: 'react', name: 'REACT ', icon: <DiReact />, infos: [
      { desc: 'Consumo de APIS' },
      { desc: 'SPA Componentizadas' },
      { desc: 'Integrações com servicços' }
    ]
  },
  {
    id: 'sass', name: 'SASS ', icon: <DiSass />, infos: [
      { desc: 'Mixins' },
      { desc: 'Variables' },
      { desc: 'Reaproveitamento de Codigo' }
    ]
  },
  {
    id: 'excel', name: 'EXCEL ', icon: <SiMicrosoftexcel />, infos: [
      { desc: 'Desenvolvimento de Dashborads' },
      { desc: 'Alto conhecimento em VBA' },
      { desc: 'Desnvolvimento de Aplicações' }
    ]
  }
]


const TechnologiesContainer = () => {
  return (
    <section className="tech-container">
      <h2>Tecnologias</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div className="tech-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech-info">
              <h3>{tech.name}</h3>
              <p>
                {tech.infos.map((info) => (
                  <div className="infos">
                    <li> - {info.desc}</li>  
                  </div>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer