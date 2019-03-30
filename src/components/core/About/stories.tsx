import * as React from 'react';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import About from '.';

const stories = storiesOf('About', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <h1>Landing Hero</h1>
    {/* TODO: docs go here */}
    <About
      backgroundImg={text(
        'Background Image',
        'https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/img_about.jpg'
      )}
      content="The mission of The Fu Foundation School of Engineering and Applied Science is to expand knowledge and advance technology through research, while educating students to become leaders informed by an engineering foundation. Enriched with the intellectual resources of a global university in the City of New York, we push disciplinary frontiers, confront complex issues, and engineer innovative solutions to address the grand challenges of our time. We create a collaborative environment that embraces interdisciplinary thought, integrated entrepreneurship, cultural awareness, and social responsibility, and advances the translation of ideas into practical innovations."
      mobileImage={text('Mobile Image', 'https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/about_m.jpg')}
      overlayColor={color(
        'Overlay Color if applicable (must be RGBA)',
        'rgba(0, 0, 0, 0.5)'
      )}
      overlayShow={boolean('Show overlay', false)}
      title="About Columbia Engineering"
    />
  </>
));
