import React from "react"
import './styled.css'

interface IProps {
  owner: string,
  title: string,
  text: string,
}

const Comment: React.FC<IProps> = ({ owner, title, text }) => {
  return (
    <div className="post-comment">
      <img className="post-comment__owner" src={owner} alt="Comment Owner" />

      <div className="post-comment__content">
        <p className="post-comment__content-title">{title}</p>
        <p className="post-comment__content-text">{text}</p>
      </div>
    </div>
  )
}

export default Comment