function solve(num,arr) {

    const currentArr=arr.splice(0,num)
    return currentArr.reverse().join(' ');
    
}
console.log(solve(3, [10, 20, 30, 40, 50]));
console.log(solve(4, [-1, 20, 99, 5]));