const fs = require("fs");

const source = process.argv[2];
const target = process.argv[3];
fs.stat(source, (err, stats) => {
  if (err) {
    console.log(err);
    throw `Source file ${source} does not exist`;
  }
  fs.copyFile(source, target, (err) => {
    if (err) throw `Error copying file ${source} to ${target}: ${err}`;
  });
});
