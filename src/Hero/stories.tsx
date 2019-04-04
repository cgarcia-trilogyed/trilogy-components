import * as React from 'react';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Hero from '.';
import HeroContent from '../HeroContent';
import FooterContent from '../FooterContent';
import SectionTitle from '../SectionTitle';
import FormContainer from '../FormContainer'

const stories = storiesOf('Hero', module);

stories.addDecorator(withKnobs);

stories
  .add('Default Landing Hero', () => (
    <>
      <SectionTitle text="Landing Page Hero" bold />
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
          form={ <FormContainer /> }
          title="Etiam Dolor Ac Ligula Laoreet Porta"
          leadText="QUISQUE SAGITTIS LOBORTIS LOREM SAGITTIS"
          dateText="Pellentesque volutpat felis ante. Pellentesque volutpat felis ante."
        />
      </Hero>
    </>
  ))
  .add('Footer Form', () => (
    <>
      <SectionTitle text="Landing Page Footer Form" bold />
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
          form={ <FormContainer /> }
          leadText="Upcoming Start Dates"
          dateText="Online: April 22"
        />
      </Hero>
    </>
  ));
