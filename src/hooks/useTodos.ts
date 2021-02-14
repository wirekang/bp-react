import { RootState } from 'modules';
import { useSelector } from 'react-redux';

function useTodos() {
  const todos = useSelector((state: RootState) => (state.todos));
  return todos;
}

export default useTodos;
