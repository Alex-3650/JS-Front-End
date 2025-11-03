

function sum(number){
    let sum=0;
    const stringNum=number.toString();
    for(let i=0;i<stringNum.length;i++){
     sum+= Number(stringNum[i]);

    }
    console.log(sum);
}
sum(12345);



