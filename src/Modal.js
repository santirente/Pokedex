import React from 'react';
import ReactDOM from 'react-dom';
import {XSquare} from 'react-bootstrap-icons'
import './css/Modal.css';

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="">
        <button onClick={props.onClose} className="Modal__close-button">
          <XSquare fill="currentColor"/>
        </button>
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;

