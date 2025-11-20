function convertToObject(input){

const object= JSON.parse(input);

for([key,value] of Object.entries(object)){

    console.log(`${key}: ${value}`);
}



}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
