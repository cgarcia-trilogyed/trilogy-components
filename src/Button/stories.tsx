import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from '.';
import SectionTitle from '../SectionTitle'

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <SectionTitle text='Button' bold />
    {/* TODO: docs go here */}
    <Button
      background={color('Background Color', '#28c8e5')}
      fontColor={color('Text Color', '#fff')}
    >
      Galaxy
    </Button>
  </>
));
