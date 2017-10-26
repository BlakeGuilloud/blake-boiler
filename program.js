#!/usr/bin/env node

const program = require('commander');
const { create, logProgress, updatePackageJson } = require('./index');

program
  .version('0.1.0')
  .command('create <type> <dir>')
  .action(logProgress)
  .action(create);

program.parse(process.argv);