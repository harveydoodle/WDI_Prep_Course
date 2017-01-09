var str = "I am a BrainStation student"; 
var n = str.search("BrainStation");
console.log(n);


function functionTwo(){
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

}