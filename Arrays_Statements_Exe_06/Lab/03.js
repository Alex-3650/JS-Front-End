function solve(x1,x2,x3) {
    
   
     if([...arguments].includes(0)) {
      return  console.log('Zero');
        
     } 
  const isnegative = [...arguments].filter(num => num < 0).length %2 !== 0;
  console.log(isnegative ? 'Negative' : 'Positive');
        
}
solve(-3,-4,5);
solve(-1,0,5);