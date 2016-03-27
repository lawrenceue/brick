var fs = require('fs');

fs.writeFile('./new.js',"module.exports = [{a:\"A\"}]",function(err){console.log(err)});
