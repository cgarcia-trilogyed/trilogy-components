import * as React from 'react';
import styled from '../utils/styled-components';
import FaqOpen from '../icons/FaqOpen';
import FaqClose from '../icons/FaqClose';
import GlobalStyles from '../GlobalStyles';
import List from '../List';

export interface toggleProps {
  title?: string;
  content: string;
}

const TDiv = styled.div`
  margin-bottom: 1.5rem;
  svg {
    min-height: 20px;
    margin-right: 10px;
    min-width: 20px;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  font-size: 1.6rem;
  margin: 1rem 0;
  text-align: left;
`;

const Answer = styled.div`
  margin-left: 30px;
`;

export const Toggle = (props: toggleProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TDiv>
      <GlobalStyles />
      <Button onClick={() => setOpen(!open)}>
        {open ? <FaqOpen /> : <FaqClose />} {props.title}
      </Button>
      <Answer>{open ? <List listHTML={props.content} /> : null}</Answer>
    </TDiv>
  );
};
