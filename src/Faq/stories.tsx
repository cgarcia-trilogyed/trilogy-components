import * as React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Faq from '.';
import ImageText from '../ImageText';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('Faq', module);

stories.addDecorator(withKnobs);

const faqList = [
  {
    id: '1',
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer: '<ul><li>Etiam a dolor ac ligula laoreet porta.</li></ul>'
  },
  {
    id: '2',
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      '<ul><li>Etiam a dolor ac ligula laoreet porta. Proin porta iaculis elit, a luctus sem maximus ac. Integer congue est eu semper bibendum. Sed blandit aliquam turpis ut consequat.</li><li>In orci dui, fringilla eu lobortis sed, suscipit ut enim. Nunc tincidunt sapien ut ipsum malesuada tempor. Praesent congue iaculis accumsan. In orci dui, fringilla eu lobortis sed, suscipit ut enim.</li></ul>'
  },
  {
    id: '3',
    question:
      'Lorem ipsum dolor sit amet consectetur orem ipsum dolor sit amet consectetur?',
    answer:
      '<ul><li>In orci dui, fringilla eu lobortis sed, suscipit ut enim. Nunc tincidunt sapien ut ipsum malesuada tempor. Praesent congue iaculis accumsan.</li></ul>'
  },
  {
    id: '4',
    question: 'Lorem ipsum dolor?',
    answer:
      '<ul><li>In orci dui, fringilla eu lobortis sed, suscipit ut enim. Nunc tincidunt sapien ut ipsum malesuada tempor. Praesent congue iaculis accumsan.</li></ul>'
  },
  {
    id: '5',
    question:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur?',
    answer:
      '<ul><li>In orci dui, fringilla eu lobortis sed, suscipit ut enim. Nunc tincidunt sapien ut ipsum malesuada tempor. Praesent congue iaculis accumsan.</li></ul>'
  },
  {
    id: '6',
    question:
      'Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur ipsum dolor sit amet consectetur dolor sit amet consectetur?',
    answer:
      '<ul><li>Etiam a dolor ac ligula laoreet porta. Proin porta iaculis elit.</li><li>Sed blandit aliquam turpis ut consequat. In orci dui, fringilla eu lobortis sed, suscipit ut enim. Etiam a dolor ac ligula laoreet porta.</li><li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li><li>Quisque id ornare magna. Fusce id pulvinar elit. Cras sed dolor nunc.</li></ul>'
  }
];

stories
  .add('Default', () => (
    <>
      <SectionTitle text="Frequently Asked Questions" bold />
      <Faq content={faqList} />
    </>
  ))
  .add('Image Text', () => (
    <>
      <SectionTitle text="FAQ Section" bold />
      <ImageText
        src="https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/faq.jpg"
        title="Frequently Asked Questions"
        imageRight={boolean('Image Right', false)}
        content={<Faq content={faqList} />}
        dskColumWidth={text(
          'Column Widths (example 50% or 40% 60% or 33% 33% 33%)',
          '40% 60%'
        )}
      />
    </>
  ));
