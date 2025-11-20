function solve() {
   const input=Number(document.querySelector('#input').value);
   const convertTo=document.querySelector('#selectMenuTo').value.toLowerCase();
   const result=document.querySelector('#result');


   switch(convertTo){

    case 'binary':
        result.value=input.toString(2);
        break;
        case 'hexadecimal':
            result.value=input.toString(16).toUpperCase();
        break;
   }
}