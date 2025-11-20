let cat={
    name:'Petya',
    age: 8,
    ismale:true,
    isHappy:'yes',
}

//conver object to JSON
let catAsJson=JSON.stringify(cat);
console.log(catAsJson);
console.log(typeof catAsJson);
//convert JSON to object

let convertedFromJSON =JSON.parse(catAsJson);
console.log(convertedFromJSON);
console.log(typeof convertedFromJSON);

let stringJSON='{ "testKey":"testValue" }';
let objectFromJSON=JSON.parse(stringJSON);
console.log(objectFromJSON);
console.log(typeof objectFromJSON);