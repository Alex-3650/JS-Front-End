
function solve(product,quantity) {
    
    const drinks=[];

    drinks['coffee']= (q)=>q*1.5;
    drinks['water']= (q)=>q*1;
    drinks['coke']= (q)=>q*1.4;
    drinks['snacks']= (q)=>q*2;

    console.log(drinks[product](quantity).toFixed(2));
        
}

solve('water',5);
solve('coffee',5);