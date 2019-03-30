import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Overlay from '.';

const stories = storiesOf('Overlay', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <Overlay color={color('Color (must be RGBA)', 'rgba(0, 0, 0, 0.5)')} show />
));
