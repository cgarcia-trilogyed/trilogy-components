import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Featuring from '.';

const stories = storiesOf('Featuring', module);

stories.addDecorator(withKnobs);

const fList = [
  {
    id: '1',
    title: 'Marketable Skills',
    text:
      'Learn HTML5, CSS3, Ruby, JavaScript, jQuery, Heroku, Git, Database Theory, MVC frameworks and architecture, Object-Oriented Programming, and more.'
  },
  {
    id: '2',
    title: 'Hands-On Learning',
    text:
      'Build websites, create full stack single page applications, and more through complex projects as you gain practical web development experience and build your professional portfolio.'
  },
  {
    id: '3',
    title: 'Personalized Format',
    text:
      'Maintain your current life schedule by learning from the comfort of your home, or any location. The personalized format allows you to study at the pace that works for you.'
  },
  {
    id: '4',
    title: 'Real-World Experience',
    text:
      'We’ve taken years of on-the-job learnings and transformed them into deliberately constructed lessons to teach learners the skills they need to enter an actual web developer role.'
  },
  {
    id: '5',
    title: '1:1 Support',
    text:
      'Receive on-demand support when you need it through our Course Assistants, and benefit from personalized, 1:1 mentor sessions with an experienced industry professional to help coach you as you work to reach your coding goals.'
  },
  {
    id: '6',
    title: 'Professional Development',
    text:
      'We’ll guide you through the current job landscape and make you employer competitive through support services like portfolio reviews, resume and cover letter support, soft-skills training, technical interview preparation, and more.'
  }
];

stories.add('Default', () => <Featuring content={fList} />);
