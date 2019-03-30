import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from '.';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <h2>Default Button</h2>
    {/* TODO: docs go here */}
    <Button
      background={color('Background Color', '#28c8e5')}
      fontColor={color('Text Color', '#fff')}
    >
      Galaxy
    </Button>
  </>
));
