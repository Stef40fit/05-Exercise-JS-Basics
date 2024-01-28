function solve(startNumber, endNumber) {
    'use strict';

    let message = '';
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i += 1) {
        sum += i;
        message += `${i} `;
    }

    console.log(message);
    console.log(`Sum: ${sum}`);
}
solve(1,9)