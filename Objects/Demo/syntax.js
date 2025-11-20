let cat={
    name:'Petya',
    age: 8,
}
console.log(cat);

//dynamically created
let someCat={};
someCat.name='kebap';
someCat.age=3;
someCat.isMeal=true;

console.log(someCat);

let blackCat={};

blackCat['name']='ivcho';
blackCat['age']=4;
blackCat['color']='black';
console.log(blackCat);

const replicant={
    name:'bob',
    status:function(){
        console.log('this is method in js');
    },
    isAnnoyed(){
        console.log('He is now annoyed!');
    }
}
replicant.isAnnoyed();
replicant.status();
replicant.isAnnoyed=()=>{
    console.log('myu');
}
replicant.isAnnoyed();

console.log(replicant);

