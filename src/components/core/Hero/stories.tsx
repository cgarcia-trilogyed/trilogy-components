import * as React from 'react';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Hero from '.';
import HeroContent from '../HeroContent';
import FooterContent from '../FooterContent';

const stories = storiesOf('Hero', module);

stories.addDecorator(withKnobs);

stories
  .add('Default Landing Hero', () => (
    <>
      <h1>Landing Hero</h1>
      {/* TODO: docs go here */}
      <Hero
        backgroundImg={text(
          'Background Image',
          'http://4.bp.blogspot.com/-R22-Cz-hZhM/UPUdbM4MlTI/AAAAAAAACbo/pfKkU98fSyE/s1600/wall-e-and-eve-best-wallpaper.jpg'
        )}
        overlayColor={color(
          'Overlay Color if applicable (must be RGBA)',
          'rgba(0, 0, 0, 0.5)'
        )}
        overlayShow={boolean('Show overlay', false)}
      >
        <HeroContent
          title="Columbia Engineering Coding Boot Camp | ONLINE"
          leadText="BECOME A WEB DEVELOPER IN 24 WEEKS"
          dateText="Self-paced, mentor-led instruction in an online format for busy adults"
        />
      </Hero>
    </>
  ))
  .add('Footer Form', () => (
    <>
      <h1>Footer Form</h1>
      {/* TODO: docs go here */}
      <Hero
        backgroundImg={text(
          'Background Image',
          'https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/footer.jpg'
        )}
        height="350px"
        overlayColor={color(
          'Overlay Color if applicable (must be RGBA)',
          'rgba(0, 0, 0, 0.5)'
        )}
        overlayShow={boolean('Show overlay', false)}
      >
        <FooterContent
          leadText="Upcoming Start Dates"
          dateText="Online: April 22"
        />
      </Hero>
    </>
  ));
