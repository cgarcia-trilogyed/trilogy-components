import * as React from 'react';
import styled from '../../utils/styled-components';

export interface PartnershipProps {
  backgroundColor?: string;
  bottomText?: string;
  textColor?: string;
  topText?: string;
}

const PDiv = styled(`div`)<PartnershipProps>`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : `#000`};
  color: ${props => (props.textColor ? props.textColor : `#fff`)};
  max-width: 1200px;
  padding: 20px;
`;

export const Partnership = (props: PartnershipProps) => (
  <PDiv backgroundColor={props.backgroundColor} textColor={props.textColor}>
    <p>{props.topText}</p>
    <p>About Trilogy Education Services</p>
    <p>{props.bottomText}</p>
  </PDiv>
);
