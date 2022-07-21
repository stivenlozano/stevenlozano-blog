import React from "react";
import ReactDOM from "react-dom";
import { BsXLg } from "react-icons/bs";
import './styled.css'

interface IProps {
  isOpened: boolean,
  children: React.ReactNode,
  onClose: () => void,
}

const modalContainer: any = document.querySelector("#modal");

const Modal: React.FC<IProps>  = ({ children, isOpened, onClose }) => {
  return isOpened ? (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-container">
          <div className="modal-container__close">
            <BsXLg size={16} cursor='pointer' onClick={onClose}/>
          </div>
          
          {children}
        </div>
      </div>,
      modalContainer
    )
  ) : null;
}

export default Modal;
