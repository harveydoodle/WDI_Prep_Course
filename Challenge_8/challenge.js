/* Exercise 1 */

for (var i = 0; i < 101; i++) {
    console.log(i);
}

/*Exercise 2*/

var items = ["#","##","###","####","#####","######","#######"];
for (var i = 0, l = items.length; i < l; i++){
    console.log(items[i]);
}

/* Exercise 3 */

for (var i = 1; i < 101; i++) {
    if (i % 5 == 0 && i % 3 == 0){
    console.log("fizzbuzz");
}
    else if (i % 3 == 0) {
    console.log("buzz");
}
    else if (i % 5 == 0) {
    console.log("fizz");
}
else {
    console.log(i);
};
}

/* Exercise 4 */

var items = ["# # # # "," # # # #"];
for (var i = 0; i < 8; i++) {
    if (i == 0 || i == 2 || i == 4 || i == 6) {
        console.log(items[0]);
    }
    else {
        console.log(items[1]);
    };
    }
