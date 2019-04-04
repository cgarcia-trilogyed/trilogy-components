import * as React from 'react';
import { boolean, color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import About from '.';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('About', module);

stories.addDecorator(withKnobs);

stories.add('Default', () => (
  <>
    <SectionTitle text="About Section" bold />
    {/* TODO: docs go here */}
    <About
      backgroundImg={text(
        'Background Image',
        'https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/img_about.jpg'
      )}
      content="Duis rutrum arcu mi, a venenatis orci tincidunt vitae. Mauris convallis pretium metus, sed laoreet nulla mollis at. Pellentesque sodales rhoncus dolor, in vulputate nulla sagittis eget. Morbi ac nisi malesuada, tristique risus in, porttitor diam. Maecenas a orci consectetur nibh vehicula viverra non non turpis. Phasellus sagittis interdum condimentum. Suspendisse gravida velit a ex consequat eleifend. Nunc interdum in felis at semper. Aliquam quis imperdiet ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc auctor arcu arcu, et dictum libero elementum ut. Quisque sagittis lobortis lorem eu rutrum. Donec accumsan enim ut diam aliquam fermentum."
      mobileImage={text(
        'Mobile Image',
        'https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/about_m.jpg'
      )}
      overlayColor={color(
        'Overlay Color if applicable (must be RGBA)',
        'rgba(0, 0, 0, 0.5)'
      )}
      overlayShow={boolean('Show overlay', false)}
      title="Title Goes Here"
    />
  </>
));
