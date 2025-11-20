// function solve(number) {

//     const arrNumbers=Math.abs(number).toString().split('').map(Number);
    
//     const evenSum=arrNumbers.filter(el=>el%2===0).reduce((sum,d)=>sum+=d,0);
//     const oddSum=arrNumbers.filter(el=>el%2===1).reduce((sum,d)=>sum+=d,0);
//     console.log(`Odd sum = ${oddSum}`);
//     console.log(`Even sum = ${evenSum}`);
  
    
// }

function solve(number) {

    const arrNumbers=Math.abs(number).toString().split('').map(Number);
   let evenSum=0, oddSum=0;
    
    arrNumbers.forEach(el=>el%2===0 ? evenSum+=el:oddSum+=el);
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
 
  
    
}
solve(1000435);
solve(3495892137259234);