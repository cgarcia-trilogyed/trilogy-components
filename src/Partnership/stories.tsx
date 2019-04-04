import * as React from 'react';
import { color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Partnership from '.';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('Partnership', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <SectionTitle text="Partnership Block" bold />
    <Partnership
      backgroundColor={color('Background Color', '#000')}
      bottomText="Aliquam quis imp Aliquam quis imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc auctor arcu arcu, et dictum libero elementum ut.erdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc auctor arcu arcu, et dictum libero elementum ut."
      textColor={color('Text Color', '#fff')}
      topText="Aliquam quis imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      title="Lorem Ipsum Dolor Sit Amet"
    />
  </>
));
