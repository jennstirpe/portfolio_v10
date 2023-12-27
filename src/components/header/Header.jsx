import './Header.css'
import NavBar from '../navbar/NavBar'

export default function Header() {
  return (
    <header>
      <NavBar />
        <div className="header__content">
            <h1 className="header__name">Jennifer Stirpe</h1>
            <span className="header__title">Frontend Developer</span>
        </div>
    </header>
  )
}
