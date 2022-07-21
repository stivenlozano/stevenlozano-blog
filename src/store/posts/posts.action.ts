import { PostsActions } from '.'
import { URL, HEADERS } from '../../constants'
import axios from 'axios'

export const fetchPostsAction = (page: number, tag: string): any => async (dispatch: any, getState: any) => {  
  const { allPosts } = getState().posts

  const tagParams = !!tag ? `/tag/${tag}` : ''
  let data = page !== 0 ? [...allPosts] : []
  const tags: string[] = []
  
  try {
    const response = await axios.get(`${URL}${tagParams}/post?page=${page}&limit=20`, HEADERS)
    !!response.data.data.length && data.push({data: response.data.data})
  } catch (error) {
    console.log(error)
  }
  
  data.map((posts: any) => posts.data.map((post: any) => tags.push(...post.tags)))
  const allTags = tags.filter((tag: string, index: number) => tags.indexOf(tag) === index)

  dispatch({
    type: PostsActions.GET_POSTS,
    payload: {data, tags: allTags, page}
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

export const fetchPostByUserAction = (id: string): any => async (dispatch: any) => {  
  let data = null

  try {
    const response = await axios.get(`${URL}/user/${id}/post`, HEADERS)
    data = response.data
  } catch (error) {
    console.log(error)
  }

  dispatch({
    type: PostsActions.GET_POST_BY_USER,
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

export const setTagPostsAction = (tag: string): any => async (dispatch: any) => {  
  dispatch({
    type: PostsActions.SET_TAG_SELECTED,
    payload: tag,
  })
}

export const setPagePostAction = (page: number): any => async (dispatch: any) => {  
  dispatch({
    type: PostsActions.SET_PAGE,
    payload: page,
  })
}
