const { makeFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

console.log(argv);

makeFile(argv.b, argv.l, argv.t)
  .then((fileName) => console.log(fileName, 'created'))
  .catch((err) => console.log(err));
