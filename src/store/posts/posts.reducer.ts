import { initialState, PostsActions } from '.'
import { AnyAction } from 'redux'

export default function postsReducer( state = initialState, action: AnyAction) {
  const { type, payload } = action
  
  switch(type){
    case PostsActions.SET_DISPLAY:
      return {
        ...state,
        display: payload,
      }
    case PostsActions.SET_TAG_SELECTED:
      return {
        ...state,
        tagSelected: payload,
      }
    case PostsActions.SET_PAGE:
      return {
        ...state,
        page: payload,
      }
    case PostsActions.GET_POSTS:
      return {
        ...state,
        allPosts: payload.data,
        tags: payload.tags,
        page: payload.page,
      }
    case PostsActions.GET_POST_BY_ID:
      return {
        ...state,
        postSelected: payload,
      }
    case PostsActions.GET_POST_BY_USER:
      return {
        ...state,
        postsByUser: payload.data,
      }
    case PostsActions.GET_POST_BY_TAG:
      return {
        ...state,
        allPosts: payload,
      }
    case PostsActions.GET_COMMENTS_BY_ID:
      return {
        ...state,
        postComments: payload.data,
      }
    default:
      return state;
  }
}
