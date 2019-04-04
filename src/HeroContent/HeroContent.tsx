import * as React from 'react';
import styled from '../utils/styled-components';
import { device } from '../utils/sizes';

export interface ContentProps {
  form?: React.ReactNode;
  title?: string;
  leadText?: string;
  dateText?: string;
}

const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-areas: 'content' 'form';
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  @media ${device.laptop} {
    grid-template-areas: 'form content';
    grid-template-columns: 50%;
  }
`;

/* font family from tailwind css by Adam Wathan https://tailwindcss.com/docs/fonts*/
const TitleContent = styled.div`
  color: #fff;
  font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  grid-area: content;
  text-align: center;
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin: 5px 0;
    line-height: 60px;
  }
  p {
    font-size: 18px;
  }
  @media ${device.laptop} {
    text-align: right;
  }
`;

export const HeroContent: React.FunctionComponent<ContentProps> = ({ dateText, form, leadText, title }) => (
  <Container>
    { form }
    <TitleContent>
      <h1>{title}</h1>
      <h2>{leadText}</h2>
      <p>{dateText}</p>
    </TitleContent>
  </Container>
);
