function solve (x1,x2) {

    const factorialCount=(num)=>{
        if(num==0 ||num==1){
            return 1;
        } 
        else{
            return num*factorialCount(num-1);
        }

    }
    const factorial1=factorialCount(x1);
        const factorial2=factorialCount(x2);
        console.log((factorial1/factorial2).toFixed(2));

    
}
solve(5,2);
solve(6, 2);