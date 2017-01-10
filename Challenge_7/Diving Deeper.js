var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
switch(choice) {
   case 1: 
   case 2:
    console.log("Yes");
    break;

   case 4:
   case 5:
    console.log("No.");
    break;

   case 6:
   case 7:
    console.log("Maybe.");
    break;

   case 8:
   case 3:
    console.log("Of course.");
    break;

   default: 
    console.log("Please try agian.");

};
}
ask();