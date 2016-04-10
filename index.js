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
     fs.mkdirSync(file);
     fs.mkdirSync(path.join(file,'bricks'));
     fs.writeFile(path.join(file, (file + '.' + extension)));
     fs.writeFile(path.join(file,'bricks','input.txt'));
     fs.writeFile(path.join(file,'bricks','output.txt'));
     fs.writeFile(path.join(file,'bricks','main.txt'));
     fs.writeFile(path.join(file,'bricks','brickfile.js'));
     fs.writeFile(path.join(file,'bricks','locallib.txt'));
};

program
  .command('yo')
  .action(function(){console.log("yo")});

program.parse(process.argv);

var path = require('path');
var a = ['globe','grab','gone'];

var merge = function(a){
	if(a.length===0){
		return '';
	} else {
	return path.join(a.shift(),merge(a))};
};

// console.log(merge(a));


