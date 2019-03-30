import { addDecorator, addParameters, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import theme from './theme';

const newViewports = {
  trilogyXS: {
    name: 'Trilogy 320',
    styles: {
      width: '320px',
      height: '960px',
    },
  },
  trilogyS: {
    name: 'Trilogy 480',
    styles: {
      width: '480px',
      height: '960px',
    },
  },
  trilogyM: {
    name: 'Trilogy 767',
    styles: {
      width: '767px',
      height: '960px',
    },
  },
  trilogyL: {
    name: 'Trilogy 992',
    styles: {
      width: '992px',
      height: '960px',
    },
  },
  trilogyXL: {
    name: 'Trilogy 1200',
    styles: {
      width: '1200px',
      height: '960px',
    },
  },
  trilogyXL: {
    name: 'Trilogy 1600',
    styles: {
      width: '1600px',
      height: '960px',
    },
  },
}

addParameters({
  options: {
    theme,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...newViewports,
    },
  },
})

addDecorator(withA11y)

// automatically import all files in the components folder ending in *.stories.tsx
const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
