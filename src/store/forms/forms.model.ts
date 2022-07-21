export interface FormModel{
  label: string,
  name: string,
  placeholder: string,
  type: string,
  value: string,
  required: boolean,
}

export interface FormsStateModel{
  loginForm: FormModel[],
  showForm: boolean,
  typeForm: string,
}
