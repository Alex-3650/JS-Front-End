document.addEventListener('DOMContentLoaded', solve);

function solve() {
    
    document.querySelector('#encode').addEventListener('submit',e=>{
        e.preventDefault();
         document.querySelector('#decode textarea').value='';
        const inputEl=e.target.querySelector('textarea');
        const message=inputEl.value;
        const encodeEl=message.split('').map(c=>String.fromCharCode(c.charCodeAt()+1)).join('');
        console.log(encodeEl);
         document.querySelector('#decode textarea').value=encodeEl;
         inputEl.value='';


    });


    document.querySelector('#decode').addEventListener('submit',e=>{
        e.preventDefault();
        const inputEl=e.target.querySelector('textarea');
       let message=inputEl.value;
        const decodeEl=message.split('').map(c=>String.fromCharCode(c.charCodeAt()-1)).join('');
        inputEl.value=decodeEl;
        
    });
}