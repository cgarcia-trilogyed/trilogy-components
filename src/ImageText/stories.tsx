import * as React from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ImageText from '.';
import List from '../List';
import SectionTitle from '../SectionTitle'

const stories = storiesOf('Image Text', module);

stories.addDecorator(withKnobs);

const ulList = `<ul>
  <li>Over the course of 24 weeks, you’ll tap into a proven curriculum, learning front-end and back-end technologies in a self-paced, online format.</li>
  <li>You will cover the fundamentals, getting immersed into building database-driven applications, the development process and structure, and then move on to applying those skills.</li>
  <li>Once you’ve mastered the skills needed to be employable, you’ll put that knowledge into action on real-world situations.</li>
  <li>Throughout the program, you’ll become part of a community of like-minded individuals and have the opportunity for collaboration on an agile team project, simulating a real professional environment.</li>
  <li>You’ll receive 1:1 training through mentorship with an industry professional, technical feedback throughout each code exercise, and on-demand support from our Course Assistants if you get stuck.</li>
  </ul>`;

stories.add('Default', () => (
  <>
    <SectionTitle text='Image With a List of Items' bold />
    <ImageText
      alt="A picture is worth a thousand words"
      src="https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/become.jpg"
      title="Become a Web Developer—from Anywhere"
      subtitle="Why join our program?"
      imageRight={boolean('Image Right', false)}
      content={<List listHTML={ulList} />}
      dskColumWidth={text(
        'Column Widths (example 50% or 40% 60% or 33% 33% 33%)',
        '40% 60%'
      )}
    />
  </>
));
