function adressBook(clients){

   const adress={};

    clients.forEach(client => {
        const[key,value]=client.split(':');
        adress[key]=value;
    });
 


 const entries=Object.entries(adress);

 entries.sort((a,b) => a[0].localeCompare(b[0]));


 entries.forEach((element)=>{
    console.log(`${element[0]} -> ${element[1]}`);
 })
}

// adressBook( ['Tim:Doe Crossing',

// 'Bill:Nelson Place',

// 'Peter:Carlyle Ave',

// 'Bill:Ornery Rd']  );


adressBook(['Bob:Huxley Rd',

'John:MilwaukeeCrossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:MestaCrossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd']);