#!/usr/bin/env node

var program = require('commander');
var path = require('path');
var fs = require('fs');

program
  .command('init <file>')
  .action(function(file){
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var util = require('util');
    console.log('What is your file\'s extension?');
    process.stdin.on('data',function(text){
       makeFiles(file,text);
       process.exit();
    });
  });

function makeFiles(file, extension){
     extension = extension.replace(/\W/g, '');
     fs.mkdirSync(file);
     fs.mkdirSync(path.join(file,'bricks'));
     fs.mkdirSync(path.join(file,'bricks','libs'));
     fs.mkdirSync(path.join(file,'bricks','libs','local'));
     fs.writeFileSync(path.join(file, file + '.' + extension),'');
     fs.writeFileSync(path.join(file,'bricks','input.txt'),'');
     fs.writeFileSync(path.join(file,'bricks','output.txt'),'');
     fs.writeFileSync(path.join(file,'bricks','main.txt'),'');
     fs.writeFileSync(path.join(file,'bricks','libs','local','brickfile.js'),'module.exports = [];');
// fallback.txt file for global library     fs.writeFileSync(path.join(file,'bricks','libs','local','brickfile.js'),'module.exports = []');
};

program
  .command('add <brick> <filepath> [environment]')
  .action(function(brick,filepath,environment){
    addBrick(brick,filepath.split(path.sep),environment);
  });

function addBrick(brick, filepath, environment){
  var environment = environment===undefined ? 'local' : environment;
  var libArray = require(path.join(process.cwd(),'libs',environment,'brickfile.js'));
  libArray.push(
    {name: brick,
     filepath: filepath,
     environment: environment});
  fs.writeFile(path.join(process.cwd(),'libs',environment,'brickfile.js'),('module.exports = ' + JSON.stringify(libArray) + ';'));
};

program
  .command('test')
  .action(function(){console.log('test.js');});


program.parse(process.argv);

/*
var path = require('path');
var a = ['globe','grab','gone'];

var merge = function(a){
	if(a.length===0){
		return '';
	} else {
	return path.join(a.shift(),merge(a))};
};

// console.log(merge(a));
*/
