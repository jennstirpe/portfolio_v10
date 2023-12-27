import './App.css'
import { Header, Projects, Contact, About } from './components/index'

function App() {

  return (
    <>
      <Header />
      <main>
        <Projects />
        <div className="subsection">
          <Contact />
          <About />
        </div>
      </main>
    </>
  )
}

export default App
