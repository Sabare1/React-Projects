import chefIcon from '../assets/chef-claude-icon.png'
import '../App.css'

export default function Header(){
    return(
        <header className='header-container'>
            <img src={chefIcon} className='chef-icon'></img>
            <span><h1 id='logo-title'>Chef Claude</h1></span>
        </header>
    )
}