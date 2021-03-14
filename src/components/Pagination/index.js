import React from 'react';
import './style.scss';
import { getArray } from './helper';

export default props => (
  <div className="pagination">
    {getArray(props.total_pages).map(el =>
      <a href="#" key={el} className={props.current_page === el ? 'active' : null} onClick={() => props.changePage(el)}>
        {el}
      </a>
    )}
  </div>
)