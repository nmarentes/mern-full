import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, FLIP_TODO} from './Actions';

let nextToDoId = 0;

export const addToDo = (text) => {
  return {
    type: ADD_TODO,
    id: nextToDoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleToDo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id
  }
};

export const flipToDo = (id) => {
  return {
    type: FLIP_TODO,
    id
  }
};
