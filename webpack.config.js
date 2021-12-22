var path = require('path');
// ...
resolve: {
  root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
  extensions: ['', '.js']
};