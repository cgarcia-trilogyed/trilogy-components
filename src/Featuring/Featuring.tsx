import * as React from 'react';
import styled from '../utils/styled-components';

export interface FeaturingProps {
  color?: string;
  content?: { id?: string; title?: string; text?: string }[];
}

/* font family from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts*/
const Container = styled(`div`)<FeaturingProps>`
  display: grid;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 2em;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  div {
    border-left: 3px solid ${props => (props.color ? props.color : `#0046a6`)};
    padding: 0px 10px 10px 10px;
  }
  h4 {
    color: ${props => (props.color ? props.color : `#0046a6`)};
    font-size: 20px;
    margin-top: 0;
  }
  p {
    font-size: 16px;
  }
`;

export const Featuring = (props: FeaturingProps) => (
  <Container>
    {props.content && props.content.length > 0
      ? props.content.map(n => (
          <div key={n.id}>
            <h4>{n.title}</h4>
            <p>{n.text}</p>
          </div>
        ))
      : null}
  </Container>
);
