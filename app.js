let knockout = require('knockout');
let unique = require('unique');

document.querySelector('.message').innerHTML = 'script connected';

let arr = [1,1,3,2,5,5,,5,1,9];

let uniqueList = unique(arr);

console.log( uniqueList )