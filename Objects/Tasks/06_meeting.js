function processMessage(requests){
   
const calendar={};

  requests.forEach(request => {
     const [day,person]= request.split(' ');

     if(calendar.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
     }else{
        calendar[day]  =person; 
        console.log(`Scheduled for ${day}`);
     }
   });

  
     for(const key in calendar){

        console.log(`${key} -> ${calendar[key]}`);
     }

}
processMessage([
'Monday Peter',
'Wednesday Bill',
'Monday Tim', 
'Friday Tim']);




