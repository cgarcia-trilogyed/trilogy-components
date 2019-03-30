import * as React from 'react';
import styled from '../utils/styled-components';

export interface QuoteProps {
  backgroundColor?: string;
  text?: string;
  textColor?: string;
}

/* font family from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts*/
const QDiv = styled(`div`)<QuoteProps>`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#000'};
  color: ${props => (props.textColor ? props.textColor : '#fff')};
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  padding: 15px;
`;

export const Quote = (props: QuoteProps) => (
  <QDiv backgroundColor={props.backgroundColor} textColor={props.textColor}>
    <p>{props.text}</p>
  </QDiv>
);
