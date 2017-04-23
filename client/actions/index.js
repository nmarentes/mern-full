import {ADD_TODO, TOGGLE_TODO, DELETE_TODO, TOGGLE_CASE} from './Actions';

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

export const deleteTodo = (id)=>{
  return {
    type: 'DELETE_TODO',
    id
  }
};

export const toggleCase = (id)=>{
  return {
    type: 'TOGGLE_CASE',
    id,
    text
  }
};
