window.addEventListener("load", solve);

function solve() {
 function  createElement(tag,properties,container){
    const el=document.createElement(tag);
    Object.keys(properties).forEach(key=>{

      if(typeof properties[key] ==='object'){
       Object.assign(el[key],properties[key])
      }else{
        el[key]=properties[key];
      }
    })
     if(container) container.append(el);
     return el;
  }
  
  const fields=[...document.querySelectorAll('#name,#time,#description')];
  const addBtnEl=document.querySelector('#add-btn');
  const previewList=document.querySelector('#preview-list');
  const archiveList=document.querySelector('#archive-list');

  function createEntry({name,time,desc}){

    const entryEl= createElement('li',{dataset:{name,time,desc}},previewList);
    const articleEl=createElement('article',{},entryEl);
    createElement('p',{textContent:name},articleEl);
    createElement('p',{textContent:time},articleEl);
    createElement('p',{textContent:desc},articleEl);
    const buttonsEl=createElement('div',{className:'buttons'},entryEl);
    createElement('button',{className:'edit-btn',textContent:'Edit',onclick:editHandler},buttonsEl);
    createElement('button',{className:'next-btn',textContent:'Next',onclick:nextHandler},buttonsEl); 
  }

  addBtnEl.addEventListener('click',e=>{
     e.preventDefault();
     const [name,time,desc]=fields.map(fields=>fields.value);
    if(!name ||!time||!desc) return;

    createEntry({name,time,desc});

    console.log(e.target);
    e.target.disabled=true;
    fields.forEach(field=>field.value='');
  })

  function editHandler(e){
  const entryEl=e.target.closest('li');
  const values=[entryEl.dataset.name,entryEl.dataset.time,entryEl.dataset.desc];
  fields.forEach((field,index)=>{

     field.value=values[index];
  })
  addBtnEl.disabled=false;
  entryEl.remove();
  }


  function nextHandler(e){
    const entryEl=e.target.closest('li');
    entryEl.remove();
   
    entryEl.querySelector('div.buttons').remove();
    createElement('button',{className:'archive-btn',textContent:'archive',onclick:archiveHandler},entryEl);
     archiveList.append(entryEl);
   
    
  }

function  archiveHandler(e){
   const entryEl=e.target.closest('li');
    entryEl.remove();
    addBtnEl.disabled=false;
  }
}