import * as React from 'react';
import { throttle } from 'lodash/fp';
import styled from '../utils/styled-components';
import { device } from '../utils/sizes';

export interface AboutProps {
  backgroundImg?: string;
  mobileAlt?: string;
  mobileImage?: string;
  content?: string;
  overlayColor?: string;
  overlayShow?: boolean;
  title?: string;
}

/* font family from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts*/
const AboutContainer = styled(`div`)<AboutProps>`
  background-color: #000;
  color: #fff;
  height: auto;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  max-width: 1200px;
  min-height: 300px;
  padding: 20px;
  position: relative;
  @media ${device.tablet} {
    background-image: url(${props => props.backgroundImg ? props.backgroundImg : `https://via.placeholder.com/1300x500/AA00FF/fff.png`});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ${props =>
    props.overlayShow
      ? `&:before {
          background: ${ props.overlayColor ? props.overlayColor : 'rgba(0, 0, 0, 0.5)' };
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0; 
          width: 100%;
          z-index: 1;
        }`
      : null}
  img {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  position: relative;
  z-index: 2;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 32px;
  position: relative;
  z-index: 2;
`;

export const About = (props: AboutProps) => {
  const [width, setWidth] = React.useState(window.innerWidth);

  // throttle not working
  const throttleResize = () => {
    throttle(200, setWidth)(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', throttleResize);
    return () => {
      window.removeEventListener('resize', throttleResize);
    };
  }, []);

  return (
    <AboutContainer
      backgroundImg={props.backgroundImg}
      overlayShow={props.overlayShow}
      overlayColor={props.overlayColor}
    >
      {width < 768 ? (
        <img
          src={
            props.mobileImage
              ? props.mobileImage
              : `https://via.placeholder.com/720x360/09f/fff.png`
          }
          alt={props.mobileAlt}
        />
      ) : null}
      <Title>{props.title}</Title>
      <P>{props.content}</P>
    </AboutContainer>
  );
};
