import useTodos from 'hooks/useTodos';
import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>``;

interface Props {}

const TodoList: React.FC<Props> = (props) => {
  const todos = useTodos();
  return (
    <Wrapper>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </Wrapper>
  );
};

export default TodoList;
