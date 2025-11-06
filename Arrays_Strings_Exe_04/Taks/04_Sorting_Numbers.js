// function solve(array) {

//    array.sort((a,b)=>a-b);
//     const newarr=[];
//     for (let i = 0; i < array.length/2; i++) {
//        newarr.push(array[i])
//        newarr.push(array[array.length-1-i]);
      
//     }
//     return newarr;

// }


function solve(array) {

   array.sort((a,b)=>a-b);
    
   const counter=[...new Array(array.length).keys()]

 return  counter.reduce((current,value)=>{
      if(value%2===0){
         return  [...current,array.shift()];
      }else{
         return  [...current,array.pop()];
      }
   },[]);

}
console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

console.log([1, 2, 3, 4].reduce((sum, el) => sum+el,0));