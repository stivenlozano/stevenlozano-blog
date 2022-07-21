import { FormsStateModel } from '.'
import { TEMPLATE_FORM_LOGIN } from '../../constants'

export const initialState: FormsStateModel = {
  loginForm: TEMPLATE_FORM_LOGIN,
  showForm: false,
  typeForm: 'login',
}
