import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar'>
          <ul className='ul'>
            <li>
              <img
                className='pfp'
                height="20"
                width="20"
                src="./default_user.png"
                alt="your pfp"
              />
              <p className='username'>{user.name}</p>
            </li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
        :
        <nav className='navbar'>
          <ul className='ul'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
