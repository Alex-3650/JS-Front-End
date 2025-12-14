document.addEventListener('DOMContentLoaded',init);


function loadMatches(url,onSucces){
  fetch(url)
  .then(responde=>responde.json())
  .then(result=>{
     console.log(result);
     onSucces(result)})
  .catch(error=>console.log('Error: ',error))  
}
function createMatch(url,body,onSucces){
  fetch(url,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(body)
  })
  .then(responde=>responde.json())
  .then(result=>{
     console.log(result);
     onSucces(result)})
  .catch(error=>console.log('Error: ',error))  
}
function updateMatch(url,body,onSucces){
  fetch(url+body._id,{
    method:'PUT',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(body)
  })
  .then(responde=>responde.json())
  .then(result=>{
     console.log(result);
     onSucces(result)})
  .catch(error=>console.log('Error: ',error))  
}
function deleteMatch(url,id,onSucces){
  fetch(url+id,{
    method:'DELETE',
  })
  .then(responde=>responde.json())
  .then(result=>{
     console.log(result);
     onSucces(result)})
  .catch(error=>console.log('Error: ',error))  
}

function  createElement(tag,properties,container){
    const el=document.createElement(tag);
    Object.keys(properties).forEach(key=>{

      if(typeof properties[key] ==='object'){
        el[key]??={};
       Object.assign(el[key],properties[key])
      }else{
        el[key]=properties[key];
      }
    })
     if(container) container.append(el);
     return el;
  }


  function init(){
  
  const baseUrl='http://localhost:3030/jsonstore/matches/';
  const listItem=document.querySelector('#list');
  const loadtBtn=document.querySelector('#load-matches');
  const addBtn=document.querySelector('#add-match');
  const editBtn=document.querySelector('#edit-match');
  const inputsEl=[...document.querySelectorAll('.form-wrap input[type="text"]')];

function createEntry({host,score,guest,_id}){
    const li=createElement('li',{className:'list',dataset:{host,score,guest,_id}},listItem);
    const divEl=createElement('div',{className:'info'},li);
    createElement('p',{textContent:host},divEl);
    createElement('p',{textContent:score},divEl);
    createElement('p',{textContent:guest},divEl);
    const btnWrapper=createElement('div',{className:'btn-wrapper'},li);
    createElement('button',{className:'change-btn',textContent:'Change',onclick:editHandler},btnWrapper);
    createElement('button',{className:'delete-btn',textContent:'Delete',onclick:deleteHandler},btnWrapper);

  }
function addMatch(e){
    const[host,score,guest]=inputsEl.map(field=>field.value);
    if(!host||!score||!guest) return;
    const matchObj={host,score,guest}
    createMatch(baseUrl,matchObj,result=>createEntry(result));
    
    inputsEl.forEach(field=>field.value='');    
 }
function loadEntries(){
     
        listItem.innerHTML='';
        loadMatches(baseUrl,result=>{
            Object.values(result).forEach(result=>createEntry(result))

        })
  }
function deleteEntry({host,score,guest,_id}){
        
  }
function deleteHandler(e){
        const entryEl= e.target.closest('li');

    deleteMatch(baseUrl,entryEl.dataset._id,deleteEntry);

  }
  
function editHandler(e){
    const entryEl= e.target.closest('li');
    const data=entryEl.dataset;
    const properties=[...Object.values(data)]
    inputsEl.forEach((field,index)=>field.value=properties[index]);
    editBtn.disabled=false;
    editBtn.dataset._id=entryEl.dataset._id;
    addBtn.disabled=true;
  }

function editMatch(e){
    const[host,score,guest]=inputsEl.map(field=>field.value);
    const matchObj={host,score,guest,_id:e.target.dataset._id};
    console.log(matchObj);
    updateMatch(baseUrl,matchObj,result=>{
        loadEntries();
        inputsEl.map(field=>field.value='');
        editBtn.disabled=true;
        addBtn.disabled=false;
      })

  }

addBtn.addEventListener('click',addMatch);
loadtBtn.addEventListener('click',loadEntries);
editBtn.addEventListener('click',editMatch);
}
