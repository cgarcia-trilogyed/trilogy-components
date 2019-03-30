import * as React from 'react';
import styled from '../../utils/styled-components';

type ButtonType = 'button' | 'reset' | 'submit' | undefined;

export interface ButtonProps {
  autoFocus?: boolean;
  ariaLabel?: string;
  background?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  fontColor?: string;
  fontSize?: string;
  name?: string;
  primary?: boolean;
  onClick?: () => void;
  type?: ButtonType;
  value?: string;
}

const TButton = styled(`button`)<ButtonProps>`
  background: ${props => (props.background ? props.background : '#28c8e5')};
  border: none;
  color: ${props => (props.fontColor ? props.fontColor : '#fff')};
  cursor: pointer;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  padding: 4px;
  &:hover {
    animation-play-state: running;
  }
  &:active,
  &:focus,
  &:visited {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.3rem rgba(180, 0, 255, 0.35);
  }
`;

const noop = () => {};

export const Button = (props: ButtonProps) => (
  <TButton
    ariaLabel={props.ariaLabel ? props.ariaLabel : props.name}
    autoFocus={props.autoFocus}
    background={props.background}
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
);
