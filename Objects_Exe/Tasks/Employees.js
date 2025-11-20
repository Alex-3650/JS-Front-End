function employee(input){

 const employees={

 }

 input.forEach(element => {
    employees[element]=element.length;
 });

 for (const name in employees) {
    
      console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    
 }
}
employee([

'Silas Butler',

'Adnaan Buckley',

'Juan Peterson',

'Brendan Villarreal'

]);