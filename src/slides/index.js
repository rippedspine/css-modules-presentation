const slides = [{
  title: 'CSS Modules',
  type: 'hero'
}, {
  title: 'What?',
  type: 'hero',
  content: require('./content/what')
}, {
  title: 'Developer Click Bait',
  type: 'normal',
  content: require('./content/clickbait')
}, {
  title: 'Why?',
  type: 'hero'
}, {
  title: 'CSS Stands For...',
  type: 'hero',
  content: require('./content/cascadingshitstorm')
}, {
  title: 'Avoiding CSS Specificity Hell',
  type: 'hero',
  snippets: [{
    snippet: require('./content/specificityhell')
  }]
}, {
  title: 'Until the Shadow DOM is mainstream',
  subtitle: '... or can CSS Modules solve other problems?'
}, {
  title: 'How?',
  type: 'hero'
}, {
  title: 'Media Item Component',
  type: 'dashed',
  snippets: [{
    labels: ['MediaItem.css'],
    snippet: require('./content/mediaitem/css')
  }, {
    title: 'webpack config',
    labels: ['style-loader', 'css-loader', 'postcss-loader'],
    snippet: require('./content/mediaitem/webpack')
  }, {
    labels: ['lookup object'],
    snippet: require('./content/mediaitem/lookup'),
    description: 'Automatically generated classnames guaranteed to be unique.'
  }, {
    labels: ['MediaItem.js'],
    snippet: require('./content/mediaitem/component')
  }, {
    labels: ['HTML'],
    snippet: require('./content/mediaitem/html')
  }]
}, {
  title: 'Possible usecases',
  content: require('./content/usecases')
}];

export default slides

