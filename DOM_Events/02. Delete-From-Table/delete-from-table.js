function deleteByEmail() {
    const emailToDelete=document.querySelector('input[name="email"]')
    const users=document.querySelectorAll('table tbody tr td:nth-child(2)')
    const result=document.querySelector('#result');
            if(emailToDelete.value=='') return;
            
         let flag=0;
          users.forEach(person=>{
           if(person.textContent.toLowerCase().includes(emailToDelete.value.toLowerCase())){
                   person.parentElement.remove();   
                   flag++;   
                   result.textContent='User Deleted'; 
           }
          });
          if(flag==0){
            result.textContent='Not found.';
          }

          emailToDelete.value='';
}
