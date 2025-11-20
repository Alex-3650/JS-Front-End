function toggle() {

 const button=  document.querySelector('.head .button');
   const contentEL= document.querySelector('#extra');


   if(contentEL.style.display=='block'){
    contentEL.style.display='none';
    button.textContent='MORE';
   }else{
  contentEL.style.display='block';
    button.textContent='LESS';
   }
}