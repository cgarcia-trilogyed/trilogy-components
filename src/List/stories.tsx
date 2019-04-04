import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import List from '.';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('List', module);

stories.addDecorator(withKnobs);

const ulList = `<ul>
    <li>Hello World</li>
    <li>Hello Galaxy</li>
    <li>Hello Universe
      <ul>
        <li>Inner Text</li>
      </ul>
    </li>
  </ul>`;

stories.add('Default', () => (
  <>
    <SectionTitle text="List" bold />
    <List listHTML={ulList} />
  </>
));
