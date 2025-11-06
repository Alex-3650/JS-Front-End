
//================ARRAY-SYNTAX================
const arr=['Luke','Denver','Harry','Johnaton','Baily']

const[firstName,secondName,thirdName,...rest]=arr;


console.log(firstName);
console.log(secondName);
console.log(thirdName);
console.log(rest);

//========for-of===========
for(const name of arr){
    console.log(name);
}

