var path = require('path');
var a = ['globe','grab','gone'];

var merge = function(a){
	if(a.length===0){
		return '';
	} else {
	return path.join(a.shift(),merge(a))};
};

console.log(merge(a));
