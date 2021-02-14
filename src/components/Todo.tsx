import useTodoActions from 'hooks/useTodoActions';
import { Todo } from 'modules/todos';
import React from 'react';
import styled from 'styled-components';

interface WrapperProps {
  done: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  cursor: pointer;
`;

const DeleteButton = styled.input``;

interface Props {
  todo: Todo;
  children?: never;
}

const Todo: React.FC<Props> = (props) => {
  const actions = useTodoActions(props.todo.id);

  return (
    <Wrapper done={props.todo.done} onClick={actions.onToggle}>
      {props.todo.text}
      <DeleteButton type="button" value="X" onClick={actions.onRemove} />
    </Wrapper>
  );
};

export default Todo;
