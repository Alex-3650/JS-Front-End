

function colorize() {
    const rows=document.querySelectorAll('table tbody tr:nth-child(even)');
   
    [...rows].forEach((el)=>{

           el.style.backgroundColor = 'teal';
        
    });
   
}