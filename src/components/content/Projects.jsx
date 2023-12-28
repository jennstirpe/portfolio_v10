import { useState } from 'react'
import './Projects.css'
import projects from '../../projects.json'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  //Get active project's details
  const project = projects.find(project => project.id == activeProject);

  return (
    <section className="projects">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects__content">
          <ul className="projects__list">
            {
              projects.map(project => {
                return (
                  <li className={project.id == activeProject ? "projects__list-item activeProject" : "projects__list-item"} key={project.id}>
                    <button onClick={() => setActiveProject(project.id)} className="projects__list-item-btn">
                      {project.name}
                    </button>
                  </li>)
              })
            }
          </ul>
          <div className="project__card">
            
            <div className="project__content">
              
              <div className="project__imgs">
                <div className="img img-1"></div>
                <div className="img img-2"></div>
                <div className="img img-3"></div>
              </div>

              <div className="project__desc-main">
                <h3 className="project__name">{project.name}</h3>
                <p className="project__tech">{project.tech}</p>
                <p className="project__desc">{project.mainDesc}</p>
                <div className="project__links">
                  <a href={project.link} className="project__link" aria-label="Live project"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>
                  <a href={project.github} className="project__link" aria-label="GitHub repository"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#454545" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                </div>
              </div>
              
              <p className="project__details">{project.detailsDesc}</p>

            </div>
          
          </div>
        </div>
    </section>
  )
}
