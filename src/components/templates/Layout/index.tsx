import React from "react";
import {Footer, Header} from "../../molecules";
import './styled.css'

interface IProps {
  user: any,
  isLogin: boolean,
  children: React.ReactNode,
  onSignIn: () => void,
  onSignOut: () => void,
}

const Layout: React.FC<IProps>  = ({ user, isLogin, children, onSignIn, onSignOut }) => {
  return (
    <div className="wrapper">
      <Header 
        userLogin={isLogin} 
        userName={`${user?.firstName} ${user?.lastName}`} 
        userImage={user?.picture}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
      />
      
      {children}

      <Footer/>
    </div>
  )
}

export default Layout;
