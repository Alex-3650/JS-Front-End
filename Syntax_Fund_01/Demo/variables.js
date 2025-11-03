let name = 'koko';
const age= 18;


let arr = [1, 2, 3];
console.log(arr.toString()); 
function solve (grade){
    if(grade>=5.5 && grade<=6.00){
        return "Excellent grade!";
    }
    return "Not excellent grade!"
}
console.log(solve(3));
console.log(solve(5.6));


function month(month){
switch(month){
case 1:
    return "January";
    break;
case 2:
    return "Feb";
    break;
case 3:
    return "March";
    break;
case 4:
    return "April";
    break;
case 5:
    return "May";
    break;
case 6:
    return "June";
    break;
case 7:
    return "Janu0ary";
    break; 
case 8:
    return "January";
    break;  
case 9:
    return "January";
    break;                
}
}
console.log(month(4));

