function solve(shift) {
const gold=67.51;
const bitcoin=11949.16;
let bitcoinCount=0;
let bitcoinDay=0;

const  currencyCount= shift.reduce((earnings,element,index)=>{

if((index+1)%3===0){
    element*=0.7;
}

    earnings+=(element*gold);

    while(earnings>=bitcoin){
          bitcoinCount++;
          if(bitcoinCount==1){
            bitcoinDay=index+1;
          }
          earnings-=bitcoin;
    }
        return earnings;
},0);
console.log(`Bought bitcoins: ${bitcoinCount}`);
if(bitcoinDay!==0){
   console.log(`Day of the first purchased bitcoin: ${bitcoinDay}`); 
}
console.log(`Left money: ${currencyCount.toFixed(2)} lv.`);

}


  solve([100, 200, 300]) ;

    
    //1 Bitcoin 11949.16 lv.

// 1g of gold 67.51 lv.