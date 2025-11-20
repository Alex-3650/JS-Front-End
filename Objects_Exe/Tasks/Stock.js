

// function store(stock,ordered){

//   const storage={};

//   for (let i=0;i<stock.length;i+=2) {
//    let product= stock[i];
//    let quantity= Number(stock[i+1]);
//     storage[product]=quantity;
//   }
//   for (let i=0;i<ordered.length;i+=2) {
//    let product= ordered[i];
   
//    let quantity= Number(ordered[i+1]);
//    if(storage.hasOwnProperty(product)){
//     storage[product]+=quantity;
//    }else{
//    storage[product]=quantity;
//    }
  
//   }
  
//   for (const product in storage) {
   
//      console.log(`${product} -> ${storage[product]}`);
    
//   }



// }

function solve(stock,order){
    const products=[...stock,...order].reduce(((storage,product,i,arr)=>{
     if(i%2===0) storage[product]=(storage[product] || 0)+Number(arr[i+1]);
     return storage;



    }),{})
    for (const product in products) {
   
    console.log(`${product} -> ${products[product]}`);
    
   }

  

}
solve([

'Chips', '5', 'CocaCola', '9', 'Bananas',

'14', 'Pasta', '4', 'Beer', '2'

],

[

'Flour', '44', 'Oil', '12', 'Pasta', '7',

'Tomatoes', '70', 'Bananas', '30'

]);