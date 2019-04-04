import * as React from 'react';
import styled from '../utils/styled-components';
import { device } from '../utils/sizes';

export interface ContentProps {
  dateText?: string;
  form?: React.ReactNode;
  leadText?: string;
}

const Container = styled.div`
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
  h2 {
    font-size: 50px;
    font-weight: 700;
  }
  p {
    font-size: 24px;
    line-height: 31px;
  }
`;

export const FooterContent: React.FunctionComponent<ContentProps> = ({ dateText, form, leadText }) => (
  <Container>
    { form }
    <TitleContent>
      <h2>{leadText}</h2>
      <p>{dateText}</p>
    </TitleContent>
  </Container>
);
