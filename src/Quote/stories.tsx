import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Quote from '.';
import SectionTitle from '../SectionTitle'

const stories = storiesOf('Quote', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <SectionTitle text='Quote' bold />
    <Quote
      backgroundColor={color('Background Color', '#75aadb')}
      text="Columbia Engineering Coding Boot Camp online was designed to help busy adults develop the skills and professional network needed to capitalize on the high demand web development career track, through a convenient online format."
      textColor={color('Text Color', '#fff')}
    />
  </>
));
