//FETCH API

document.addEventListener('DOMContentLoaded',attachEvents());

function loadPhoneBooks(baseUrl,onSuccess){
 fetch(baseUrl)
 .then(result=>result.json())
 .then(onSuccess)
 .catch(error=>console.error(error)
 )


}
function createPhoneBook(baseUrl,contact,onSuccess){
    fetch(baseUrl,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(contact)
    })
 .then(result=>result.json())
 .then(onSuccess)
 .catch(error=>console.error(error)
 )
}
function deletePhoneBook(baseUrl,contact,onSuccess){
 fetch(baseUrl+`/${contact._id}`,{
    method:'DELETE'
 })
 .then(result=>result.json())
 .then(onSuccess)
 .catch(error=>console.error(error)
 )
}

function createElement(tag,properties,container=null){

    const el=document.createElement(tag);

    Object.keys(properties).forEach(key=>{
      if(typeof properties[key]==='object'){
       Object.assign(el.dataset,properties[key]);
      }else{
        el[key]=properties[key];
      }

    });
    if(container) container.append(el);
    return el;
}




function attachEvents() {
 const loadButton=document.querySelector('#btnLoad');
 const phoneBookEl=document.querySelector('#phonebook');

 const createButton=document.querySelector('#btnCreate');

 const baseUrl='http://localhost:3030/jsonstore/phonebook';

function createEntry({person,phone,_id}){
    
    const entryEl =  createElement('li',{textContent:`${person}: ${phone}`,dataset:{person,phone,_id}},phoneBookEl);
    const deleteEntryEl=createElement('button',{textContent:'Delete',onclick: deleteEntryHandler},entryEl);
   }

function deleteEntry(contact){
    phoneBookEl.querySelector(`li[data-_id="${contact._id}"]`).remove();
    }  
   
function createEntryHandler(e){
   const inputs=document.querySelectorAll('input[type="text"][id]');
   const [person,phone]=[...inputs].map(field=>field.value);
   if(!person ||!phone) return;
   const contact={person,phone};
   createPhoneBook(baseUrl,contact,(result)=>{
      createEntry(result);
   })
    
   }

function deleteEntryHandler(e){
    entryEl=e.target.closest('li');

    const contact=Object.assign({},entryEl.dataset);

    deletePhoneBook(baseUrl,contact,result=>{
       
            deleteEntry(result);
    })
  }
    loadButton.addEventListener('click',loadPhoneBooks(baseUrl,(result)=>{
  Object.values(result).forEach(createEntry);
  }));

  createButton.addEventListener('click',createEntryHandler);

 

 
}

