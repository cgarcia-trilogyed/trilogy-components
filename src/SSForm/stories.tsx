import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SSForm from '.';
import SectionTitle from '../SectionTitle'

const stories = storiesOf('SS Form', module);

stories.addDecorator(withKnobs);

stories.add('Single Step', () => (
  <>
    <SectionTitle text='Single Step Form' bold />
    <SSForm />
  </>
));
