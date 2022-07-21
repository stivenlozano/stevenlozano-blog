import React from "react"
import './styled.css'
import { IPost } from "../../../store/posts"
import { Link } from "react-router-dom"
import { UserInfo } from '../../atoms'

interface IProps {
  data: IPost,
  index: number,
  display: string,
  onClick: (id: string) => void,
} 

export const PostCard: React.FC<IProps> = ({ display, data, index, onClick }) => {
  const indexGrid = index > 19 ? index - 19 : index + 1

  return (
    <div key={indexGrid.toString()} className={`content-posts__item ${ display === 'grid' && `post--${indexGrid}` }`}>
      <img className="content-posts__item-img" src={data.image} alt={data.text} />

      <div className="content-posts__item-info">
        <p>{data.text}</p>

        <button onClick={() => onClick(data.id)}>Leer Post</button>
      </div>
    </div>
  )
}

export const PostCardDetail: React.FC<IPost> = ({ image, text, owner, publishDate }) => {
  return (
    <div className='content-post'>
      <img className='content-post__img' src={image} alt={text} />

      <div className='content-post__owner'>
        <UserInfo image={owner.picture} title={`${owner.firstName} ${owner.lastName}`} text={publishDate}/>
      </div>

      <p className="content-post__text">{text}</p>

      <div className="content-post__divider"></div>

      <div className="content-post__comment">
        <UserInfo image={owner.picture} title={`${owner.firstName} ${owner.lastName}`} text={publishDate}/>
      </div>
    </div>
  )
}