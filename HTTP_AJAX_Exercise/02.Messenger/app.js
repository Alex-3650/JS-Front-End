function attachEvents() {
    
    const baseUrl='http://localhost:3030/jsonstore/messenger';

   const textArea=document.querySelector('#messages');
   const inputs=document.querySelectorAll('#controls input[name]');

   const submitEl=document.querySelector('#submit');
   const refreshEl=document.querySelector('#refresh');


   submitEl.addEventListener('click',e=>{
    const [author,content]=[...inputs].map(field=>field.value);

    if(!author||!content) return;
     
     const body={author,content};
     console.log(body);

     fetch(baseUrl,{
         method:'POST',
         'Content-Type': 'application/json',
         body:JSON.stringify(body)
        })
      .then(result=>result.json())
      .then(messages=>{
          refreshEl.click();
      })
      .catch(error=>console.error('Error: ',error))


   })

   refreshEl.addEventListener('click',e=>{
      fetch(baseUrl)
      .then(result=>result.json())
      .then(messages=>{

        textArea.innerHTML='';
        inputs.forEach(el=>el.value='');



        Object.values(messages).forEach(message=>{

         textArea.textContent+=`${message.author}: ${message.content}\n`;
        })
      })
      .catch(error=>console.error('Error: ',error))

   })

}

attachEvents();