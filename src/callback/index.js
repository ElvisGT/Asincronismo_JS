function suma(num1,num2){
    return num1 + num2;
}

function resta(num1,num2){
    return num1 - num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2);
}

console.log(calc(2,2,suma));
console.log(calc(10,5,resta));


//////////////////////////////////////

function date(callback){
    console.log(new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date);
    },3000);
}

function printDate(newDate){
    console.log(newDate);
}

date(printDate);