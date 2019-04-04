import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Quote from '.';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('Quote', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <SectionTitle text="Quote" bold />
    <Quote
      backgroundColor={color('Background Color', '#75aadb')}
      text="Aliquam quis imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc auctor arcu arcu, et dictum libero elementum ut. Aliquam quis imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      textColor={color('Text Color', '#fff')}
    />
  </>
));
