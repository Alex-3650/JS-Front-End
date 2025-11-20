function solve (number) {

    let sum=1;

    for (let i = 2; i <= number/2; i++) {
       
        if(number%i===0){
            sum+=i;
        }
        
    }
    if(sum===number?console.log('We have a perfect number'): console.log('It\'s not so perfect.'));
    
}
solve(6);
solve(28);
solve(1236498);