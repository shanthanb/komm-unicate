import React, { useState } from 'react';
import './style.css';
import Modal from '../Modal';

export default props => {
  const [showModal, triggerUserModal] = useState(false);
  const [selectedUserData, selectUser] = useState({});
  return (
    <>
      <table>
        <thead>
          <tr className="table-head">
            <th className="column1">Thumbnail</th>
            <th className="column2">First Name</th>
            <th className="column3">Last Name</th>
            <th className="column4">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.usersData.map(user =>
            <tr
              key={user.id}
              onClick={() => {
                triggerUserModal(true);
                selectUser(user);
              }}
            >
              <td className="column1"><img src={user.avatar} /></td>
              <td className="column2">{user.first_name}</td>
              <td className="column3">{user.last_name}</td>
              <td className="column4">{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && <Modal
        show={showModal}
        userData={selectedUserData}
        handleClose={() => triggerUserModal(false)}
      />}
    </>
  )
} 