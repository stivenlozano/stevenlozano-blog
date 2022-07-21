import React, {useEffect} from "react"
import { Header, Background, Footer  } from '../components/molecules'
import { PostList } from '../components/organisms'
import {fetchPostsAction} from "../store/posts"
import { useDispatch, useSelector } from 'react-redux'

const Posts: React.FC = () => {
  const dispatch = useDispatch()

  const display = useSelector((state: any) => state.posts.display)
  const allPosts = useSelector((state: any) => state.posts.allPosts)
  
  useEffect( () => {
    dispatch(fetchPostsAction(0))
  }, [])

  return (
    <div className="wrapper">
      <Header 
        userLogin={false} 
        userName={'Steven Lozano'} 
        userImage={'https://randomuser.me/api/portraits/women/58.jpg'}
        onSignIn={() => null}
        onSignOut={() => null}
      />

      <Background/>

      <PostList 
        display={display} 
        tags={['dog', 'canine', 'snow']} 
        posts={allPosts} 
        onClickDisplay={() => null} 
        onClickShowMore={() => null}
        onClickTag={() => null}
        onClickPost={() => null}
      />

      <Footer/>
    </div>
  )
}

export default Posts;