import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({onClick, completed, text, onButtonClick, onCaseButtonClick}) => (
  <li>
  <span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    </span>
    &nbsp;
    <button onClick={onButtonClick}>X</button>
    <button onClick={onCaseButtonClick}>!</button>

  </li>
);

ToDoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;