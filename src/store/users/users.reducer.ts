import { initialState, UsersActions } from '.'
import { AnyAction } from 'redux'

export default function usersReducer( state = initialState, action: AnyAction) {
  const { type, payload } = action
  
  switch(type){
    case UsersActions.SET_SESION:
      return {
        ...state,
        sesionToken: payload.token,
        userEmail: payload.email,
      }
    default:
      return state;
  }
}
