function solve() {
  const townList=document.querySelectorAll('#towns li');
  const searchStr=document.querySelector('#searchText').value.toLowerCase();
  const result=document.querySelector('#result');

  if(searchStr =='')return;
    
  
  
  townList.forEach(town=>{
   town.classList.remove('match');
   // town.style.fontWeight='normal';
   // town.style.textDecoration='none';

     if(town.textContent.toLowerCase().includes(searchStr)){
    
       town.classList.add('match');
      // town.style.fontWeight='bold';
      // town.style.textDecoration='underline';
      // town.style.opacity=1;
    
     }
  });
  result.textContent=`${document.querySelectorAll('.match').length} matches found`;
}