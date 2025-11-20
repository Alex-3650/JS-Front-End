function sumTable() {
   const sums=document.querySelectorAll('table tbody  tr:not(:last-child) td:last-child');
  
  let sum= [...sums].reduce((acc,item)=>{

    acc+=Number(item.textContent);
    return acc;


   },0);
  
   document.querySelector('table tbody tr:last-child td:last-child').textContent=sum;
}