var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var food = 0;
    while (food < ingredients.length) {
        console.log(ingredients);
        ingredients ++;
    }

// Write a for loop that prints out the contents of ingredients:
var i = 0;
    for (i = 0; i < ingredients.length; i++){
        console.log(ingredients[i]);
    }

// Write any loop (while or for) that prints out the contents of ingredients backwards:
var back = ingredients.reverse();

var x = 0;
    for (x = 0; x < back.length; x++) {

        console.log(back[x]);
    }