
function solve(input){
const heroesCount=input.shift();
const heroesInput=input.splice(0,heroesCount);

const heroes=heroesInput.reduce((heroes,hero)=>{
let[name,power,energy]=  hero.split('-');

    power=power.split(',');
    
    energy=Number(energy);
    heroes[name]={power,energy}
    return heroes;  //'Iron Man': { power: [ 'Repulsor Beams', 'Flight' ], energy: 80 },
},{})


input.forEach(entry => {
    const line=entry.split(' * ');
    const command=line.shift();
      let name='';
    switch(command){

        case 'Use Power':
            
            name=line.shift();
            let[usedPower,usedEnergy]=line;
            usedEnergy=Number(usedEnergy);
            if(heroes[name].energy>=usedEnergy && heroes[name].power.includes(usedPower)){
                heroes[name].energy-=usedEnergy;
                console.log(`${name} has used ${usedPower} and now has ${heroes[name].energy} energy!`);
                
                
            }else{
                  console.log(`${name} is unable to use ${usedPower} or lacks energy!`);
            }

        break;
        case 'Learn':
            name=line.shift()
             let[skill]=line;
             if(heroes[name].power.includes(skill)){
                console.log(`${ name} already knows ${skill}.`);
             }else{
                console.log(`${ name} has learned ${skill}!`);
                heroes[name].power.push(skill);
             }

        break;
        case 'Train':
            name=line.shift();
            let[power]=line;
             power=Number(power);

             if(heroes[name].energy==100){
                console.log(`${ name} is already at full energy!`);
             }else{
                let subtract=0;
                 heroes[name].energy+=power;
                if( heroes[name].energy>100) {
                       subtract=heroes[name].energy-100;
                    heroes[name].energy=100;
                }
                console.log(`${ name} has trained and gained ${Math.abs(power-subtract)} energy!`);
               
                
             }
        break;
        default:
        break;
        



    }
});
 
Object.keys(heroes).forEach(key=>{
    console.log(`Superhero: ${key}`);
    console.log(`- Superpowers: ${heroes[key].power}`);
    console.log(`- Energy: ${ heroes[key].energy}`);
})

}

solve(([
"3",
"Iron Man-Repulsor Beams,Flight-80",
"Thor-Lightning Strike,Hammer Throw-10",
"Hulk-Super Strength-60",
"Use Power * Iron Man * Flight * 30",
"Train * Thor * 20",
"Train * Hulk * 50",
"Learn * Hulk * Thunderclap",
"Use Power * Hulk * Thunderclap * 70",
"Evil Defeated!"
]));


   