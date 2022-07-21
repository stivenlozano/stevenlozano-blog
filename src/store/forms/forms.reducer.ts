import { initialState, FormsActions } from '.'
import { AnyAction } from 'redux'

export default function FormsReducer( state = initialState, action: AnyAction) {
  const { type, payload } = action
  
  switch(type){
    case FormsActions.CLEAR_FORM:
    case FormsActions.UPDATE_FORM:
      return {
        ...state,
        loginForm: payload,
      }
    case FormsActions.SHOW_FORM:
      return {
        ...state,
        showForm: payload,
      }
    case FormsActions.SET_TYPE:
      return {
        ...state,
        typeForm: payload,
      }
    default:
      return state;
  }
}
