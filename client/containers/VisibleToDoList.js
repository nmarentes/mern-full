import {connect} from 'react-redux';
import {toggleToDo, deleteToDo, toggleCase} from '../actions/Actions';
import ToDoList from '../components/ToDoList';

const getVisibleToDos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleToDos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleToDo(id))
    },
    onDeleteClick: (id)=>{
      dispatch(deleteToDo(id))
    },
    onCaseButtonClick: (id)=>{
      dispatch(toggleCase(id))
    },
  };
};

const VisibleToDoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default VisibleToDoList;