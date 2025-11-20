function personInfo(firstName,lastName,age){


  const person = {
    firstName:firstName,
    lastName:lastName,
    age:age,
  }
  //const person={firstName,lastName,age}

  return person;


}
console.log(personInfo('Jack','Sparrow','unknown'));