document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
   const selectEl=document.querySelector('#menu');


  document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    itemEl =  e.target.querySelector('#newItemText').value;
    valueEl =  e.target.querySelector('#newItemValue').value;
   
    if(itemEl=='' || valueEl=='') return;

    const newItem=document.createElement('option');

    newItem.textContent=itemEl;
    newItem.setAttribute('value',valueEl);

    selectEl.append(newItem);

    
     e.target.reset();
     e.target.querySelector('#newItemText').focus();



    
    
  });
}