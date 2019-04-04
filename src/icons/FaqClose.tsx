import * as React from 'react';
import styled from '../utils/styled-components';

const Path1 = styled.path`
  fill: #75aadb;
`;

const Path2 = styled.path`
  fill-rule: evenodd;
`;

const FaqClose = () => (
  <svg viewBox="0 0 56.13 56.13">
    <title>Bullet Close</title>
    <Path1 d="M28.06,6.51A21.38,21.38,0,1,1,13,43.08L12.93,43A21.38,21.38,0,0,1,28.06,6.51m0-6A27.37,27.37,0,1,0,47.37,47.26l0,0A27.37,27.37,0,0,0,28.06.51Z" />
    <Path2 d="M23.9,16.35,35.06,27.68a.29.29,0,0,1,.07.42l-.07.07L23.9,39.42a.53.53,0,0,1-.49,0l-2.49-2.48,8.77-8.77a.31.31,0,0,0,.06-.43l-.06-.06-8.77-8.77,2.49-2.56A.48.48,0,0,1,23.9,16.35Z" />
  </svg>
);

export default FaqClose;
