//Automated Test: Code to test Code.

import {formatCurrency } from "../scripts/utils/money.js"; 

console.log('Test suite: formatCurrency');   //Test Suite: Group of tests cases.

//Base Test Cases
console.log('Converts Cents into Dollars');

if(formatCurrency(2095) === '20.95') {
    console.log('Passed');
} else {
    console.log('Failed');
}

//Edge Test Cases
console.log('Works with 0');

if(formatCurrency(0) === '0.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}

console.log('Rounds up to the nearest Cents'); 

if(formatCurrency(2000.5) === '20.01') {
    console.log('Passed');
} else {
    console.log('Failed');
}

if(formatCurrency(2000.4) === '20.00') {
    console.log('Passed');
} else {
    console.log('Failed');
}