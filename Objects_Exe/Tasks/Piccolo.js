function solve(input){
    const parkinglot={};
    input.forEach(entry => {
        const[direction,number]=entry.split(', ');

        if(direction=='IN'){
             if(!parkinglot.hasOwnProperty(number)) parkinglot[number]=1;
        }else{
             if(parkinglot.hasOwnProperty(number)) delete parkinglot[number];

        }
    });
    if(Object.entries(parkinglot).length==0){
        console.log("Parking Lot is Empty");
    }else{
        Object.entries(parkinglot).sort().forEach(([carNumber,_])=>console.log(carNumber));
    }
   

}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA', 
'OUT, CA2866HI', 
'IN, CA9876HH', 
'IN, CA2822UU']);

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA']);