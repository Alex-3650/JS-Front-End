//FETC API

function loadBooks(onSucces){

fetch('http://localhost:3030/jsonstore/collections/books')
.then(data=>data.json())
.then(onSucces)
.catch(error => console.error(error))
}

function createBook(book,onSucces){

fetch('http://localhost:3030/jsonstore/collections/books',{
     method:'POST',
     headers: {
            'Content-Type': 'application/json'
        },
     body:JSON.stringify(book)
}
   
)
.then(data=>data.json())
.then(onSucces)
.catch(error => console.error(error))
}

function updateBook(book,onSucces){

fetch(`http://localhost:3030/jsonstore/collections/books/${book._id}`,{
     method:'PUT',
      headers: {
            'Content-Type': 'application/json'
        },
     body:JSON.stringify(book)
})
.then(data=>data.json())
.then(onSucces)
.catch(error => console.error(error))
}

function deleteBook(book,onSucces){

fetch(`http://localhost:3030/jsonstore/collections/books/${book._id}`,{
    method:'DELETE'
})
.then(data=>data.json())
.then(onSucces)
.catch(error => console.error(error))
}
   function createElement(tag,properties,container){
   const element= document.createElement(tag);

   Object.keys(properties).forEach(property=>{
     if(typeof  properties[property] ==='object'){
        Object.assign(element.dataset,properties[property])
     }else{
        element[property]=properties[property];
     }
   });
   if(container) container.append(element);
   return element;

   }
   
//=======================================================================
//DOM API


document.addEventListener('DOMContentLoaded',e=>{
   
   const btnLoadAllEl=document.querySelector('#loadBooks')
   const bookTableEl=document.querySelector('table tbody');
   const formEl=document.querySelector('#form')
   const formSubmitEL=formEl.querySelector('button');
   formEl.dataset.status='create';

 function createEntry(book){
       const entryEl=createElement('tr',{dataset:{id:book._id,title:book.title,author:book.author}},bookTableEl);
       createElement('td',{textContent: book.title},entryEl);
       createElement('td',{textContent: book.author},entryEl);
       const actionsEl=createElement('td',{className:'actions'},entryEl);
       createElement('button',{textContent:'Edit',onclick: editEntryHandler },actionsEl);
       createElement('button',{textContent:'Delete',onclick:deleteEntryHandler},actionsEl);
    }

function deleteEntry(bookId){
    bookTableEl.querySelector(`tr[data-id="${bookId}"]`).remove();

}


 function editEntryHandler(e){
    
    const entryEl=e.target.closest('tr');
   document.querySelectorAll('.editing').forEach(row=>row.classList.remove('editing'))
    const inputs=formEl.querySelectorAll('input');
    const fields=[entryEl.dataset.title,entryEl.dataset.author];
    inputs.forEach((field,index)=>field.value=fields[index]);

    formEl.dataset.status = 'edit';
    formEl.dataset.book = entryEl.dataset.id;
    entryEl.classList.add('editing');


    console.log(e.target);

 }
 function deleteEntryHandler(e){
  formEl.dataset.status='delete';
   const entryEl=e.target.closest('tr');
   const book={_id:entryEl.dataset.id,title:entryEl.dataset.title,author:entryEl.dataset.author};
   deleteBook(book,(response)=>{
    deleteEntry(response._id);
   })
      
    console.log(e.target);

 }
 function reloadEntries(){
     bookTableEl.innerHTML='';
    
     loadBooks(result=>{ Object.values(result).forEach(createEntry);
    })
 }
 

 function formSubmit(e){
    const status=formEl.dataset.status;
    const fields=formEl.querySelectorAll('input');
    const[title,author]=[...fields].map(field=>field.value);

    if(!title || !author) return;
    console.log(title,author);
    console.log(status);

    if(status==='edit'){
         const bookId=formEl.dataset.book
         const book={_id:bookId,title,author};
         console.log(book);
         updateBook(book,result=>{
             deleteEntry(book._id);
             createEntry(result)
         });
    }else if(status==='delete'){
      deleteEntryHandler

    }else{
         const bookId=formEl.dataset.book
         const book={_id:bookId,title,author};
        createBook(book,createEntry(book));
    }
   fields.forEach(field=>field.value='');
   formEl.dataset.status='create';
 }



 formSubmitEL.addEventListener('click',formSubmit);
 
 btnLoadAllEl.addEventListener('click',reloadEntries);

 

});
 

   