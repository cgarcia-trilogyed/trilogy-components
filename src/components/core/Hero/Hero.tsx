import * as React from 'react';
import styled from '../../utils/styled-components';
import { device } from '../../utils/sizes';

export interface HeroProps {
  backgroundImg?: string;
  backgroundImgM?: string;
  children?: React.ReactNode;
  height?: string;
  overlayColor?: string;
  overlayShow?: boolean;
}

const HeroContainer = styled(`div`)<HeroProps>`
  background-image: url(${props =>
    props.backgroundImgM
      ? props.backgroundImgM
      : `https://via.placeholder.com/768x580/1565C0/fff.png`});
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  height: auto;
  position: relative;
  width: 100%;
  @media ${device.laptop} {
    background-image: url(${props =>
      props.backgroundImg
        ? props.backgroundImg
        : `https://via.placeholder.com/1300x500/AA00FF/fff.png`});
  }
  ${props =>
    props.overlayShow
      ? `&:before {
          background: ${
            props.overlayColor ? props.overlayColor : 'rgba(0, 0, 0, 0.5)'
          };
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0; 
          width: 100%;
          z-index: 1;
        }`
      : null}
`;

const Content = styled(`div`)<HeroProps>`
  align-items: center;
  display: flex;
  position: relative;
  z-index: 2;
  min-height: ${props => (props.height ? props.height : `500px`)};
  height: 100%;
`;

export const Hero = (props: HeroProps) => (
  <HeroContainer
    backgroundImg={props.backgroundImg}
    overlayShow={props.overlayShow}
    overlayColor={props.overlayColor}
  >
    <Content height={props.height}>{props.children}</Content>
  </HeroContainer>
);
