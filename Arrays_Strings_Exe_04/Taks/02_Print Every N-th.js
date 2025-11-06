
// function solve( elements,num){

//      const newArray=[];

//      for (let index = 0; index < elements.length; index+=num) {
//       newArray.push(elements[index]);
        
//      }
//     return(newArray);
// }

function solve(arr,step) {
    return arr.filter((value, index)=>index % step===0 );
    
}
console.log(solve(['5','20','31','4','20'],2));
console.log(solve(['1', '2', '3', '4', '5'], 6));