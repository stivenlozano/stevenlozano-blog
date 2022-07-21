import React from "react"
import './styled.css'
import { IPost } from "../../../store/posts"

interface IProps {
  data: IPost,
  index: number,
  display?: string,
  onClick: (id: string) => void,
} 

const PostCard: React.FC<IProps> = ({ display, data, index, onClick }) => {
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

export default PostCard