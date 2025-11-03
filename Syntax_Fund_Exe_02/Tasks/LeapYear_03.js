function leapYear(year){
 
   if((year%4===0 && year%100===1)|| year%400==0){
    console.log('Leap year!');
   }
  console.log('Not a leap year!');
 
}