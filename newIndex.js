#!/usr/bin/env node

var program = require('commander');
var path = require('path');
var fs = require('fs');

program
  .command('init <file>')
  .action(function(file){
     console.log(file,typeof(file));
     fs.mkdirSync(file);
     fs.writeFile(path.join(file,'input.txt'));
     fs.writeFile(path.join(file,'brick-output.txt'));
     fs.writeFile(path.join(file,'brick-main.txt'));
     fs.writeFile(path.join(file,'brickfile.js'));
     fs.writeFile(path.join(file,'brick-locallib.txt'));
     var a = file.split(path.sep).filter(x => x!==(''||'.'));
//     console.log(path.join(a[0],a[1]));
  });


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

console.log(merge(a));
