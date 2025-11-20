// function calc() {
   
//     const elements=document.querySelectorAll('#num1,#num2');
//    let sum = [...elements].value.reduce((acc,elements)=>{
//         acc+=Number(elements);
//         return acc;
//     },0);
   
//     const inputElement=document.querySelector('#sum');

//     inputElement.value+=sum;
// }  
function calc() {
   
    const num1=Number(document.querySelector('#num1').value);
    const num2=Number(document.querySelector('#num2').value);
 
       document.querySelector('#sum').value=num1+num2;
 
}            