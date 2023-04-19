const argv = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Base of the multiplication table',
    },
    l: {
      alias: 'list',
      type: 'boolean',
      demandOption: false,
      default: false,
      describe: 'Show the multiplication table in the console',
    },
    t: {
      alias: 'limit',
      type: 'number',
      demandOption: false,
      default: 10,
      describe: 'Limit of the multiplication table',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'The base has to be a number';
    }
    if (isNaN(argv.t)) {
      throw 'The limit has to be a number';
    }
    return true;
  }).argv;

module.exports = argv;
