import { useState, useRef} from 'react'
import './App.css'
import './globals.css'
import OrbitingCircles from './OrbitingCircles';
import CenterCard from './CenterCard';
import NavBar from './NavBar';
import BottomBar from './BottomBar';
import Links from './Links';
import FirstPageContent from './FirstPageContent';

function App() {
  const [logoSelected, setLogoSelected] = useState(false)
  const [selectedPage, setSelectedPage] = useState('home')
  const orbitingCirclesRef = useRef(null)
  
  const onNavClick = (page) => {
    // when a page is selected, it is set here and it is passed to the FirstPageContent component
    const pageName = page.target.innerText.toLowerCase()
    setSelectedPage(pageName)
  }

  const handleLogoClick = () => {
    setLogoSelected(false) // TODO: change to true once done!
  }

  /* upper part of the website */
  const navbar = <NavBar onNavClick={onNavClick}/>

  /* left part of the website */
  const sidebar = (
    <div className='sidebar'>
      <div className="center-card-content">
        <CenterCard onClick={handleLogoClick} isTreeNode={logoSelected} mainPageRef={orbitingCirclesRef}/>
      </div>
      <div className="links-content">
        <Links/>
      </div>
    </div>
  )


  const bottomBar = <BottomBar/>

  return (
      <div className="app-container">
      <div className="top-bar"> {navbar} </div>
      <div className="content-container" id="content">
          <div className="orbit-and-sidebar">
            <OrbitingCircles ref={orbitingCirclesRef} active={logoSelected} />
            {!logoSelected && sidebar}
          </div>
          {!logoSelected && <FirstPageContent selectedPage={selectedPage}/>}
        </div>
      <div className="bottom-bar-container">
        {bottomBar}
      </div>
      </div>
  )
}

export default App
