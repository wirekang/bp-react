import { createReducer } from 'typesafe-actions';
import { addTodo, toggleTodo, removeTodo } from './actions';
import { TodosAction, TodosState } from './types';

const initialState: TodosState = [
  { id: 1, text: 't1t1t1t', done: true },
  { id: 2, text: 'ㅅ2ㅅ2ㅅ2ㅅ2ㅅ2ㅅ2ㅅ2ㅅ', done: false },
];

const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, action) => (
    state.concat({
      id: Math.max(...state.map((todo) => todo.id)) + 1,
      text: action.payload,
      done: false,
    })))
  .handleAction(toggleTodo, (state, action) => (
    state.map((todo) => (
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ))
  ))
  .handleAction(removeTodo, (state, action) => (
    state.filter((todo) => (todo.id !== action.payload))
  ));

export default todos;
