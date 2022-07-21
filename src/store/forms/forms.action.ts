import { FormsActions, FormModel } from '.'

export const clearFormAction = (): any => async (dispatch: any, getState: any) => {  
  const { forms } = getState()
  const data = forms.formLogin.map((item: FormModel) => ({...item, value: ''}))

  dispatch({
    type: FormsActions.CLEAR_FORM,
    payload: data
  })
}