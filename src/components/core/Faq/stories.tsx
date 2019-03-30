import * as React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Faq from '.';
import ImageText from '../ImageText';

const stories = storiesOf('Faq', module);

stories.addDecorator(withKnobs);

const faqList = [
  {
    id: '1',
    question: 'When does the program start?',
    answer: '<ul><li>The course begins April 22, 2019</li></ul>'
  },
  {
    id: '2',
    question: 'How does the online Boot Camp work?',
    answer:
      '<ul><li>Learners access this dynamic Boot Camp 100% online, learning full-stack web development through engaging exercises, videos, project work, quizzes, and more. The asynchronous format allows learners to personalize their schedule and study remotely at the time that works best for them each week.</li><li>Learners benefit from collaboration with others in the community and receive extensive on-demand support and weekly mentorship with an industry professional as they work to become job-ready developers.</li></ul>'
  },
  {
    id: '3',
    question:
      'Can I keep working while studying at the Columbia Engineering Coding Boot Camp?',
    answer:
      '<ul><li>Yes. This online Boot Camp was designed for working adults, students, and busy professionals, allowing learners to personalize their schedule from week to week.</li></ul>'
  },
  {
    id: '4',
    question: 'How long is the course?',
    answer:
      '<ul><li>Yes. We offer all of our learners career support and coaching, including portfolio reviews, resume assistance, and technical interview training.</li></ul>'
  },
  {
    id: '5',
    question:
      'Do I need to have previous experience in programming before enrolling?',
    answer:
      '<ul><li>No. While having some background can help, our course will get you up to speed and ready to get started on Day 1.</li></ul>'
  },
  {
    id: '6',
    question:
      'What sets your boot camp apart from other online asynchronous Boot Camps operating in New York or surrounding areas?',
    answer:
      '<ul><li>Learners receive an Award of Completion from Columbia Engineering.</li><li>We offer a part-time, flexible schedule that allows working professionals to study web development at their own personalized pace without leaving work.</li><li>Learners benefit from professional development services to prepare them for success as they work to advance or change careers.</li><li>Our curriculum is built based on in-demand technologies needed for the competitive web development industry.</li></ul>'
  }
];

stories
  .add('Default', () => <Faq content={faqList} />)
  .add('Image Text', () => (
    <ImageText
      src="https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/faq.jpg"
      title="Frequently Asked Questions"
      imageRight={boolean('Image Right', false)}
      content={<Faq content={faqList} />}
    />
  ));
