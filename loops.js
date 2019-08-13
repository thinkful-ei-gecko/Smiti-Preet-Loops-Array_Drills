'use strict'

function max(numbers){
    let maxVal = numbers[0];
    let i = 0;
    while (i < numbers.length){
        if (numbers[i] > maxVal){
            maxVal = numbers[i];
        }
        i++;
    }
    return maxVal;
}

function min(numbers){
    let minVal = numbers[0];
    let i = 0;
    while (i < numbers.length){
        if (numbers[i] < minVal){
            minVal = numbers[i];
        }
        i++;
    }
    return minVal;
}

console.log(max([7, 8, 9, 99]));
console.log(min([7, 8, 9, 99]));
