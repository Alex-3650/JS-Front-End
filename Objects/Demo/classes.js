class cat{
    #internalValue='secret';
     examCount=0;
    constructor(name,age,breed){
        this.name=name;
        this.age=age;
        this.breed=breed;
       
    }

    makeSound(){
        console.log(`${this.name} - Meow...`);
    }
    recordExam(){
        console.log(`${this.name} has been examinde.`);
        this.examCount++;
    }
    static hasVaccines(cat){
        return cat.examCount>0;
    }
    get internalValue(){
        return this. #internalValue;
    }
}


const zuza=new cat("Zuza",5,"persian")
console.log(zuza);
zuza.makeSound();
zuza.recordExam();
console.log(zuza.examCount);
console.log("Is Zuza vaccinated ->",cat.hasVaccines(zuza)?'yes':'no');
console.log(zuza.internalValue);