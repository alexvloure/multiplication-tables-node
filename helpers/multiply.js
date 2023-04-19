const fs = require('fs');
const colors = require('colors');

const makeFile = async (base, list, limit) => {
  try {
    let output = '';
    let consoleOutput = '';
    for (let i = 1; i <= limit; i++) {
      consoleOutput += `${base} ${'x'.magenta} ${i} ${'='.magenta} ${
        base * i
      }\n`;
      output += `${base} x ${i} = ${base * i}\n`;
    }

    if (list) {
      console.log('===================='.grey);
      console.log('    Table of', `${base}`.magenta);
      console.log('===================='.grey);
      console.log(consoleOutput);
    }

    fs.writeFileSync(`./tables/table-${base}.txt`, output);

    return `table-${base}${'.txt'.magenta}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  makeFile,
};
