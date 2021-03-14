import React from 'react';
import './style.scss';

export default props => (
  <input
    className="inputForm"
    type="text"
    placeholder="Search User"
    onChange={e => props.ChangeValue(e.target.value)}
  />
)