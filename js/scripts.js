// scripts.js

var a = prompt('Enter a');
var b = prompt('Enter b');
var value = (a * a) - (2 * a * b) - (b * b);
alert('Value is equal to: ' + value);
if (value > 0) {
	console.log('Value is bigger than 0');
} else if (value < 0) {
	console.log('Value is smaller than 0');
} else {
	console.log('Value is equal to 0');
}
console.log('Value is equal to: ' + value);