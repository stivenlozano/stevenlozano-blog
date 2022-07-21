import { initialState, FormsActions } from '.'
import { AnyAction } from 'redux'

export default function FormsReducer( state = initialState, action: AnyAction) {
  const { type, payload } = action
  
  switch(type){
    case FormsActions.CLEAR_FORM:
      return {
        ...state,
        formLogin: payload,
      }
    default:
      return state;
  }
}
