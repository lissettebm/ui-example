export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  viewMode: 'docs',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Introduction', 'Colors', 'Components/*']
    }
  }
}

import '../dist/index.css'
