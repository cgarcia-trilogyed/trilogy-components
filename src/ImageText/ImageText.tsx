import * as React from 'react';
import styled from '../utils/styled-components';
import { device } from '../utils/sizes';
import SectionTitle from '../SectionTitle';
import SectionSubtitle from '../SectionSubtitle';

export interface ITProps {
  alt?: string;
  content?: React.ReactNode;
  dskColumWidth?: string;
  imageRight?: boolean;
  subtitle?: string;
  src?: string;
  title?: string;
}

const Container = styled(`div`)<ITProps>`
  display: grid;
  grid-template-areas: 'title' 'image' 'list';
  max-width: 1200px;
  width: 100%;
  @media ${device.laptop} {
    grid-template-areas: ${props => props.imageRight ? `'title image' 'list image'` : `'image title' 'image list'`};
    grid-template-columns: ${props => props.dskColumWidth ? props.dskColumWidth : `50%`};
    ${props => (props.imageRight ? `justify-content: space-between;` : null)}
    ${props => (props.imageRight ? `justify-items: end;;` : null)}
    grid-template-rows: auto 1fr;
  }
  h2 {
    line-height: 1.3;
    margin-bottom: 0;
  }
`;

const Image = styled(`img`)<ITProps>`
  grid-area: image;
  max-width: 420px;
  width: 100%;
`;

const ListDiv = styled.div`
  grid-area: list;
`;

const Title = styled.div`
  grid-area: title;
`;

export const ImageText = (props: ITProps) => (
  <Container imageRight={props.imageRight} dskColumWidth={props.dskColumWidth}>
    <Image
      src={
        props.src ? props.src : 'https://via.placeholder.com/420/09f/fff.png'
      }
      alt={props.alt ? props.alt : ''}
    />
    <Title>
      {props.title ? <SectionTitle text={props.title} bold /> : null}
      {props.subtitle ? <SectionSubtitle text={props.subtitle} /> : null}
    </Title>
    <ListDiv>{props.content}</ListDiv>
  </Container>
);
