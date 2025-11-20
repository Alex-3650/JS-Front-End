document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailData=document.querySelector('#email');

     function emailValidateEventListener(e){
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/

        if(!pattern.test(e.currentTarget.value)){
           
          return e.currentTarget.classList.add('error');
        }
        
        e.currentTarget.classList.remove('error');
    }

    emailData.addEventListener('change', emailValidateEventListener);
    
}
