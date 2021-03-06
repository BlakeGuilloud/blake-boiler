const chalk = require('chalk');
const emoji = require('node-emoji');
const download = require('download-git-repo');

const log = console.log;
const beers = emoji.get('beers');
const noEntry = emoji.get('no_entry');
const helmet = emoji.get('helmet_with_white_cross');

const repos = {
  react: 'BlakeGuilloud/webpack-babel-react',
  front: 'BlakeGuilloud/webpack-babel-front',
  package: 'BlakeGuilloud/npm-pkg',
  sls: 'BlakeGuilloud/sls-boilerplate',
};

const logError = err =>
  log(chalk.red(`Error ${noEntry} : ${err}`));

const logSuccess = dir =>
  log(chalk.green(`${beers} ${beers} Project '${dir}' has been created`));

const logProgress = message =>
  log(chalk.cyan(`${helmet} ${message || 'Initialized...'}`));

const handleResponse = (err, dir) =>
  err ? logError(err) : logSuccess(dir);

const create = (type, dir) =>
  download(repos[type], dir, (err) => handleResponse(err, dir));

module.exports = {
  create,
  logProgress,
};


