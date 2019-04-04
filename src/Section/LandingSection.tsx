import * as React from 'react';
import styled from '../utils/styled-components';
import { device } from '../utils/sizes';

export interface Props {
  children: React.ReactNode;
}

const Section = styled.section`
  margin: 45px 0;
  @media ${device.tablet} {
    margin: 65px 0;
  }
  @media ${device.tabletL} {
    margin: 90px 0;
  }
`
export const LandingSection: React.FunctionComponent<Props> = ({ children }) => (
  <Section>
    { children }
  </Section>
)
