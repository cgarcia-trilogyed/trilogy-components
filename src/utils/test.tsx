import setRGBA from './setRGBA'

test('return rgb color with 0.75 alpha', () => {
  expect(setRGBA('RGBA(200, 40, 155, 1')).toBe('rgba(200,40,155,0.75)');
})
