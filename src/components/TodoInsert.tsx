import React, { useState } from 'react';
import styled from 'styled-components';

interface WrapperProps {}

const Wrapper = styled.div<WrapperProps>``;

const Input = styled.input``;

interface Props {}

const TodoInsert: React.FC<Props> = (props) => {
  const [text, setText] = useState('');
  return (
    <Wrapper>
      <Input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default TodoInsert;
