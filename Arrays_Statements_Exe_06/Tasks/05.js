function solve(num) {

    const isPalindrome=element=>element.toString()===element.toString().split('').reverse().join('') ? console.log('true') : console.log('false');

    num.forEach(element=>(isPalindrome(element)) );

    
}
solve([123,323,421,121]);
solve([32,2,232,1010]);