import React from "react";
import Modal from "../../templates/Modal";
import './styled.css'

interface IField {
  label?: string,
  name?: string,
  type?: string,
  value?: string,
  placeholder?: string,
  errorMessage?: string,
  required?: boolean,
}

interface IProps {
  isOpened: boolean,
  type: string,
  data: IField[],
  onSubmit: (event: any) => void,
  onChange: (event: any) => void,
  onClose: () => void,
}

const Form: React.FC<IProps> = ({ type, isOpened, data, onChange, onSubmit, onClose }) => {
  return (
    <Modal isOpened={isOpened} onClose={onClose}>
      <img className="form-logo" src="https://static.wixstatic.com/media/8d71f3_9d56ad82a0c84cccbf8f246deb6f3876~mv2.png/v1/fill/w_396,h_396,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20Pet%20Shop-02.png" alt="" />

      <form className="form-data" onSubmit={onSubmit}>
          {
            data.map((field: IField, index: number) => 
              <div key={index.toString()} className="form-field">
                <input type={field.type} placeholder={field.placeholder} name={field.name} value={field.value} onChange={onChange} required autoComplete="off"/>
                { !!field.errorMessage && <p>{field.errorMessage}</p> }
              </div>
            )
          }

        <button type="submit" className="form-btn">{ type === 'login' ? 'Iniciar sesion' : 'Registrar' }</button>
      </form>
    </Modal>
  )
}

export default Form;
