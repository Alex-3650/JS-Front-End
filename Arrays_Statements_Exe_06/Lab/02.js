function solve(x1,x2,operation) {
    
    const operations=[];

    operations['add']=(x1,x2)=>x1+x2;
    operations['divide']=(x1,x2)=>x1/x2;
    operations['subtract']=(x1,x2)=>x1-x2;
    operations['multiply']=(x1,x2)=>x1*x2;

       console.log(operations[operation](x1,x2).toFixed(2));
}
solve(5,3,'add');
solve(5,3,'multiply');
solve(5,3,'subtract');
solve(5,3,'divide');
