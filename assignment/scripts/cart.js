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

basket = 5;

console.log(isFull(basket));



