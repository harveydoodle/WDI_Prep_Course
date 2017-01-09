//magic eightball

var numberofreplys = 8;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    if (choice == "1" || choice == "2") {
        console.log("Yes.");
    }
    else if (choice == "4" | choice == "5") {
        console.log("No.");
    }
    else if (choice == "6" | choice == "7") {
        console.log("Maybe.");
    }  
    else if (choice == "8" || choice == "3") {
        console.log("Of course.")
    }
    else {
        
    console.log(choice);
    }
}

ask();