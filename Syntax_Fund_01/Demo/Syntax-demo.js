console.log("Hello, Node.js!");
let a=10;
let b=5;
if(a==b){
     console.log('Yes, the values are equal')
}else{
     console.log('No, the values are unequal')
}

function solve(num1,num2){
    console.log(num1+num2);
}
solve(10,13);

function grade(name,grade){
    console.log(`The name of the student is ${name} and his/her grade is ${grade.toFixed(2)}!`)
}
grade('Ivan',5.423);
