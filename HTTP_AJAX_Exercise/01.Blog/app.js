function attachEvents() {
    const baseUrl='http://localhost:3030/jsonstore/blog';
   
   

const postsEl=document.querySelector('#posts');
const postTitleEl=document.querySelector('#post-title');
const postBodyEL=document.querySelector("#post-body");
const postCommentsEl=document.querySelector("#post-comments");

document.querySelector('#btnLoadPosts').addEventListener('click',loadHandler);
document.querySelector('#btnViewPost').addEventListener('click',viewHandler); 
   

 function  loadHandler(e){
    postsEl.innerHTML='';
    fetch(baseUrl +'/posts')
    .then(response=>response.json())
    .then(posts=>{
          console.log(posts);
          Object.values(posts).forEach(post=>{
          const optionEl= document.createElement('option');
        //   optionEl.dataset.id=post.id;
        //   optionEl.dataset.title=post.title;
        //   optionEl.dataset.body=post.body;
        Object.assign(optionEl.dataset,post);
          
        optionEl.textContent=post.title;
          postsEl.appendChild(optionEl);
          });
    })
    .catch(error=>console.error('Error: ',error));
   }

   function viewHandler(e){
      fetch(baseUrl +'/comments')
    .then(response=>response.json())
    .then(comments=>{
         postCommentsEl.innerHTML='';

        const optionEl=postsEl.querySelector('option:checked');

        postTitleEl.textContent=optionEl.dataset.title;
        postBodyEL.textContent=optionEl.dataset.body;

        Object.values(comments).forEach(comment=>{
            console.log(comment);
            if(comment.postId===optionEl.dataset.id){
                const commentEl=document.createElement('li');
                commentEl.textContent=comment.text;
                postCommentsEl.append(commentEl);
            }
        })    
         
    });
   

   }
   
}

attachEvents();