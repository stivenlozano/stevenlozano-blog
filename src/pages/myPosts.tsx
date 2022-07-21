import React, {useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PATHS } from "../constants"
import {showFormAction} from "../store/forms"
import {auth} from "../firebase"
import Layout from "../components/templates/Layout"
import {fetchPostByUserAction} from "../store/posts"
import {PostList} from "../components/organisms"
import {registerSesionAction} from "../store/users"

const Posts: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state: any) => state.users.userLogin)
  const allUsers = useSelector((state: any) => state.users.allUsers)
  const postsByUser = useSelector((state: any) => state.posts.postsByUser)

  useEffect( () => {
    !auth.currentUser && navigate(PATHS.POSTS)

    dispatch(fetchPostByUserAction(userLogin?.id))
  }, [userLogin])

  useEffect( () => {    
    (async () => {
      if (!!auth.currentUser) {
        const email = String(auth.currentUser?.email)
        const tokenSesion = await auth.currentUser?.getIdToken()
  
        const userLogin = allUsers.find((user:any) => user.email === email)
        localStorage.setItem(email, JSON.stringify({ ...userLogin, tokenSesion}))

        dispatch(registerSesionAction(String(tokenSesion), userLogin))
      }
    })()
  }, [allUsers])

  const handleClickPost = (id: string) => navigate(`/post/${id}`)

  return (
    <Layout 
      isLogin={!!auth.currentUser} 
      user={userLogin} 
      onSignIn={() => dispatch(showFormAction(true))} 
      onSignOut={() => auth.signOut().then(() => navigate(PATHS.BASE)) }
    >

    <PostList 
      display={'list'} 
      posts={[{data: postsByUser}]} 
      onClickPost={handleClickPost}
    />

   </Layout>
  )
}

export default Posts;