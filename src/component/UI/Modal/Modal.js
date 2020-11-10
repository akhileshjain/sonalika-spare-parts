import React from 'react';
import Auxilliary from '../Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

const Modal = (props) => {
    return (
        <Auxilliary>
            <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
            <div className="Modal">
                {props.children}
            </div>
        </Auxilliary>
    )
}

export default Modal;