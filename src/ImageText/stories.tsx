import * as React from 'react';
import { boolean, withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ImageText from '.';
import List from '../List';
import SectionTitle from '../SectionTitle';

const stories = storiesOf('Image Text', module);

stories.addDecorator(withKnobs);

const ulList = `<ul>
  <li>Duis rutrum arcu mi, a venenatis orci tincidunt vitae. Mauris convallis pretium metus, sed laoreet nulla mollis at. Duis rutrum arcu mi.</li>
  <li>Duis rutrum arcu mi, a venenatis orci tincidunt vitae. Mauris convallis pretium metus, sed laoreet nulla mollis at. Duis rutrum arcu mi, a venenatis orci tincidunt vitae.</li>
  <li>Quisque sagittis lobortis lorem eu rutrum. Donec accumsan enim ut diam aliquam fermentum. Quisque sagittis lobortis lorem eu rutrum.</li>
  <li>TVivamus eu leo ac magna accumsan maximus. Donec nec lacinia arcu. Sed consequat purus ac dui bibendum, nec scelerisque magna efficitur. Vivamus eu leo ac magna accumsan maximus.</li>
  <li>Donec lobortis semper faucibus. Integer ac pulvinar justo, suscipit venenatis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
  </ul>`;

stories.add('Default', () => (
  <>
    <SectionTitle text="Image With a List of Items" bold />
    <ImageText
      alt="A picture is worth a thousand words"
      src="https://bootcamp.cvn.columbia.edu/wp-content/uploads/sites/99/2019/02/become.jpg"
      title="Donec lobortis Semper Faucibus"
      subtitle="Parturient montes nascetur?"
      imageRight={boolean('Image Right', false)}
      content={<List listHTML={ulList} />}
      dskColumWidth={text(
        'Column Widths (example 50% or 40% 60% or 33% 33% 33%)',
        '40% 60%'
      )}
    />
  </>
));
