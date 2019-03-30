import * as React from 'react';
import styled from '../utils/styled-components';

export interface OverlayProps {
  children?: React.ReactNode;
  color?: string;
  show?: boolean;
}

const OverlayDiv = styled(`div`)<OverlayProps>`
  background: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.5)')};
  justify-content: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Overlay = (props: OverlayProps) =>
  props.show ? (
    <OverlayDiv color={props.color ? props.color : 'rgba(0, 0, 0, 0.5)'}>
      {props.children}
    </OverlayDiv>
  ) : null;
