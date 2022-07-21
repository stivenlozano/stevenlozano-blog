import React from "react"
import './styled.css'
import { IPost, IComment } from "../../../store/posts"
import { Comment } from '../../molecules'
import {UserInfo} from "../../atoms"

interface IProps {
  data: IPost,
  comments: IComment[],
}

const PostSummary: React.FC<IProps> = ({ data, comments }) => {
  return (
    <main className="content">
      <div className='content-post'>
        <img className='content-post__img' src={data?.image} alt={data?.text} />

        <div className='content-post__owner'>
          <UserInfo image={data?.owner?.picture} title={`${data?.owner?.firstName} ${data?.owner?.lastName}`} text={data?.publishDate}/>
        </div>

        <p className="content-post__text">{data?.text}</p>

        <div className="content-post__comments">
          { comments?.map((comment: IComment) => <Comment key={comment.id} owner={comment.owner.picture} title={`${comment.owner.firstName} ${comment.owner.lastName}`} text={comment.message}/> )}
        </div>
      </div>
    </main>
  )
}

export default PostSummary