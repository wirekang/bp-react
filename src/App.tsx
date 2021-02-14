import React from 'react';
import TodoInsert from 'components/TodoInsert';
import TodoList from 'components/TodoList';

export default function App():JSX.Element {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
}
