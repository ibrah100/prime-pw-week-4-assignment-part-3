console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem (item, array) {
 array.push(item);
 return array.includes(item);
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples', basket));
console.log(`Basket is now ${basket}`);
console.log('Adding bananas (expect true)', addItem('bananas', basket));
console.log(`Basket is now ${basket}`);

function listItems (array) {
    for (let i=0; i < array.length; i++) {
        console.log(array[i]);
    }
}

listItems(basket);

function empty (array) {
    array.length = 0;
}

empty(basket);

console.log(basket);

const maxItems = 5;

function isFull(array) {
    if (array.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

console.log(isFull(basket));

//adding items to basket to test for other case
addItem('apples', basket);
addItem('bananas', basket);
addItem('carrots', basket);
addItem('onions', basket);
addItem('garlic', basket);

console.log(isFull(basket));

function removeItem(item, array) {
    let x = array.indexOf(item);
    if (x == -1) {
        return null;
    } else {
        return array.splice(x,1);
    }
}

console.log(removeItem('apples', basket));
console.log(removeItem('pumpkin', basket));
