import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';

const ToDoList = ({todos, onTodoClick, onDeleteClick, onCaseButtonClick}) => (
  <ul>
    {todos.map(todo =>
      <ToDoItem
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onButtonClick={() => onDeleteClick(todo.id)}
        onCaseButtonClick={()=> onCaseButtonClick(todo.id)}
      />)}
  </ul>
);

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onCaseButtonClick: PropTypes.func.isRequired,
};

export default ToDoList;