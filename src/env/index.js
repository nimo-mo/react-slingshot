

switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./test');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./dev');
}