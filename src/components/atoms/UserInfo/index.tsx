import React from "react"
import './styled.css'

interface IProps {
  image?: string,
  title?: string,
  text?: string,
}

const UserInfo: React.FC<IProps> = ({ image, title, text }) => {
  return (
    <div className="user-info">
      <img className="user-info__img" src={image} alt="User logged in" />
      <div>
        <p className="user-info__title">{title}</p>
        <p className="user-info__text">{text}</p>
      </div>
    </div>
  )
}

export default UserInfo