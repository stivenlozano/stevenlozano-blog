import axios from 'axios'
import { UsersActions } from '.'
import {HEADERS, URL} from '../../constants'

export const registerSesionAction = (token: string, user: any): any => async (dispatch: any) => {  
  dispatch({
    type: UsersActions.SET_SESION,
    payload: {token, user}
  })
}

export const fetchUsersAction = (): any => async (dispatch: any) => {  
  let data = []

  try {
    const response = await axios.get(`${URL}/user?page=0&limit=50`, HEADERS)
    const users = response.data.data

    data = await Promise.all(users.map( async (user: any) => {
      const responseUser = await axios.get(`${URL}/user/${user.id}`, HEADERS)
      return await responseUser.data
    }))
  } catch (error) {
    console.log(error)
  }
  
  dispatch({
    type: UsersActions.GET_USERS,
    payload: data,
  })
}