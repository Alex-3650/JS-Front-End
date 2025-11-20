// function processCity(city){

//     const keys=Object.keys(city);
    

//     for(const key of keys){
//       console.log(`${key} -> ${city[key]}`);
//     }

// }

// function processCity(city){

//     const entries=Object.entries(city);
    

//     for(const pair of entries){
//       console.log(`${pair[0]} -> ${pair[1]}`);
//     }

// }

function processCity(city){

    const entries=Object.entries(city);
    

    for(const [key,value] of entries){
      console.log(`${key} -> ${value}`);
    }

}



processCity({ name: "Sofia",  area: 492, population: 1238438, country: "Bulgaria",})