import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles';
import setRGBA from '../utils/setRGBA'

type ButtonType = 'button' | 'reset' | 'submit' | undefined;

export interface ButtonProps {
  autoFocus?: boolean;
  bold?: boolean;
  ariaLabel?: string;
  background?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  fontColor?: string;
  fontSize?: string;
  name?: string;
  primary?: boolean;
  onClick?: (arg0: any) => void;
  type?: ButtonType;
  value?: string;
}

const TButton = styled(`button`)<ButtonProps>`
  background-color: ${props =>
    props.background ? props.background : '#28c8e5'};
  border: none;
  color: ${props => (props.fontColor ? props.fontColor : '#fff')};
  cursor: pointer;
  font-size: ${props => (props.fontSize ? props.fontSize : '2.4rem')};
  font-weight: ${props => (props.bold ? `700` : `400`)};
  height: 48px;
  width: 100%;
  :hover {
    background-color: ${props => props.background ? setRGBA(props.background) : '#28c8e5BF'};
  }
`;

const noop = () => {};

export const Button = (props: ButtonProps) => (
  <>
    <GlobalStyles />
    <TButton
      ariaLabel={props.ariaLabel ? props.ariaLabel : props.name}
      autoFocus={props.autoFocus}
      background={props.background}
      bold={props.bold}
      fontColor={props.fontColor}
      disabled={props.disabled}
      name={props.name}
      onClick={!props.disabled ? props.onClick : noop}
      type={props.type}
      value={props.value}
      primary={props.primary ? true : false}
      fontSize={props.fontSize}
    >
      {props.children}
    </TButton>
  </>
);
