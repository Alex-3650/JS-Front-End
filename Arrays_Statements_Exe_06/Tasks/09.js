function solve (percentage) {
    const length=10;
    const filledBars=Math.round(percentage/length);
    const emptBars=length-filledBars;


    if(filledBars==length){
        console.log('100% Complete!\n[%%%%%%%%%%]');
    }else{
        console.log(`${percentage}% [${'%'.repeat(filledBars)}${'.'.repeat(emptBars)}]`);
        console.log('Still loading...');
    }
    
}
solve(30);
solve(100);