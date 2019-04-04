import * as React from 'react';
import styled from '../utils/styled-components';

const Path1 = styled.path`
  fill: #75aadb;
  fill-rule: evenodd;
`;

const Path2 = styled.path`
  fill: #fff;
  fill-rule: evenodd;
`;

const FaqOpen = () => (
  <svg viewBox="0 0 56.13 56.13">
    <title>Bullet Open</title>
    <Path1 d="M28.06.51h0A27.37,27.37,0,1,1,8.74,47.26l0,0A27.37,27.37,0,0,1,28.06.51Z" />
    <Path2 d="M39.59,23.73,28.26,34.89a.31.31,0,0,1-.43.06l-.06-.06L16.52,23.73a.55.55,0,0,1,0-.5L19,20.75l8.77,8.76a.29.29,0,0,0,.42.07l.07-.07L37,20.75l2.56,2.48a.55.55,0,0,1,0,.5Z" />
  </svg>
);

export default FaqOpen;
