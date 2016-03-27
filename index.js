#!/usr/bin/env node

var program = require('commander');

program
  .command('init')
  .action(function(){console.log("hi")});

program
  .command('yo')
  .action(function(){console.log("yo")});

program.parse(process.argv);
