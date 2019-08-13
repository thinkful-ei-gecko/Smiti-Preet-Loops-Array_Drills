'use strict'
// first drill "max and min (without sort or Math.max/min"
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
// Second Drill "Compute the average"

let num = [2,3,4,5];
let sumOfAverage = 0;
num.forEach(function(no){
  sumOfAverage += no});

console.log(sumOfAverage/num.length)
