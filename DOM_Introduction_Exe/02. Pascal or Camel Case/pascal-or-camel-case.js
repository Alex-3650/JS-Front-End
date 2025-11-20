function solve() {
  const text=document.querySelector('#text').value.toLowerCase().trim();
  const convention=document.querySelector('#naming-convention').value.toLowerCase().trim();
  result=document.querySelector('#result');
  
  if(convention=='pascal case'){
      const pascalText=text.split(' ').reduce((acc,element) => {
       acc+=element = element[0].toUpperCase() + element.slice(1);
       return acc;
      },'');

       result.textContent=pascalText;


  }else if(convention=='camel case'){
const camelText=text.split(' ').reduce((acc,element,index) => {
        if(index!=0){
        acc+=element = element[0].toUpperCase() + element.slice(1);
         
        }else{
          acc+=element;
        }
        return acc;
      },'');
      
       result.textContent=camelText;

  }else{
       result.textContent='Error!'
  }

}