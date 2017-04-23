import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({onClick, completed, text, onButtonClick}) => (
  <li>
    <span
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {text}
    </span>
    <button onClick={onButtonClick}>X</button>
  </li>
);

ToDoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ToDoItem;