import * as React from 'react';
import { Button } from './Button';
import * as renderer from 'react-test-renderer';

test('Standard button', () => {
  const component = renderer.create(<Button>Hello Galaxy</Button>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
