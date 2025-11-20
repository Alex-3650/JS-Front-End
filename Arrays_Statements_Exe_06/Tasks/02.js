function solve(x1,x2,x3) {

    const sum=(x1,x2)=>x1+x2;

    const subtract=(sum,x3)=>sum-x3;

    return(subtract(sum(x1,x2),x3));

    
}



console.log(solve(23,6,10));
console.log(solve(1,17,30));
console.log(solve(42,58,100));