const path = require('path');
const stylesResourcesLoader = require('craco-style-resources-loader');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  reactScriptsVersion: 'react-scripts',
  style: {
    modules: {
      localIdentName: '',
    },
    css: {
      loaderOptions: {},
    },
    sass: {
      loaderOptions: {
        sassOptions: {},
      },
    },
  },
  babel: {
    presets: [],
    plugins: [],
    loaderOptions: {},
  },
  webpack: {
    alias: {
      '~assets': resolvePath('./src/assets'),
      '~pages': resolvePath('./src/pages'),
      '~widgets': resolvePath('./src/widgets'),
      '~shared': resolvePath('./src/shared'),
      '~entities': resolvePath('./src/entities'),
      '~features': resolvePath('./src/features'),
      '~processes': resolvePath('./src/processes'),
    },
    plugins: {
      add: [],
      remove: [],
    },
    configure: {},
  },
  devServer: {},
  plugins: [
    {
      plugin: stylesResourcesLoader,
      options: {
        patterns: [
          resolvePath('./src/assets/styles/helpers/mixins.scss'),
          resolvePath('./src/assets/styles/helpers/variables.scss'),
        ],
      },
    },
  ],
};
