function solve(n) {

    const matrix=((n+' ').repeat(n)+'\n').repeat(n);
    return matrix;
    
}
console.log(solve(7));