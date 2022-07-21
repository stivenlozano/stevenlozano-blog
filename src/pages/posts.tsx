import React, {useEffect} from "react"
import { Background } from '../components/molecules'
import { Form, PostList } from '../components/organisms'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostsAction, setDisplayPostsAction, setPagePostAction, setTagPostsAction } from "../store/posts"
import { PATHS } from "../constants"
import {clearFormAction, showFormAction, updateFormAction} from "../store/forms"
import {auth} from "../firebase"
import {VALIDATE_EMAIL} from "../constants/constants"
import {fetchUsersAction, registerSesionAction} from "../store/users"
import Layout from "../components/templates/Layout"

const Posts: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const allUsers = useSelector((state: any) => state.users.allUsers)
  const userLogin = useSelector((state: any) => state.users.userLogin)
  const templateForm = useSelector((state: any) => state.forms.loginForm)
  const typeForm = useSelector((state: any) => state.forms.typeForm)
  const showForm = useSelector((state: any) => state.forms.showForm)
  const display = useSelector((state: any) => state.posts.display)
  const allPosts = useSelector((state: any) => state.posts.allPosts)
  const tags = useSelector((state: any) => state.posts.tags)
  const tagSelected = useSelector((state: any) => state.posts.tagSelected)
  const page = useSelector((state: any) => state.posts.page)

  useEffect( () => {
    dispatch(fetchUsersAction())
    dispatch(fetchPostsAction(page, tagSelected))
  }, [])

  useEffect( () => {    
    ( async () => {
      if (!!auth.currentUser) {
        const email = String(auth.currentUser?.email)
        const tokenSesion = await auth.currentUser?.getIdToken()
  
        const userLogin = allUsers.find((user:any) => user.email === email)
        localStorage.setItem(email, JSON.stringify({ ...userLogin, tokenSesion}))

        dispatch(registerSesionAction(String(tokenSesion), userLogin))
      }
    })()
  }, [allUsers])

  const handleDisplay = (value: string) => dispatch(setDisplayPostsAction(value))
  
  const handleShowMore = () => {
    dispatch(fetchPostsAction(page + 1, tagSelected))
    dispatch(setPagePostAction(page + 1))
  }

  const handleTags = (value: string) => {
    dispatch(fetchPostsAction(0, value))
    dispatch(setTagPostsAction(value))
  }

  const handleClickPost = (id: string) => {
    dispatch(setTagPostsAction(''))
    dispatch(setPagePostAction(0))
    navigate(`/post/${id}`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const data = templateForm.map((item: any) => item.name === name ? ({...item, value, errorMessage: ''}) : item)
    dispatch(updateFormAction(data))
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    let errors = 0
    const email = templateForm.find((field: any) => field.name === 'email')?.value || ''
    const pass = templateForm.find((field: any) => field.name === 'password')?.value || ''

    let data = templateForm.map((field: any) => {
      let message = ''
      
      if(field.required && !field.value){
        message = 'Este campo es obligatorio'
        errors++
      } else if (field.name === 'email' && !VALIDATE_EMAIL.test(field.value)) {
        message = 'Correo electrónico no valido'
        errors++
      } else if (field.name === 'password' && field.value.length < 4) {
        message = 'La contraseña debe tener mínimo 4 caracteres'
        errors++
      }

      return { ...field, errorMessage: message }
    })

    if (!errors) {
      const response = await validateFlow(email, pass, data)
      errors = response.errors
      data = response.data
    }

    dispatch(updateFormAction(data))

    if (!errors){
      dispatch(clearFormAction())
      dispatch(showFormAction(false))
    }
  }

  const validateFlow = async (email:string, pass: string, data: any) => {
    let errors = 0
    let errorMessage = ''
    let fields: any  = [...data]

    try {
      const response = await auth.signInWithEmailAndPassword(email, pass)
      const tokenSesion = await response.user?.getIdToken()

      const userLogin = allUsers.find((user:any) => user.email === email)
      dispatch(registerSesionAction(String(tokenSesion), userLogin))

    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'El usuario no se encuentra registrado'
        fields = data.map((field: any) => field.name === 'email' ? ({...field, errorMessage}) : field)
        errors++
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'La contraseña no es válida'
        fields = data.map((field: any) => field.name === 'password' ? ({...field, errorMessage}) : field)
        errors++
      }else if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'El correo ya se encuentra registrado'
        fields = data.map((field: any) => field.name === 'email' ? ({...field, errorMessage}) : field)
        errors++
      }
    }

    return { data: fields, errors }
  }
  
  return (
    <Layout 
      isLogin={!!auth.currentUser} 
      user={userLogin} 
      onSignIn={() => dispatch(showFormAction(true))} 
      onSignOut={() => auth.signOut().then(() => navigate(PATHS.BASE)) }
    >
      <Background/>

      <PostList 
        filters={true}
        display={display} 
        tags={tags} 
        posts={allPosts} 
        onClickDisplay={handleDisplay} 
        onClickShowMore={handleShowMore}
        onClickTag={handleTags}
        onClickPost={handleClickPost}
        />

      <Form 
        type={typeForm}
        isOpened={showForm} 
        data={templateForm} 
        onSubmit={handleSubmit}
        onChange={handleChange} 
        onClose={() => dispatch(showFormAction(false))}
        />
   </Layout>
  )
}

export default Posts;