const fs = require('fs');

const chalk = require('chalk');
const emoji = require('node-emoji');
const download = require('download-git-repo');

const log = console.log;
const beers = emoji.get('beers');
const noEntry = emoji.get('no_entry');
const helmet = emoji.get('helmet_with_white_cross');

const repos = {
  front: 'BlakeGuilloud/webpack-babel-react',
};

const logError = () =>
  log(chalk.red(`Error ${noEntry}`));

const logSuccess = dir =>
  log(chalk.green(`${beers} ${beers} Project '${dir}' has been created`));

const logProgress = () =>
  log(chalk.cyan(`${helmet} Initialized...`));

const handleResponse = (err, dir) =>
  err ? logError() : logSuccess(dir);

const create = (type, dir) =>
  download(repos[type], dir, (err) => updatePackageJson(type, dir));

const updatePackageJson = (type, dir) => {
  const fileName = `./${dir}/package.json`;
  const file = require(fileName);
  file.name = dir;

  fs.writeFileSync(fileName, JSON.stringify(file, null, 2));

  logSuccess(dir);
};

module.exports = {
  create,
  logProgress,
  updatePackageJson,
};


