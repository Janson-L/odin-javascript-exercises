const sumAll = function (num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)||num1 <0 ||num2<0){
        return "ERROR"
    }

    // let length = Math.abs(num1 - num2) + 1;

    // arr = Array.from({ length: length }, (v, num) => num + Math.min(num1, num2));
    
    // return arr.reduce(function (x,y){return x+y;},0)

    //Arithmetic Series
    let length = Math.abs(num1-num2) +1;
    let first_num = num1;
    let last_num = num2

    if (Math.max(num1,num2) === num1){
        first_num= num2;
        last_num=num1;
    }

    let sum = length * ((first_num+ last_num)/2);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
