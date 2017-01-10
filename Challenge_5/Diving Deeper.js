var str = "I am a BrainStation student"; 
var n = str.search("BrainStation");
console.log(n);


var str = "I am a student"; 
var n = str.search("BrainStation");
console.log(n);

var str = "I am a BrainStation student";
var n = str.replace(/BrainStation student/i, 'Junior Developer');
console.log(n);