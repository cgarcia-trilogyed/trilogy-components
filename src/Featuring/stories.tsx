import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Featuring from '.';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('Featuring', module);

stories.addDecorator(withKnobs);

const fList = [
  {
    id: '1',
    title: 'Marketable Skills',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta.'
  },
  {
    id: '2',
    title: 'Hands-On Learning',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta. Etiam vel pellentesque enim, vitae auctor tortor.'
  },
  {
    id: '3',
    title: 'Personalized Format',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta. Etiam vel pellentesque enim, vitae auctor tortor.'
  },
  {
    id: '4',
    title: 'Real-World Experience',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta. Etiam vel pellentesque enim, vitae auctor tortor.'
  },
  {
    id: '5',
    title: '1:1 Support',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta. Etiam vel pellentesque enim, vitae auctor tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta.'
  },
  {
    id: '6',
    title: 'Professional Development',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit tortor sit amet nulla gravida, a vulputate dui porta.'
  }
];

stories.add('Default', () => (
  <>
    <SectionTitle text="Featuring Section" bold />
    <Featuring content={fList} />
  </>
));
