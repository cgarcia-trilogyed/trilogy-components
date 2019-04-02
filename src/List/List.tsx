import * as React from 'react';
import styled from '../utils/styled-components';
import GlobalStyles from '../GlobalStyles'

export interface ListProps {
  bulletColor?: string;
  listHTML?: any;
  height?: string;
  fontSize?: string;
  left?: string;
  top?: string;
  width?: string;
  innerBulletColor?: string;
  innerHeight?: string;
  innerFontSize?: string;
  innerLeft?: string;
  innerTop?: string;
  innerWidth?: string;
}

const Container = styled(`div`)<ListProps>`
  ul {
    font-size: 1.6rem;
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      margin: 18px 0 0 0;
      position: relative;
      padding-left: 15px;
      &:before {
        color: ${props => (props.bulletColor ? props.bulletColor : '#000')};
        vertical-align: middle;
        display: inline-block;
        position: absolute;
        font-size: ${props => (props.fontSize ? props.fontSize : '12px')};
        width: ${props => (props.width ? props.width : '10px')};
        height: ${props => (props.height ? props.height : '10px')};
        top: ${props => (props.top ? props.top : '2px')};
        left: ${props => (props.left ? props.left : '2px')};
      }
      &:before,
      &:nth-child(1n):before {
        content: '●';
      }
      &:first-child {
        margin: 0;
      }
      ul {
        li {
          list-style: none;
          margin: 12px 0 0 0;
          padding-left: 10px;
          position: relative;
          &:before {
            color: ${props =>
              props.innerBulletColor ? props.innerBulletColor : '#F00'};
            vertical-align: middle;
            display: inline-block;
            position: absolute;
            font-size: ${props =>
              props.innerFontSize ? props.innerFontSize : '12px'};
            width: ${props => (props.innerWidth ? props.innerWidth : '10px')};
            height: ${props =>
              props.innerHeight ? props.innerHeight : '10px'};
            top: ${props => (props.innerTop ? props.innerTop : '2px')};
            left: ${props => (props.innerLeft ? props.innerLeft : '2px')};
          }
          &:before,
          &:nth-child(1n):before {
            content: '●';
          }
        }
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const List = (props: ListProps) => (
  <Container>
    <GlobalStyles />
    <div dangerouslySetInnerHTML={{ __html: props.listHTML }} />
  </Container>
);
