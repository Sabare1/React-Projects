import reactLogo from './assets/react.svg'
export default function Header(){
  return(
    <>
      <header className = "header">
        <img src={reactLogo} alt="react logo" className='react-logo'></img>
        <nav >
          <ul className="nav-list">
            <li className="items">Pricing</li>
            <li className="items">About</li>
            <li className="items">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}