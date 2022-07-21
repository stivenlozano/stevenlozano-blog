import { UsersActions } from '.'

export const registerSesionAction = (token: string, email: string) => async (dispatch: any) => {  
  dispatch({
    type: UsersActions.SET_SESION,
    payload: {token, email}
  })
}
