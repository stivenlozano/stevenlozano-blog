import React, {useEffect, useState} from "react"
import './styled.css'
import { IPost } from "../../../store/posts"
import { Filters, PostCard } from '../../molecules'

interface IPosts {
  data: IPost[],
}

interface IProps {
  display?: string,
  tags?: string[],
  posts: IPosts[],
  filters?: boolean,
  onClickDisplay?: (value: string) => void, 
  onClickShowMore?: () => void, 
  onClickTag?: (value: string) => void, 
  onClickPost: (value: string) => void, 
}

const PostList: React.FC<IProps> = ({ display, tags,  posts, filters, onClickDisplay, onClickShowMore, onClickTag, onClickPost }) => {
  const [postsFiltered, setPostFilteres] = useState<IPosts[]>([])

  useEffect(() => {
    setPostFilteres(posts)
  }, [posts])

  const handleSearch = (value: string) => {
    // const text = value.toLowerCase().trim()
    // const data = posts.filter((post: IPost) => post.text.toLowerCase().includes(text) || post.tags.some((tag: string) => tag.includes(text)))
    // setPostFilteres(data)
  }

  return (
    <main id="content-main" className="content">
      { !!filters && <Filters tags={tags} onClick={onClickDisplay} onChange={handleSearch} onClickTag={onClickTag}/> }

        {
          postsFiltered.map((postsByPage: IPosts, index: number) => 
            <section key={index.toString()} className={`content-posts 
              ${ display === 'grid' && 'display-grid'}
              ${ display === 'list' && 'display-list'}
            `}>
              { postsByPage.data?.map((post: IPost, index: number) => 
                <PostCard 
                  key={index.toString()} 
                  display={display} 
                  data={post} 
                  index={index} 
                  onClick={(id: string) => onClickPost(id)}
                />) }
            </section>
          )
        }
      

      { !!filters && <button className="btn-show-more" onClick={onClickShowMore}>Mostrar Más</button> }
    </main>
  )
}

export default PostList