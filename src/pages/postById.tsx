import React, {useEffect} from "react"
import { Header, Footer  } from '../components/molecules'
import { PostSummary } from '../components/organisms'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostByIdAction, fetchCommentsByIdAction } from "../store/posts"
import {PATHS} from "../constants"
import {auth} from "../firebase"
import Layout from "../components/templates/Layout"
import {showFormAction} from "../store/forms"
import { useNavigate } from 'react-router-dom'

const PostsById: React.FC = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postSelected = useSelector((state: any) => state.posts.postSelected)
  const postComments = useSelector((state: any) => state.posts.postComments)

  const userLogin = useSelector((state: any) => state.users.userLogin)
  const allUsers = useSelector((state: any) => state.users.allUsers)
  const postsByUser = useSelector((state: any) => state.posts.postsByUser)


  useEffect( () => {
    dispatch(fetchPostByIdAction(id))
    dispatch(fetchCommentsByIdAction(id))
  }, [dispatch, id])

  const handleSignIn = () => {
    dispatch(showFormAction(true))
    navigate(PATHS.POSTS)
  }

  return (
    <div className="wrapper">
      <Layout 
        isLogin={!!auth.currentUser} 
        user={userLogin} 
        onSignIn={handleSignIn} 
        onSignOut={() => auth.signOut().then(() => navigate(PATHS.BASE)) }
      >

      <PostSummary data={postSelected} comments={postComments}/>

      </Layout>
    </div>
  )
}

export default PostsById;