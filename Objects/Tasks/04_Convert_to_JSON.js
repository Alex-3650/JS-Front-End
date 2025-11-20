function convertToJSON(name,lastName,hairColor){

    const person={name,lastName,hairColor,}


   return( JSON.stringify(person));

}
console.log(convertToJSON('George', 'Jones','Brown'));