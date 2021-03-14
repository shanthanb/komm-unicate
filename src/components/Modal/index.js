import React from 'react';
import './style.scss';

export default props => {
  const showHideClassName = props.show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="parent">
          <div className="title">
            User Details
          </div>
          <div className="modalContent">
            <img src={props.userData.avatar} />
            <div className="personalDetails">
              <div>First Name: <b>{props.userData.first_name}</b></div>
              <div>Last Name: <b>{props.userData.last_name}</b></div>
              <div>Email: <b>{props.userData.email}</b></div>
            </div>
          </div>
          <div className="closeBtn">
            <button onClick={() => props.handleClose()}>Close</button>
          </div>
        </div>
      </section>
    </div>
  )
} 