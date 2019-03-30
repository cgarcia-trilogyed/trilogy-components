import * as React from 'react';
import styled from '../utils/styled-components';

export interface SectionTitleProps {
  bold?: boolean;
  color?: string;
  text?: string;
}

/* font family from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts*/
const Title = styled(`h2`)<SectionTitleProps>`
  color: ${props => (props.color ? props.color : '#333')};
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 36px;
  font-weight: ${props => (props.bold ? `700` : `400`)};
  line-height: 40px;
  margin-top: 0;
`;

export const SectionTitle = (props: SectionTitleProps) => (
  <Title bold={props.bold} color={props.color}>
    {props.text}
  </Title>
);
