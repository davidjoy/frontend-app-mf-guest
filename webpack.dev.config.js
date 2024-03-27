const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');

config.output.uniqueName = 'mf-domain1';

config.plugins = [
  ...config.plugins,
  new ModuleFederationPlugin({
    name: 'domain1',
    filename: 'remoteEntry.js',
    exposes: {
      './Domain1Page': './src/example/Domain1Page',
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      '@openedx/paragon': {
        singleton: true,
        requiredVersion: '^22.0.0',
      },
    },
  }),
];

config.devServer.headers = {
  'Access-Control-Allow-Origin': '*',
};

module.exports = config;
