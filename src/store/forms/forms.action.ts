import { FormsActions, FormModel } from '.'

export const clearFormAction = (): any => async (dispatch: any, getState: any) => {  
  const { forms } = getState()
  const data = forms.loginForm.map((item: FormModel) => ({...item, value: ''}))

  dispatch({
    type: FormsActions.CLEAR_FORM,
    payload: data
  })
}

export const updateFormAction = (templateForm: any): any => async (dispatch: any) => {  
  dispatch({
    type: FormsActions.UPDATE_FORM,
    payload: templateForm
  })
}

export const showFormAction = (value: boolean): any => async (dispatch: any) => {  
  dispatch({
    type: FormsActions.SHOW_FORM,
    payload: value
  })
}

export const setTypeFormAction = (value: string): any => async (dispatch: any) => {  
  dispatch({
    type: FormsActions.SHOW_FORM,
    payload: value
  })
}