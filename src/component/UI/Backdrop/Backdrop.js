import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    return (<div className="Backdrop" onClick={props.clicked}>
        {props.show ? <div></div> : null}
    </div>);
}
export default Backdrop;