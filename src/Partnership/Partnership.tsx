import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles';

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
  font-size: 1.6rem;
  max-width: 1200px;
  padding: 20px;
`;

const TitleP = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0;
`;

const BodyP = styled.p`
  margin-top: 0;
`;

export const Partnership = (props: PartnershipProps) => (
  <>
    <GlobalStyles />
    <PDiv backgroundColor={props.backgroundColor} textColor={props.textColor}>
      <p>{props.topText}</p>
      <TitleP>About Trilogy Education Services</TitleP>
      <BodyP>{props.bottomText}</BodyP>
    </PDiv>
  </>
);
