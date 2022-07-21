import { PostsActions } from '.'
import axios from 'axios'
import { URL, HEADERS } from '../../constants'

export const fetchPostsAction = (page: number): any => async (dispatch: any, getState: any) => {  
  const { allPosts } = getState().posts
  const data = [...allPosts]

  try {
    const response = await axios.get(`${URL}/post?page=${page}&limit=20`, HEADERS)
    data.push({page, data: response.data.data})
  } catch (error) {
    console.log(error)
  }

  dispatch({
    type: PostsActions.GET_POSTS,
    payload: data,
  })
}

export const fetchPostByIdAction = (id: any): any => async (dispatch: any) => {  
  let data = null

  try {
    const response = await axios.get(`${URL}/post/${id}`, HEADERS)
    data = response.data
  } catch (error) {
    console.log(error)
  }

  dispatch({
    type: PostsActions.GET_POST_BY_ID,
    payload: data,
  })
}

export const fetchCommentsByIdAction = (id: any): any => async (dispatch: any) => {  
  let data = []

  try {
    const response= await axios.get(`${URL}/post/${id}/comment`, HEADERS)
    data = response.data
  } catch (error) {
    console.log(error)
  }

  dispatch({
    type: PostsActions.GET_COMMENTS_BY_ID,
    payload: data,
  })
}

export const setDisplayPostsAction = (display: string): any => async (dispatch: any) => {  
  dispatch({
    type: PostsActions.SET_DISPLAY,
    payload: display,
  })
}

