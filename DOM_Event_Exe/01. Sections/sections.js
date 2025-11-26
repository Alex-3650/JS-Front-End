document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl=document.querySelector('#task-input');
   const textEl = document.querySelector('input[type="text"]');
   const contentEl=document.querySelector('#content');

   formEl.addEventListener('submit',e=>{
      e.preventDefault();
      
     const sections=textEl.value.split(',');
    
     sections.forEach(el => {
       
      const newDivEl=document.createElement('div');
      const newParagraphEl=document.createElement('p');

      newParagraphEl.textContent=el;
      newParagraphEl.style.display='none';
      newDivEl.append(newParagraphEl);

      newDivEl.addEventListener('click',e=>{
         e.target.querySelector('p').style.display='block';
      });

     
     
      contentEl.append(newDivEl);
     });
   });
}