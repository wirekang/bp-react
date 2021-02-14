import { addTodo } from 'modules/todos';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback((text: string) => dispatch(addTodo(text)), [dispatch]);
}

export default useAddTodo;
