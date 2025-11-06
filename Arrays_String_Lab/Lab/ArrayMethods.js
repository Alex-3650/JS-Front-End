//=========Array-Methods========

const cars=['BMW','AUDI','MERCEDES','NISSAN','MAZDA']

//pop-remove last element
console.log(cars);
const lastcar=cars.pop();
console.log(cars);
console.log(lastcar);

//shift -remove first element
console.log(cars);
const first=cars.shift();
console.log(cars);
console.log(first);

//splice - delete or set value on specific index
 console.log(cars);
 cars.splice(2,1)//remove 1 item on index 2
 console.log(cars);


 //Join-creates String joined by regex



//slice-new Array
console.log('=============================');
console.log(cars);
const bestCras=cars.slice(0,1);//0 index include-1 index exclude
console.log(bestCras);

//Includes-check if the array contain the value

const hasBmw= cars.includes('BMW');
console.log(hasBmw);

 cars.unshift('BMW');
 
 cars.unshift('FIAT');
 
 cars.unshift('HYUNDAI');

 //[ 'HYUNDAI', 'FIAT', 'BMW', 'AUDI', 'MERCEDES' ]

//Index of-finds the index of an element

const indexExisting=cars.indexOf('BMW');
const indexNonExisting=cars.indexOf('NotExising');
console.log(indexExisting);
console.log(indexNonExisting);//-1

//foreach
cars.forEach(
  function(car)
  {
    console.log(car);
  }
);

//Map - vrates new array beased on the values of the primal array

const lowercase=cars.map(function(car) {
    return car.toLowerCase();
});

console.log(cars);
console.log(lowercase);

//Find-find the first appropriate value:return the first found value

const find=cars.find(function(car){
 return car.startsWith('H');//HYUNDAI

})
console.log(find);

//FILTER-FIND ALL ELEMETNTS BASED ON CONDITION:returns array
cars.push('Hauuu')
const filter=cars.filter(function(car){
 return car.startsWith('H');//HYUNDAI

})
console.log(filter);


//Pattern
const text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';
const pattern=new RegExp('[A-z][a-z]+','g')

const result=pattern.test(text);
console.log(result);
const result2=pattern.exec(text);
console.log(result2);


