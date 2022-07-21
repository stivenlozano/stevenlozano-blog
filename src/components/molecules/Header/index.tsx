import React from "react"
import './styled.css'
import { Link } from "react-router-dom"
import { BsDoorOpenFill } from "react-icons/bs"

interface IProps {
  userLogin: boolean,
  userImage: string,
  userName: string,
  onSignIn?: () => void,
  onSignOut?: () => void,
}

const Header: React.FC<IProps> = ({ userLogin, userImage, userName, onSignIn, onSignOut }) => {
  return (
    <header className="header">
      <img className="header-logo" src="https://static.wixstatic.com/media/8d71f3_9d56ad82a0c84cccbf8f246deb6f3876~mv2.png/v1/fill/w_396,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Pet%20Shop-02.png" alt="Logo App" />

      <nav className="header-nav">
        <Link to="/posts">Blog</Link>
        { !!userLogin && <Link to="/myPosts">Mis Posts</Link> }
        { !userLogin && <button onClick={onSignIn}>Iniciar Sesión</button> }
        
        { !!userLogin && (
          <div className="header-nav__user">
            <img src={userImage} alt="User logged in" />
            <div>
              <p>Bienvenido</p>
              <p>{userName}</p>
            </div>
          </div>
        )}

      { !!userLogin && <BsDoorOpenFill size={22} color={'rgba(255 84 114 / 100%)'} cursor='pointer' onClick={onSignOut}/> }
      </nav>
    </header>
  )
}

export default Header