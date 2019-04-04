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
      bottomText="Trilogy Education is a workforce accelerator that empowers the world’s leading universities to prepare professionals for high-growth careers in the digital economy. Thousands of people around the globe have completed Trilogy-powered Boot Camps, and more than 2,000 companies—including 50% of the Fortune 100—employ them."
      textColor={color('Text Color', '#fff')}
      topText="This Boot Camp is offered through Columbia Engineering in partnership with Trilogy Education Services, Inc."
    />
  </>
));
