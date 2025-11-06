function solve(arr) {

    let evenSum=0;
    let oddSum=0;

    arr.forEach(element => {
        if(element%2===0){
            evenSum+=element;
        }else{
            oddSum+=element;
        }
    });
    return evenSum-oddSum;
    
}
console.log(solve([1,2,3,4,5,6]));
console.log(solve([3,5,7,9]));